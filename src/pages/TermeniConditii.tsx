import { SEOHead } from '@/components/shared/SEOHead'
import { siteConfig } from '@/config/site'

const c = siteConfig.company
const a = siteConfig.address

export function TermeniConditii() {
  return (
    <>
      <SEOHead title="Termeni și condiții" path="/termeni-conditii" noIndex />

      <article className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-main max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Termeni și condiții
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            <strong>Ultima actualizare:</strong> 30 aprilie 2026
          </p>

          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground space-y-5 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
            <h2>1. Informații generale</h2>
            <p>
              Site-ul <strong>{siteConfig.url}</strong> este operat de{' '}
              <strong>{c.name}</strong>, cu sediul în {a.full}, înregistrată la
              Registrul Comerțului sub nr. {c.regCom}, CUI {c.cui}, EUID{' '}
              {c.euid}, înființată la data de {c.foundedDate}.
            </p>
            <p>
              Telefon: {siteConfig.phone} | Email: {siteConfig.email}
            </p>

            <h2>2. Definiții</h2>
            <ul>
              <li><strong>Site</strong> — platforma web disponibilă la {siteConfig.url}</li>
              <li><strong>Utilizator</strong> — orice persoană care accesează site-ul</li>
              <li>
                <strong>Vânzător / Prestator</strong> — {c.name}, operatorul site-ului
              </li>
              <li>
                <strong>Produse</strong> — pâinea, patiseria, cozonacii și celelalte produse de
                brutărie comercializate de Vânzător
              </li>
            </ul>

            <h2>3. Produse și prețuri</h2>
            <p>
              Imaginile și descrierile produselor sunt prezentate cu titlu informativ.
              Prețurile afișate pe site sau comunicate la cerere sunt exprimate în RON, cu
              TVA inclus, dacă nu este specificat altfel. Vânzătorul își rezervă dreptul de a
              modifica prețurile fără notificare prealabilă, fără ca aceasta să afecteze
              comenzile deja confirmate.
            </p>
            <p>
              Disponibilitatea produselor poate varia în funcție de sezon și de stocul
              zilnic al brutăriei.
            </p>

            <h2>4. Solicitarea și plasarea comenzilor</h2>
            <p>
              Comenzile se pot efectua telefonic, prin WhatsApp sau prin formularul de
              contact. Comanda transmisă prin formular nu reprezintă o comandă fermă, ci o
              solicitare de informații. Contractul de vânzare se încheie la momentul
              confirmării scrise sau telefonice de către Vânzător.
            </p>

            <h2>5. Garanție și returnare</h2>
            <p>
              Produsele de panificație și patiserie sunt proaspete, perisabile și se
              comercializează în condițiile prevăzute de legislația în vigoare:{' '}
              OG 21/1992 privind protecția consumatorilor și Legea 449/2003 privind vânzarea
              produselor și garanțiile asociate. Reclamațiile privind calitatea produselor se
              transmit în maxim 24 de ore de la achiziție, însoțite de bonul fiscal.
            </p>

            <h2>6. Proprietate intelectuală</h2>
            <p>
              Întregul conținut al site-ului (texte, imagini, logo, grafică, structură) este
              proprietatea {c.name} sau a partenerilor săi și este protejat prin legislația
              română și internațională privind dreptul de autor. Reproducerea, distribuirea
              sau utilizarea conținutului fără acord scris este interzisă.
            </p>

            <h2>7. Limitarea răspunderii</h2>
            <p>
              Vânzătorul nu poate fi tras la răspundere pentru:
            </p>
            <ul>
              <li>Erori de scriere sau de afișare apărute pe site</li>
              <li>Întreruperi temporare ale disponibilității site-ului</li>
              <li>Conținutul linkurilor externe către alte site-uri</li>
              <li>Daune indirecte rezultate din utilizarea site-ului</li>
            </ul>

            <h2>8. Soluționarea litigiilor</h2>
            <p>
              Eventualele neînțelegeri se vor rezolva pe cale amiabilă. În cazul în care
              soluționarea amiabilă nu este posibilă, consumatorii pot apela la:
            </p>
            <ul>
              <li>
                <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noreferrer">
                  ANPC — Soluționarea Alternativă a Litigiilor (SAL)
                </a>
              </li>
              <li>
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">
                  Platforma ODR (Soluționarea Online a Litigiilor) — Comisia Europeană
                </a>
              </li>
              <li>Instanțele competente din România</li>
            </ul>

            <h2>9. Modificarea termenilor</h2>
            <p>
              Vânzătorul își rezervă dreptul de a modifica acești termeni și condiții
              oricând, fără notificare prealabilă. Versiunea actualizată va fi disponibilă
              pe această pagină. Continuarea utilizării site-ului după publicarea
              modificărilor constituie acceptul tacit al noilor termeni.
            </p>

            <h2>10. Contact</h2>
            <p>
              Pentru orice întrebări legate de acești termeni:
              <br />
              <strong>{c.name}</strong>
              <br />
              {a.full}
              <br />
              Telefon: {siteConfig.phone}
              <br />
              Email: {siteConfig.email}
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
