import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getFeaturedProducts } from '@/config/products'
import { ProductCard } from '@/components/products/ProductCard'
import { Button } from '@/components/ui/Button'

export function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 6)

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Produsele noastre
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            De la pâine tradițională la cozonaci și specialități de sezon,
            fiecare produs este pregătit cu ingrediente de calitate și multă grijă.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/produse">
            <Button variant="outline" size="lg">
              Vezi toate produsele
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
