import { Wheat, Timer, Sparkles } from 'lucide-react'

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
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            De ce ne aleg clienții
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Calitatea nu este doar un cuvânt pentru noi — este modul în care lucrăm în fiecare zi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="text-center bg-surface rounded-xl p-8 shadow-sm"
            >
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
  )
}
