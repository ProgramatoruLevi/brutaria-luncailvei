import { motion } from 'framer-motion'
import { Wheat, Timer, Sparkles } from 'lucide-react'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Reveal } from '@/components/ui/Reveal'

const steps = [
  {
    icon: Wheat,
    title: 'Ingrediente atent alese',
    description:
      'Selectăm cu grijă fiecare ingredient — făină de calitate superioară, drojdie naturală și materii prime proaspete de la furnizori de încredere.',
  },
  {
    icon: Timer,
    title: 'Preparare zilnică',
    description:
      'În fiecare dimineață, echipa noastră pregătește de la zero toate produsele. Aluatul este frământat și lăsat să crească natural, fără grabă.',
  },
  {
    icon: Sparkles,
    title: 'Gust autentic',
    description:
      'Rezultatul este un gust autentic, care te duce cu gândul la pâinea bunicii — crocantă pe dinafară, pufoasă pe dinăuntru, plină de aromă.',
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
      <div className="container-main relative">
        <Reveal className="text-center mb-16">
          <div className="mb-5">
            <SectionEyebrow>De ce ne aleg clienții</SectionEyebrow>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Calitatea în fiecare detaliu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Calitatea nu este doar un cuvânt pentru noi — este modul în care lucrăm în fiecare zi.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {steps.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="relative group"
            >
              <div className="relative h-full bg-gradient-to-br from-surface to-background rounded-2xl p-8 pt-12 shadow-sm ring-1 ring-border/50 hover:shadow-xl hover:-translate-y-1 hover:ring-accent/40 transition-all duration-300">
                {/* Big serif step number */}
                <span
                  className="absolute -top-4 left-6 font-serif text-5xl md:text-6xl font-bold text-accent/80 select-none leading-none"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
