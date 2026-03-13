import { SEOHead } from '@/components/shared/SEOHead'
import { siteConfig } from '@/config/site'

export function TermeniConditii() {
  return (
    <>
      <SEOHead title="Termeni și condiții" path="/termeni-conditii" />

      <div className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-main max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Termeni și condiții
          </h1>

          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p>
              Prin utilizarea site-ului <strong className="text-foreground">{siteConfig.url}</strong>,
              acceptați termenii și condițiile descrise mai jos.
            </p>

            <h2 className="font-serif text-xl font-bold text-foreground mt-8">
              1. Informații generale
            </h2>
            <p>
              Site-ul este operat de {siteConfig.company.name}, cu sediul în {siteConfig.address.full},
              înregistrată la Registrul Comerțului sub nr. {siteConfig.company.regCom},
              CUI {siteConfig.company.cui}.
            </p>

            <h2 className="font-serif text-xl font-bold text-foreground mt-8">
              2. Utilizarea site-ului
            </h2>
            <p>
              Conținutul acestui site este destinat exclusiv informării. Imaginile
              produselor sunt orientative și pot diferi ușor de produsele reale.
            </p>

            <h2 className="font-serif text-xl font-bold text-foreground mt-8">
              3. Comenzi
            </h2>
            <p>
              Comenzile se pot efectua telefonic sau prin WhatsApp. Disponibilitatea
              produselor poate varia în funcție de sezon și de stocul zilnic.
            </p>

            <h2 className="font-serif text-xl font-bold text-foreground mt-8">
              4. Limitarea răspunderii
            </h2>
            <p>
              Ne rezervăm dreptul de a modifica prețurile, disponibilitatea produselor
              și conținutul site-ului fără notificare prealabilă.
            </p>

            <h2 className="font-serif text-xl font-bold text-foreground mt-8">
              5. Contact
            </h2>
            <p>
              Pentru orice întrebare legată de acești termeni, ne poți contacta la{' '}
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
