import { Phone, MessageCircle, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { Link } from 'react-router-dom'

const microStats = [
  'Răspundem rapid',
  'Comenzi telefonice',
  'Disponibili zilnic',
]

export function ContactCTA() {
  return (
    <section className="relative py-20 md:py-24 bg-primary overflow-hidden">
      {/* Gradient / glow accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/40 via-primary to-primary-dark/80" aria-hidden="true" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-accent-light/15 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-main relative text-center">
        <Reveal>
          <div className="mb-5">
            <SectionEyebrow variant="dark">Comandă acum</SectionEyebrow>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight max-w-2xl mx-auto leading-tight">
            Pentru comenzi și detalii, <span className="italic text-accent-light">contactează-ne</span>
          </h2>
          <p className="text-white/85 mb-10 max-w-xl mx-auto text-base md:text-lg">
            Suntem mereu la dispoziția ta. Alege modalitatea preferată de a ne contacta.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <a href={getPhoneUrl(siteConfig.phone)}>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/50 text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/5"
              >
                <Phone className="w-5 h-5" />
                Sună acum
              </Button>
            </a>
            <a
              href={getWhatsAppUrl(siteConfig.whatsapp, 'Bună ziua! Aș dori informații despre produsele dumneavoastră.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="rounded-full bg-green-600 text-white hover:bg-green-700 shadow-xl shadow-green-900/25 hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </a>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/50 text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/5"
              >
                <Mail className="w-5 h-5" />
                Trimite mesaj
              </Button>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-white/70 text-sm font-medium">
            {microStats.map((stat, i) => (
              <li key={stat} className="flex items-center gap-5">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-light" aria-hidden="true" />
                  {stat}
                </span>
                {i < microStats.length - 1 && (
                  <span className="hidden sm:inline-block w-px h-4 bg-white/20" aria-hidden="true" />
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
