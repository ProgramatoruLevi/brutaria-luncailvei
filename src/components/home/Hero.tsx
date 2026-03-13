import { Link } from 'react-router-dom'
import { ArrowRight, Wheat, Clock, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const trustItems = [
  { icon: Wheat, text: 'Ingrediente naturale' },
  { icon: Clock, text: 'Proaspăt zilnic' },
  { icon: Phone, text: 'Comenzi telefonice' },
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&h=1080&fit=crop&q=80"
          alt="Produse de brutărie proaspete"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      <div className="container-main relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Pâine proaspătă și produse de patiserie făcute cu grijă
          </h1>
          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-xl">
            Descoperă gustul autentic al produselor pregătite zilnic, din ingrediente
            atent alese, pentru tine și familia ta.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="/produse">
              <Button variant="primary" size="lg">
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

          {/* Trust row */}
          <div className="flex flex-wrap gap-6">
            {trustItems.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/75">
                <Icon className="w-4 h-4 text-accent-light" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
