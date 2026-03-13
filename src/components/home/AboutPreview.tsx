import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Povestea noastră
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Brutăria Lunca Ilvei s-a născut din dorința de a aduce comunității noastre
              produse de panificație de cea mai bună calitate, pregătite cu grijă și respect
              pentru tradițiile locului.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              În fiecare dimineață, brutarii noștri se trezesc cu noaptea în cap pentru ca
              tu să te bucuri de pâine proaspătă, cozonaci pufoși și produse de patiserie
              care îți amintesc de gustul de acasă.
            </p>
            <Link to="/despre-noi">
              <Button variant="outline" size="md">
                Află mai multe despre noi
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=700&h=500&fit=crop"
                alt="Interior brutărie tradițională"
                className="w-full rounded-xl shadow-lg object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-white px-5 py-3 rounded-lg shadow-md hidden md:block">
                <p className="font-serif text-lg font-bold">Tradiție</p>
                <p className="text-sm text-white/80">din inima Bistriței-Năsăud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
