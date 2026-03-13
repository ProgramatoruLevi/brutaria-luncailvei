import { SEOHead } from '@/components/shared/SEOHead'
import { siteConfig } from '@/config/site'

export function PoliticaCookies() {
  return (
    <>
      <SEOHead title="Politica de cookies" path="/politica-cookies" />

      <div className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-main max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Politica de cookies
          </h1>

          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p>
              Acest site web utilizează cookie-uri pentru a îmbunătăți experiența de
              navigare. Prin continuarea utilizării site-ului, ești de acord cu utilizarea
              cookie-urilor conform acestei politici.
            </p>

            <h2 className="font-serif text-xl font-bold text-foreground mt-8">
              1. Ce sunt cookie-urile?
            </h2>
            <p>
              Cookie-urile sunt fișiere text mici stocate pe dispozitivul tău atunci
              când vizitezi un site web. Acestea ajută site-ul să funcționeze corect
              și să ofere o experiență mai bună.
            </p>

            <h2 className="font-serif text-xl font-bold text-foreground mt-8">
              2. Ce cookie-uri folosim
            </h2>
            <p>
              <strong className="text-foreground">Cookie-uri esențiale:</strong> Necesare
              pentru funcționarea de bază a site-ului.
            </p>
            <p>
              <strong className="text-foreground">Cookie-uri analitice:</strong> Ne ajută
              să înțelegem cum este utilizat site-ul pentru a-l îmbunătăți.
            </p>

            <h2 className="font-serif text-xl font-bold text-foreground mt-8">
              3. Gestionarea cookie-urilor
            </h2>
            <p>
              Poți gestiona sau dezactiva cookie-urile din setările browserului tău.
              Dezactivarea cookie-urilor poate afecta funcționalitatea site-ului.
            </p>

            <h2 className="font-serif text-xl font-bold text-foreground mt-8">
              4. Contact
            </h2>
            <p>
              Pentru întrebări despre cookie-uri, contactează-ne la{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                {siteConfig.email}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
