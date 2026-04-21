import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Phone, MessageCircle, Check } from 'lucide-react'
import { getProductBySlug, getRelatedProducts, categoryLabels } from '@/config/products'
import { siteConfig } from '@/config/site'
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/utils'
import { ProductCard } from '@/components/products/ProductCard'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { SEOHead } from '@/components/shared/SEOHead'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Reveal } from '@/components/ui/Reveal'

const tagConfig: Record<string, { label: string; variant: 'default' | 'seasonal' | 'bestseller' | 'new' }> = {
  traditional: { label: 'Tradițional', variant: 'default' },
  sezon: { label: 'De sezon', variant: 'seasonal' },
  bestseller: { label: 'Bestseller', variant: 'bestseller' },
  nou: { label: 'Nou', variant: 'new' },
}

const highlights = [
  'Pregătit proaspăt zilnic',
  'Ingrediente naturale de calitate',
  'Rețete tradiționale autentice',
]

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined

  if (!product) {
    return <Navigate to="/produse" replace />
  }

  const related = getRelatedProducts(product.slug, 3)

  return (
    <>
      <SEOHead
        title={product.name}
        description={product.shortDescription}
        path={`/produse/${product.slug}`}
      />

      <div className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-main">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-10" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary transition-colors duration-200">Acasă</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/produse" className="hover:text-primary transition-colors duration-200">Produse</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <Reveal>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-accent/40 pointer-events-none" aria-hidden="true" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/10 blur-xl pointer-events-none" aria-hidden="true" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-accent/30">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </Reveal>

            {/* Details */}
            <Reveal delay={0.1}>
              <div className="mb-3">
                <SectionEyebrow align="left">{categoryLabels[product.category]}</SectionEyebrow>
              </div>

              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
                }}
                className="flex flex-wrap gap-2 mb-5"
              >
                {product.tags.map((tag) => {
                  const config = tagConfig[tag]
                  if (!config) return null
                  return (
                    <motion.div
                      key={tag}
                      variants={{
                        hidden: { opacity: 0, y: 8 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                      }}
                    >
                      <Badge variant={config.variant}>{config.label}</Badge>
                    </motion.div>
                  )
                })}
              </motion.div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {product.longDescription}
              </p>

              {product.availabilityNote && (
                <div className="relative bg-gradient-to-r from-accent/20 via-accent/10 to-transparent rounded-xl px-5 py-3.5 mb-8 ring-1 ring-accent/30">
                  <p className="text-sm text-accent-dark font-semibold flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-dark" />
                    {product.availabilityNote}
                  </p>
                </div>
              )}

              {/* Highlights */}
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
                }}
                className="space-y-3 mb-9"
              >
                {highlights.map((item) => (
                  <motion.li
                    key={item}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                    }}
                    className="flex items-center gap-3 text-sm md:text-base text-foreground"
                  >
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700 shrink-0">
                      <Check className="w-4 h-4" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <a href={getPhoneUrl(siteConfig.phone)}>
                  <Button variant="primary" size="lg" className="rounded-full shadow-lg shadow-primary/25">
                    <Phone className="w-5 h-5" />
                    Sună acum
                  </Button>
                </a>
                <a
                  href={getWhatsAppUrl(siteConfig.whatsapp, `Bună ziua! Aș dori să comand: ${product.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="rounded-full bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/25">
                    <MessageCircle className="w-5 h-5" />
                    Comandă pe WhatsApp
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-24 md:mt-32">
              <Reveal className="text-center mb-12">
                <div className="mb-4">
                  <SectionEyebrow>Descoperă și</SectionEyebrow>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                  Produse similare
                </h2>
              </Reveal>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {related.map((p) => (
                  <motion.div
                    key={p.slug}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    <ProductCard product={p} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
