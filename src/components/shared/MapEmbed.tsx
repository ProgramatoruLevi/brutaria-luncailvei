import { useState } from 'react'
import { MapPin, ExternalLink } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function MapEmbed() {
  const [showMap, setShowMap] = useState(false)

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-accent/30 h-full min-h-[380px] bg-muted/40">
      {showMap ? (
        <iframe
          src={siteConfig.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Locația ${siteConfig.name} pe hartă`}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="max-w-md text-center">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
              <MapPin className="w-7 h-7" />
            </span>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Harta Google Maps
            </h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Pentru a afișa harta interactivă, este necesară încărcarea unui conținut
              furnizat de Google. La activare, Google primește adresa ta IP și poate
              plasa cookie-uri pe dispozitiv.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setShowMap(true)}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary-dark cursor-pointer"
              >
                Afișează harta
              </button>
              <a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted cursor-pointer"
              >
                Deschide în Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
