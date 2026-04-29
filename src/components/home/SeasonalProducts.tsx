import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { getSeasonalProducts } from '@/config/products'
import { Button } from '@/components/ui/Button'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Reveal } from '@/components/ui/Reveal'

export function SeasonalProducts() {
  const seasonal = getSeasonalProducts()

  if (seasonal.length === 0) return null

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-accent/10 via-background to-background relative overflow-hidden">
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div className="container-main relative">
        <Reveal className="text-center mb-14">
          <div className="mb-5">
            <SectionEyebrow>Cozonacii noștri</SectionEyebrow>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Gustul sărbătorilor
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Cozonaci pufoși, frământați manual și copți după rețeta tradițională.
            Disponibili în mai multe variante — cu nucă, mac, rahat sau ciocolată.
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {seasonal.map((product) => (
            <motion.div
              key={product.slug}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <Link
                to={`/produse/${product.slug}`}
                className="group relative block bg-surface rounded-2xl overflow-hidden shadow-sm ring-1 ring-border/40 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1 hover:ring-accent/50 transition-all duration-300 cursor-pointer"
              >
                {/* Top accent stripe */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/60 via-accent-dark to-accent/60 z-10" aria-hidden="true" />

                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {product.availabilityNote && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-accent-dark text-white text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-md">
                      <Sparkles className="w-3 h-3" />
                      De sezon
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                  {product.availabilityNote && (
                    <p className="text-xs text-accent-dark font-medium mt-3 pt-3 border-t border-border/50">
                      {product.availabilityNote}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2} className="text-center mt-12">
          <Link to="/produse">
            <Button variant="primary" size="lg" className="rounded-full shadow-lg shadow-primary/20">
              Vezi toate produsele
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
