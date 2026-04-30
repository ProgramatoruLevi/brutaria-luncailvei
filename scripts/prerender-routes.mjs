/**
 * Returns the full list of routes to prerender.
 * Used by scripts/prerender.mjs.
 */
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

function extractProductSlugs() {
  const content = readFileSync(resolve(root, 'src/config/products.ts'), 'utf-8')
  const slugs = []
  const pattern = /slug:\s*'([^']+)'/g
  let match
  while ((match = pattern.exec(content)) !== null) {
    slugs.push(match[1])
  }
  return slugs
}

export function getPrerenderRoutes() {
  const productSlugs = extractProductSlugs()

  return [
    '/',
    '/produse',
    '/despre-noi',
    '/contact',
    '/politica-confidentialitate',
    '/termeni-conditii',
    '/politica-cookies',
    '/setari-cookie',
    ...productSlugs.map((slug) => `/produse/${slug}`),
  ]
}

if (process.argv[1] && process.argv[1].includes('prerender-routes')) {
  const routes = getPrerenderRoutes()
  console.log(`Total routes to prerender: ${routes.length}`)
  console.log(routes.join('\n'))
}
