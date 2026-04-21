import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { getFeaturedProducts } from '@/config/products'
import { ProductCard } from '@/components/products/ProductCard'
import { Button } from '@/components/ui/Button'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Reveal } from '@/components/ui/Reveal'

export function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 6)

  return (
    <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div className="container-main relative">
        <Reveal className="text-center mb-14 md:mb-16">
          <div className="mb-5">
            <SectionEyebrow>Selecție</SectionEyebrow>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Produsele noastre
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            De la pâine tradițională la cozonaci și specialități de sezon,
            fiecare produs este pregătit cu ingrediente de calitate și multă grijă.
          </p>
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
          {featured.map((product) => (
            <motion.div
              key={product.slug}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2} className="text-center mt-12">
          <Link to="/produse">
            <Button variant="outline" size="lg" className="rounded-full">
              Vezi toate produsele
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
