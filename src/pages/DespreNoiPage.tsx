import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Leaf, Award } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SEOHead } from '@/components/shared/SEOHead'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Reveal } from '@/components/ui/Reveal'

const processSteps = [
  {
    title: 'Selectarea ingredientelor',
    description: 'Fiecare ingredient este ales cu grijă de la furnizori locali de încredere. Folosim făină de calitate superioară, drojdie naturală și materii prime proaspete.',
    image: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=700&h=500&fit=crop',
    alt: 'Ingrediente proaspete pentru brutărie',
  },
  {
    title: 'Frământare și preparare',
    description: 'Aluatul este frământat cu răbdare și lăsat să crească natural, fără grabă și fără aditivi. Acest proces lent este secretul gustului autentic.',
    image: 'https://images.unsplash.com/photo-1612392062422-ef19b42f74df?w=700&h=500&fit=crop',
    alt: 'Brutar frământând aluatul',
  },
  {
    title: 'Coacere și produse proaspete',
    description: 'Fiecare produs este copt la temperatura perfectă, în cuptoare tradiționale. Rezultatul: o crustă aurie, un miez pufos și un gust care te duce cu gândul la copilărie.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&h=500&fit=crop',
    alt: 'Pâine proaspătă scoasă din cuptor',
  },
]

const values = [
  {
    icon: Heart,
    title: 'Tradiție',
    description: 'Respectăm rețetele tradiționale și modul de preparare transmis din generație în generație.',
  },
  {
    icon: Leaf,
    title: 'Prospețime',
    description: 'Toate produsele sunt pregătite proaspăt în fiecare dimineață, fără conservanți sau aditivi.',
  },
  {
    icon: Award,
    title: 'Calitate',
    description: 'Nu facem compromisuri la calitate. Fiecare ingredient este atent selecționat și verificat.',
  },
]

export function DespreNoiPage() {
  return (
    <>
      <SEOHead
        title="Despre noi"
        description="Povestea Brutăriei Lunca Ilvei — tradiție, prospețime și dragoste pentru meserie, din inima Bistriței-Năsăud."
        path="/despre-noi"
      />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-14 md:pb-20 bg-gradient-to-b from-muted/40 via-background to-background overflow-hidden">
        <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container-main relative text-center">
          <Reveal>
            <div className="mb-5">
              <SectionEyebrow>Despre noi</SectionEyebrow>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 tracking-tight leading-[1.05]">
              Brutăria din <span className="italic text-primary">Lunca Ilvei</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Suntem o brutărie tradițională din Lunca Ilvei, dedicată preparării
              produselor de panificație de cea mai bună calitate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative max-w-lg">
                <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-accent/40" aria-hidden="true" />
                <img
                  src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=700&h=500&fit=crop"
                  alt="Brutăria Lunca Ilvei"
                  className="relative w-full rounded-2xl shadow-2xl object-cover aspect-[4/3] ring-1 ring-black/5"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mb-4">
                <SectionEyebrow align="left">Istoria brutăriei</SectionEyebrow>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
                Povestea <span className="italic text-primary">noastră</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base md:text-lg">
                Brutăria Lunca Ilvei s-a născut din dorința de a aduce comunității
                noastre produse de panificație de cea mai bună calitate. Situată în
                inima Bistriței-Năsăud, brutăria noastră combină tradițiile locale
                cu standardele moderne de calitate.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Echipa noastră de brutari experimentați se trezește în fiecare
                dimineață cu noaptea în cap pentru a pregăti pâine proaspătă, cozonaci
                aromați și o varietate de produse de patiserie care îți amintesc de
                gustul de acasă.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Credem că pâinea bună începe cu ingrediente bune. De aceea, folosim
                doar făină de cea mai bună calitate, drojdie naturală și materii prime
                proaspete, fără conservanți sau aditivi artificiali.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
        <div className="container-main relative">
          <Reveal className="text-center mb-16">
            <div className="mb-5">
              <SectionEyebrow>Procesul nostru</SectionEyebrow>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              De la grâu la pâine
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              De la selecția ingredientelor până la produsul final — fiecare etapă
              este realizată cu grijă și atenție la detalii.
            </p>
          </Reveal>

          <div className="space-y-20 md:space-y-28">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={0.05}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`absolute ${index % 2 === 1 ? '-top-4 -left-4' : '-top-4 -right-4'} w-full h-full rounded-2xl border-2 border-accent/40`} aria-hidden="true" />
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="relative w-full rounded-2xl shadow-xl object-cover aspect-[4/3] ring-1 ring-black/5"
                      loading="lazy"
                    />
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-4 mb-5">
                      <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white font-serif text-xl font-bold shadow-lg shadow-primary/20 ring-4 ring-accent/20">
                        {index + 1}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <Reveal className="text-center mb-14">
            <div className="mb-5">
              <SectionEyebrow>Valori</SectionEyebrow>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Ce ne definește
            </h2>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {values.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative text-center bg-gradient-to-br from-surface to-background rounded-2xl p-8 shadow-sm ring-1 ring-border/50 hover:shadow-xl hover:-translate-y-1 hover:ring-accent/40 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-5 ring-4 ring-primary/5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/40 via-primary to-primary-dark/80" aria-hidden="true" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-main relative text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Descoperă <span className="italic text-accent-light">produsele noastre</span>
            </h2>
            <p className="text-white/85 mb-10 max-w-xl mx-auto text-base md:text-lg">
              De la pâine tradițională la specialități de sezon — avem ceva pentru fiecare gust.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/produse">
                <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 shadow-xl">
                  Vezi produsele
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/50 text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/5"
                >
                  Contactează-ne
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
