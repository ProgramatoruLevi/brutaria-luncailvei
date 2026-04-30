/**
 * Generates sitemap.xml at build time by extracting product slugs from the products config.
 * Run: node scripts/generate-sitemap.mjs
 * Output: dist/sitemap.xml (or public/sitemap.xml if dist doesn't exist)
 */
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const SITE_URL = process.env.VITE_SITE_URL?.replace(/\/$/, '') || 'https://brutaria-luncailvei.ro'
const TODAY = new Date().toISOString().split('T')[0]

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

const productSlugs = extractProductSlugs()

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/produse', priority: '0.9', changefreq: 'weekly' },
  { path: '/despre-noi', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
]

const productRoutes = productSlugs.map((slug) => ({
  path: `/produse/${slug}`,
  priority: '0.8',
  changefreq: 'monthly',
}))

const allRoutes = [...staticRoutes, ...productRoutes]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

const distDir = resolve(root, 'dist')
const outPath = existsSync(distDir)
  ? resolve(distDir, 'sitemap.xml')
  : resolve(root, 'public', 'sitemap.xml')

writeFileSync(outPath, xml, 'utf-8')
console.log(`✓ sitemap.xml generated: ${allRoutes.length} URLs → ${outPath}`)
