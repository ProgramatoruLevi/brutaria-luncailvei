/**
 * Prerender script — renders all routes to static HTML using puppeteer.
 *
 * Spins up a small static server over ./dist, navigates puppeteer to each route,
 * waits for react-helmet-async to inject meta, and writes the resulting HTML to
 * <route>/index.html. The result: every route ships with per-page <title>,
 * description, OG tags, and JSON-LD without needing JS to render them.
 */
import { createServer } from 'http'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname, join, extname } from 'path'
import { fileURLToPath } from 'url'
import { getPrerenderRoutes } from './prerender-routes.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = resolve(__dirname, '..', 'dist')
const PORT = 4567
const CONCURRENCY = 4
const TIMEOUT = 30_000

const isCI = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true'

async function launchBrowser() {
  const { default: puppeteer } = await import('puppeteer')
  return puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })
}

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
}

function startServer() {
  return new Promise((ok) => {
    const srv = createServer((req, res) => {
      let fp = join(DIST, req.url === '/' ? '/index.html' : req.url)
      if (!existsSync(fp) || !extname(fp)) fp = join(DIST, 'index.html')
      try {
        const buf = readFileSync(fp)
        res.writeHead(200, { 'Content-Type': MIME[extname(fp)] || 'application/octet-stream' })
        res.end(buf)
      } catch {
        res.writeHead(404)
        res.end()
      }
    })
    srv.listen(PORT, () => {
      console.log(`  Server on :${PORT}`)
      ok(srv)
    })
  })
}

async function renderRoute(browser, route) {
  const page = await browser.newPage()
  await page.setRequestInterception(true)
  page.on('request', (r) => {
    if (['image', 'font', 'media'].includes(r.resourceType())) r.abort()
    else r.continue()
  })

  try {
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: TIMEOUT,
    })

    await page
      .waitForFunction(() => document.querySelector('meta[data-rh="true"]') !== null, {
        timeout: 8000,
      })
      .catch(() => {})

    await new Promise((r) => setTimeout(r, 600))

    const html = await page.content()
    const outDir = route === '/' ? DIST : join(DIST, route)
    mkdirSync(outDir, { recursive: true })
    writeFileSync(join(outDir, 'index.html'), html, 'utf-8')
    return { route, ok: true }
  } catch (err) {
    return { route, ok: false, error: err.message }
  } finally {
    await page.close()
  }
}

async function main() {
  const routes = getPrerenderRoutes()
  console.log(`\n⚡ Prerendering ${routes.length} routes via puppeteer${isCI ? ' (CI)' : ''}...\n`)

  const server = await startServer()
  const browser = await launchBrowser()

  let done = 0
  let errors = 0

  for (let i = 0; i < routes.length; i += CONCURRENCY) {
    const batch = routes.slice(i, i + CONCURRENCY)
    const results = await Promise.all(batch.map((r) => renderRoute(browser, r)))
    for (const r of results) {
      done++
      if (!r.ok) {
        errors++
        console.log(`  ✗ ${r.route} — ${r.error}`)
      }
    }
    process.stdout.write(`  ✓ ${done}/${routes.length}\r`)
  }

  await browser.close()
  server.close()
  console.log(`\n\n✓ Prerender: ${done - errors}/${routes.length} OK, ${errors} errors\n`)
  if (errors > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
