import { SEOHead } from '@/components/shared/SEOHead'
import { siteConfig } from '@/config/site'

export function PoliticaConfidentialitate() {
  return (
    <>
      <SEOHead title="Politica de confidențialitate" path="/politica-confidentialitate" />

      <div className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-main max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Politica de confidențialitate
          </h1>

          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p>
              <strong className="text-foreground">{siteConfig.company.name}</strong> respectă
              confidențialitatea datelor tale personale. Această politică descrie modul
              în care colectăm, utilizăm și protejăm informațiile tale.
            </p>

            <h2 className="font-serif text-xl font-bold text-foreground mt-8">
              1. Ce date colectăm
            </h2>
            <p>
              Colectăm doar datele pe care ni le furnizezi voluntar prin formularul
              de contact: numele, numărul de telefon, adresa de email și mesajul transmis.
            </p>

            <h2 className="font-serif text-xl font-bold text-foreground mt-8">
              2. Cum folosim datele
            </h2>
            <p>
              Datele colectate sunt utilizate exclusiv pentru a răspunde solicitărilor
              tale și pentru a-ți oferi informații despre produsele și serviciile noastre.
            </p>

            <h2 className="font-serif text-xl font-bold text-foreground mt-8">
              3. Protecția datelor
            </h2>
            <p>
              Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja
              datele tale personale împotriva accesului neautorizat, pierderii sau distrugerii.
            </p>

            <h2 className="font-serif text-xl font-bold text-foreground mt-8">
              4. Drepturile tale
            </h2>
            <p>
              Ai dreptul de a solicita accesul la datele tale personale, rectificarea
              sau ștergerea acestora. Pentru orice solicitare, contactează-ne la{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                {siteConfig.email}
              </a>.
            </p>

            <h2 className="font-serif text-xl font-bold text-foreground mt-8">
              5. Contact
            </h2>
            <p>
              {siteConfig.company.name}<br />
              {siteConfig.address.full}<br />
              Email: {siteConfig.email}<br />
              Telefon: {siteConfig.phone}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
