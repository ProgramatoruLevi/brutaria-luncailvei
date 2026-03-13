import { useState, useMemo } from 'react'
import { products, categoryLabels, type ProductCategory } from '@/config/products'
import { ProductCard } from '@/components/products/ProductCard'
import { SEOHead } from '@/components/shared/SEOHead'
import { cn } from '@/lib/utils'

const allCategories: (ProductCategory | 'toate')[] = ['toate', 'paine', 'patiserie', 'cozonaci', 'sezon', 'specialitati']

export function ProdusePage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'toate'>('toate')

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'toate') return products
    return products.filter(p => p.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <SEOHead
        title="Produse"
        description="Descoperă gama noastră de pâine, patiserie, cozonaci și produse de sezon. Toate pregătite zilnic din ingrediente naturale."
        path="/produse"
      />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-muted/30">
        <div className="container-main text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Produsele noastre
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            De la pâine tradițională la specialități de sezon — fiecare produs
            este pregătit cu ingrediente de calitate și multă dragoste.
          </p>
        </div>
      </section>

      {/* Filter & Products */}
      <section className="py-12 md:py-16">
        <div className="container-main">
          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer',
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-border'
                )}
              >
                {cat === 'toate' ? 'Toate produsele' : categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              Nu sunt produse în această categorie momentan.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
