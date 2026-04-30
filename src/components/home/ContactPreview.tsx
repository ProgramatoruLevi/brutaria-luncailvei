import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { MapEmbed } from '@/components/shared/MapEmbed'

export function ContactPreview() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <Reveal>
            <div className="mb-5">
              <SectionEyebrow align="left">Informații</SectionEyebrow>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 tracking-tight">
              Unde ne <span className="italic text-primary">găsești</span>
            </h2>

            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 group cursor-pointer p-3 -m-3 rounded-xl hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0 ring-1 ring-transparent group-hover:ring-accent/40 group-hover:scale-105 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Telefon</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 group cursor-pointer p-3 -m-3 rounded-xl hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0 ring-1 ring-transparent group-hover:ring-accent/40 group-hover:scale-105 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 -m-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Adresă</p>
                  <p className="font-medium text-foreground">{siteConfig.address.full}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 -m-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Program</p>
                  <div className="font-medium text-foreground space-y-0.5">
                    <p>{siteConfig.schedule.weekdays}</p>
                    <p>{siteConfig.schedule.saturday}</p>
                    <p>{siteConfig.schedule.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link to="/contact">
                <Button variant="primary" size="md" className="rounded-full shadow-md shadow-primary/20">
                  Pagina de contact
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-accent/30 h-[380px] lg:h-full min-h-[380px]">
              <div className="absolute inset-0 ring-[6px] ring-surface pointer-events-none rounded-2xl z-10" aria-hidden="true" />
              <MapEmbed />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
