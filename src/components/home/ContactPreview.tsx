import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/Button'

export function ContactPreview() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Info */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              Unde ne găsești
            </h2>

            <div className="space-y-5">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adresă</p>
                  <p className="font-medium text-foreground">{siteConfig.address.full}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Program</p>
                  <div className="font-medium text-foreground space-y-0.5">
                    <p>{siteConfig.schedule.weekdays}</p>
                    <p>{siteConfig.schedule.saturday}</p>
                    <p>{siteConfig.schedule.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/contact">
                <Button variant="outline" size="md">
                  Pagina de contact
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-border h-[300px] lg:h-auto">
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Brutăria Lunca Ilvei pe hartă"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
