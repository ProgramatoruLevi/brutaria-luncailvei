import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getSeasonalProducts } from '@/config/products'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export function SeasonalProducts() {
  const seasonal = getSeasonalProducts()

  if (seasonal.length === 0) return null

  return (
    <section className="py-16 md:py-24 bg-accent/10">
      <div className="container-main">
        <div className="text-center mb-12">
          <Badge variant="seasonal" className="mb-4 text-sm px-4 py-1.5">De sezon</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Produse de sezon
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sărbătorește tradițiile cu produsele noastre speciale, pregătite
            cu drag pentru momentele importante din viața ta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {seasonal.map((product) => (
            <Link
              key={product.slug}
              to={`/produse/${product.slug}`}
              className="group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1.5">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {product.shortDescription}
                </p>
                {product.availabilityNote && (
                  <p className="text-xs text-accent-dark font-medium">
                    {product.availabilityNote}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/produse">
            <Button variant="primary" size="md">
              Vezi toate produsele
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
