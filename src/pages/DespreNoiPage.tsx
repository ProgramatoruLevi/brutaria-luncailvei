import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Leaf, Award } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SEOHead } from '@/components/shared/SEOHead'

const processSteps = [
  {
    title: 'Selectarea ingredientelor',
    description: 'Fiecare ingredient este ales cu grijă de la furnizori locali de încredere. Folosim făină de calitate superioară, drojdie naturală și materii prime proaspete.',
    image: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&h=400&fit=crop',
    alt: 'Ingrediente proaspete pentru brutărie',
  },
  {
    title: 'Frământare și preparare',
    description: 'Aluatul este frământat cu răbdare și lăsat să crească natural, fără grabă și fără aditivi. Acest proces lent este secretul gustului autentic.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=400&fit=crop',
    alt: 'Brutar frământând aluatul',
  },
  {
    title: 'Coacere și produse proaspete',
    description: 'Fiecare produs este copt la temperatura perfectă, în cuptoare tradiționale. Rezultatul: o crustă aurie, un miez pufos și un gust care te duce cu gândul la copilărie.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
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
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-muted/30">
        <div className="container-main text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Despre noi
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Suntem o brutărie tradițională din Lunca Ilvei, dedicată preparării
            produselor de panificație de cea mai bună calitate.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=700&h=500&fit=crop"
                alt="Brutăria Lunca Ilvei"
                className="w-full rounded-xl shadow-lg object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Povestea noastră
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
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
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Procesul nostru
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              De la selecția ingredientelor până la produsul final — fiecare etapă
              este realizată cu grijă și atenție la detalii.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="w-full rounded-xl shadow-md object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                      {index + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Valorile noastre
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center bg-surface rounded-xl p-8 shadow-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-main text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Descoperă produsele noastre
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            De la pâine tradițională la specialități de sezon — avem ceva pentru fiecare gust.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/produse">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Vezi produsele
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 hover:text-white"
              >
                Contactează-ne
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
