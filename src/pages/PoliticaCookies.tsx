import { Link } from 'react-router-dom'
import { SEOHead } from '@/components/shared/SEOHead'
import { siteConfig } from '@/config/site'

export function PoliticaCookies() {
  return (
    <>
      <SEOHead title="Politica de cookies" path="/politica-cookies" noIndex />

      <article className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-main max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Politica de cookies
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            <strong>Ultima actualizare:</strong> 30 aprilie 2026
          </p>

          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground space-y-5 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-foreground [&_code]:text-[0.85em]">
            <h2>1. Ce sunt cookie-urile?</h2>
            <p>
              Cookie-urile sunt fișiere text mici stocate pe dispozitivul tău atunci când
              vizitezi un site web. Ele permit site-ului să-ți recunoască preferințele și
              să ofere o experiență consistentă. Pe acest site, cookie-urile non-esențiale
              se activează <strong>doar</strong> după ce îți exprimi acordul prin banner-ul
              de consimțământ.
            </p>

            <h2>2. Tipuri de cookie-uri utilizate</h2>

            <h3>2.1. Cookie-uri strict necesare</h3>
            <p>Sunt esențiale pentru funcționarea site-ului. Nu pot fi dezactivate.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left px-3 py-2 font-semibold text-foreground border-b border-border">Denumire</th>
                    <th className="text-left px-3 py-2 font-semibold text-foreground border-b border-border">Scop</th>
                    <th className="text-left px-3 py-2 font-semibold text-foreground border-b border-border">Durată</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 border-b border-border align-top"><code>brutaria_luncailvei_cookie_prefs</code></td>
                    <td className="px-3 py-2 border-b border-border align-top">Stochează preferințele tale de cookie (localStorage).</td>
                    <td className="px-3 py-2 border-b border-border align-top">Nelimitată / până la ștergere</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>2.2. Cookie-uri analitice (doar cu consimțământ)</h3>
            <p>
              Ne ajută să înțelegem cum este utilizat site-ul, în mod agregat și anonimizat.
              Se activează <strong>numai</strong> după ce ai apăsat "Acceptă toate cookie-urile" sau ai
              activat manual din pagina Setări cookie.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left px-3 py-2 font-semibold text-foreground border-b border-border">Denumire</th>
                    <th className="text-left px-3 py-2 font-semibold text-foreground border-b border-border">Scop</th>
                    <th className="text-left px-3 py-2 font-semibold text-foreground border-b border-border">Durată</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 border-b border-border align-top"><code>_ga</code></td>
                    <td className="px-3 py-2 border-b border-border align-top">Identifică utilizatorul anonim (Google Analytics).</td>
                    <td className="px-3 py-2 border-b border-border align-top">2 ani</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-b border-border align-top"><code>_gid</code></td>
                    <td className="px-3 py-2 border-b border-border align-top">Identifică sesiunea de navigare.</td>
                    <td className="px-3 py-2 border-b border-border align-top">24 ore</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-b border-border align-top"><code>_ga_*</code></td>
                    <td className="px-3 py-2 border-b border-border align-top">Stare sesiune Google Analytics 4.</td>
                    <td className="px-3 py-2 border-b border-border align-top">2 ani</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>2.3. Cookie-uri de marketing (doar cu consimțământ)</h3>
            <p>
              Folosite pentru a măsura eficiența campaniilor publicitare și pentru
              remarketing. Se activează <strong>numai</strong> după consimțământul tău
              explicit.
            </p>
            <ul>
              <li>
                <strong>Google Ads</strong> — conversii și remarketing
              </li>
            </ul>

            <h2>3. Cum controlezi cookie-urile</h2>
            <ul>
              <li>
                Prin <strong>banner-ul de consimțământ</strong> afișat la prima vizită
              </li>
              <li>
                Prin pagina{' '}
                <Link to="/setari-cookie" className="text-primary underline">
                  Setări cookie
                </Link>
                , unde poți modifica oricând preferințele
              </li>
              <li>Prin setările browserului tău (poți bloca sau șterge cookie-urile manual)</li>
            </ul>
            <p>
              Dacă alegi <strong>"Doar necesare"</strong>, niciun script de tracking nu se
              va încărca pe site.
            </p>

            <h2>4. Google Maps</h2>
            <p>
              Pagina de contact afișează o hartă interactivă furnizată de Google Maps. Aceasta
              se încarcă <strong>doar la cererea ta</strong>, după ce apeși butonul "Afișează harta".
              La activare, Google poate plasa cookie-uri și primește adresa IP a vizitatorului.
              Detalii: <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Politica de confidențialitate Google</a>.
            </p>

            <h2>5. Modificări și contact</h2>
            <p>
              Această politică poate fi actualizată periodic. Versiunea curentă va fi
              disponibilă pe această pagină. Pentru întrebări, contactează-ne la{' '}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
