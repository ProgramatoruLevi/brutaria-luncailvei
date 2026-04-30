import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Wheat, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Reveal } from '@/components/ui/Reveal'

const stats = [
  { icon: Sparkles, label: 'Coacere zilnică' },
  { icon: Wheat, label: 'Ingrediente locale' },
  { icon: Heart, label: 'Rețete tradiționale' },
]

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div className="container-main relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="mb-4">
              <SectionEyebrow align="left">Povestea noastră</SectionEyebrow>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Tradiție coaptă cu <span className="italic text-primary">grijă</span>, zi de zi
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base md:text-lg">
              Brutăria Lunca Ilvei s-a născut din dorința de a aduce comunității noastre
              produse de panificație de cea mai bună calitate, pregătite cu grijă și respect
              pentru tradițiile locului.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              În fiecare dimineață, brutarii noștri se trezesc cu noaptea în cap pentru ca
              tu să te bucuri de pâine proaspătă, cozonaci pufoși și produse de patiserie
              care îți amintesc de gustul de acasă.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-9">
              {stats.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface ring-1 ring-accent/30 text-xs font-medium text-secondary-dark shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-accent-dark" />
                  {label}
                </span>
              ))}
            </div>

            <Link to="/despre-noi">
              <Button variant="outline" size="md" className="rounded-full">
                Află mai multe despre noi
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="order-1 lg:order-2">
            <div className="relative max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              {/* Decorative frame layers */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-accent/40" aria-hidden="true" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/10 blur-xl" aria-hidden="true" />

              <img
                src="/produse/paine-la-tava-600g.jpg"
                alt="Interior brutărie tradițională"
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-[4/5] md:aspect-[4/3] ring-1 ring-black/5"
                loading="lazy"
              />

              {/* Overlay badge */}
              <div className="absolute -bottom-5 left-5 md:-left-6 bg-primary text-white px-5 py-3.5 rounded-xl shadow-xl shadow-primary/25 ring-4 ring-surface">
                <p className="font-serif text-base md:text-lg font-bold leading-tight">Tradiție</p>
                <p className="text-xs text-white/85 mt-0.5">din inima Bistriței-Năsăud</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
