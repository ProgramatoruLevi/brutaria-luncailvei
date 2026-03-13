import { useParams, Link, Navigate } from 'react-router-dom'
import { ChevronRight, Phone, MessageCircle, Check } from 'lucide-react'
import { getProductBySlug, getRelatedProducts, categoryLabels } from '@/config/products'
import { siteConfig } from '@/config/site'
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/utils'
import { ProductCard } from '@/components/products/ProductCard'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { SEOHead } from '@/components/shared/SEOHead'

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

      <div className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container-main">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary transition-colors duration-200">Acasă</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/produse" className="hover:text-primary transition-colors duration-200">Produse</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="default">{categoryLabels[product.category]}</Badge>
                {product.tags.map((tag) => {
                  const config = tagConfig[tag]
                  if (!config) return null
                  return <Badge key={tag} variant={config.variant}>{config.label}</Badge>
                })}
              </div>

              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {product.longDescription}
              </p>

              {product.availabilityNote && (
                <p className="text-sm text-accent-dark font-medium bg-accent/10 rounded-lg px-4 py-2.5 mb-6">
                  {product.availabilityNote}
                </p>
              )}

              {/* Highlights */}
              <ul className="space-y-2.5 mb-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="w-4 h-4 text-green-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <a href={getPhoneUrl(siteConfig.phone)}>
                  <Button variant="primary" size="lg">
                    <Phone className="w-5 h-5" />
                    Sună acum
                  </Button>
                </a>
                <a
                  href={getWhatsAppUrl(siteConfig.whatsapp, `Bună ziua! Aș dori să comand: ${product.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
                    <MessageCircle className="w-5 h-5" />
                    Comandă pe WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
                Produse similare
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
