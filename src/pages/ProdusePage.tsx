import { useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { products, categoryLabels, type ProductCategory } from '@/config/products'
import { ProductCard } from '@/components/products/ProductCard'
import { SEOHead } from '@/components/shared/SEOHead'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Reveal } from '@/components/ui/Reveal'
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
      <section className="relative pt-32 md:pt-40 pb-14 md:pb-20 bg-gradient-to-b from-muted/40 via-background to-background overflow-hidden">
        <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container-main relative text-center">
          <Reveal>
            <div className="mb-5">
              <SectionEyebrow>Catalog complet</SectionEyebrow>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 tracking-tight leading-[1.05]">
              Produsele <span className="italic text-primary">noastre</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              De la pâine tradițională la specialități de sezon — fiecare produs
              este pregătit cu ingrediente de calitate și multă dragoste.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter & Products */}
      <section className="pb-20 md:pb-28">
        <div className="container-main">
          {/* Category chips */}
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {allCategories.map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      'relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer',
                      isActive
                        ? 'text-white'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-chip"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-primary shadow-md shadow-primary/25"
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative">
                      {cat === 'toate' ? 'Toate produsele' : categoryLabels[cat]}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* Products grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.slug}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

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
