import { Link } from 'react-router-dom'
import { SEOHead } from '@/components/shared/SEOHead'
import { siteConfig } from '@/config/site'

const c = siteConfig.company
const a = siteConfig.address

export function PoliticaConfidentialitate() {
  return (
    <>
      <SEOHead title="Politica de confidențialitate | GDPR" path="/politica-confidentialitate" noIndex />

      <article className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-main max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Politica de confidențialitate
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            <strong>Ultima actualizare:</strong> 30 aprilie 2026
          </p>

          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground space-y-5 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-foreground [&_code]:text-[0.85em]">
            <h2>1. Operatorul de date</h2>
            <p>
              <strong>{c.name}</strong>, cu sediul în {a.full}, înregistrată la
              Registrul Comerțului sub nr. {c.regCom}, CUI {c.cui}, EUID {c.euid}.
            </p>
            <p>
              Telefon: {siteConfig.phone} | Email: {siteConfig.email}
            </p>

            <h2>2. Datele personale colectate</h2>
            <p>Colectăm următoarele categorii de date:</p>
            <ul>
              <li>
                <strong>Date din formularul de contact:</strong> nume, telefon,
                email, subiect, mesaj
              </li>
              <li>
                <strong>Date tehnice de navigare:</strong> adresa IP, tipul
                browserului, paginile vizitate (doar dacă ai acceptat
                cookie-urile analitice)
              </li>
              <li>
                <strong>Date de atribuire marketing:</strong> parametri UTM,
                gclid, fbclid (stocate local în browser, doar pentru a corela
                solicitările cu campaniile publicitare)
              </li>
            </ul>

            <h2>3. Scopul prelucrării datelor</h2>
            <ul>
              <li>Răspunsul la solicitări și oferirea de informații despre produsele noastre</li>
              <li>Procesarea comenzilor și a întrebărilor</li>
              <li>Îmbunătățirea serviciilor și a experienței pe site (statistici agregate, anonimizate)</li>
              <li>Îndeplinirea obligațiilor legale și contractuale</li>
            </ul>

            <h2>4. Temeiul legal al prelucrării</h2>
            <p>Prelucrăm datele tale în baza:</p>
            <ul>
              <li>
                <strong>Consimțământul</strong> (GDPR Art. 6 alin. 1 lit. a) — pentru cookie-uri
                analitice și de marketing
              </li>
              <li>
                <strong>Executarea unui contract sau a unor măsuri precontractuale</strong>{' '}
                (Art. 6 alin. 1 lit. b) — pentru procesarea solicitărilor
              </li>
              <li>
                <strong>Interesul legitim</strong> (Art. 6 alin. 1 lit. f) — pentru securitatea
                site-ului și prevenirea fraudelor
              </li>
              <li>
                <strong>Obligații legale</strong> (Art. 6 alin. 1 lit. c) — pentru păstrarea
                documentelor fiscale și contabile
              </li>
            </ul>

            <h2 id="cookies">5. Cookie-uri utilizate</h2>
            <h3>Cookie-uri necesare (funcționare)</h3>
            <p>
              <code>brutaria_luncailvei_cookie_prefs</code> — stochează preferințele tale de cookie
              (localStorage). Durată: nelimitată / până la ștergere manuală.
            </p>

            <h3>Cookie-uri analitice (doar cu consimțământ)</h3>
            <ul>
              <li>
                <code>_ga</code> — Google Analytics, identificare utilizator anonim, durată: 2 ani
              </li>
              <li>
                <code>_gid</code> — Google Analytics, identificare sesiune, durată: 24 ore
              </li>
              <li>
                <code>_ga_*</code> — Google Analytics 4, stare sesiune, durată: 2 ani
              </li>
            </ul>
            <p>
              Aceste cookie-uri se încarcă <strong>exclusiv</strong> după ce ai acceptat
              cookie-urile analitice prin banner-ul de consimțământ.
            </p>

            <h3>Cookie-uri de marketing (doar cu consimțământ)</h3>
            <p>
              Google Ads — conversii și remarketing. Se încarcă doar cu consimțământ
              explicit.
            </p>

            <p>
              Poți modifica preferințele oricând din pagina{' '}
              <Link to="/setari-cookie" className="text-primary underline">
                Setări cookie
              </Link>
              .
            </p>

            <h2>6. Durata stocării datelor</h2>
            <ul>
              <li>
                <strong>Date din formulare:</strong> 3 ani de la ultima
                interacțiune sau conform obligațiilor legale
              </li>
              <li>
                <strong>Documente fiscale și contabile:</strong> 10 ani (conform
                legislației fiscale din România)
              </li>
              <li>
                <strong>Date analitice (cookie-uri):</strong> maxim 26 luni
                (configurare Google Analytics)
              </li>
            </ul>

            <h2>7. Drepturile tale</h2>
            <p>Conform GDPR, ai următoarele drepturi:</p>
            <ul>
              <li><strong>Dreptul de acces</strong> — poți solicita o copie a datelor tale</li>
              <li><strong>Dreptul la rectificare</strong> — poți cere corectarea datelor incorecte</li>
              <li><strong>Dreptul la ștergere</strong> ("dreptul de a fi uitat")</li>
              <li><strong>Dreptul la restricționarea prelucrării</strong></li>
              <li><strong>Dreptul la portabilitatea datelor</strong></li>
              <li><strong>Dreptul la opoziție</strong></li>
              <li>
                <strong>Dreptul de a depune o plângere</strong> la Autoritatea Națională de
                Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), B-dul G-ral
                Gheorghe Magheru nr. 28-30, sector 1, București,{' '}
                <a href="https://www.dataprotection.ro" target="_blank" rel="noreferrer">
                  www.dataprotection.ro
                </a>
              </li>
            </ul>
            <p>
              Pentru exercitarea drepturilor, contactează-ne la{' '}
              <strong>{siteConfig.email}</strong> sau <strong>{siteConfig.phone}</strong>.
            </p>

            <h2>8. Transferul datelor către terți</h2>
            <p>Datele tale pot fi procesate de următorii terți:</p>
            <ul>
              <li>
                <strong>Google LLC</strong> (Google Analytics, Google Ads) — în baza
                consimțământului tău, conform standardelor contractuale UE-SUA (EU-US Data
                Privacy Framework)
              </li>
            </ul>
            <p>
              Nu vindem, nu închiriem și nu transmitem datele tale personale unor terți în
              scopuri de marketing propriu.
            </p>

            <h2>9. Google Maps</h2>
            <p>
              Pagina de contact poate afișa o hartă interactivă furnizată de Google Maps.
              Iframe-ul Google Maps se încarcă doar cu consimțământ explicit, la click pe
              butonul "Afișează harta". La încărcare, Google primește adresa IP a vizitatorului.
              Detalii:{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                Politica de confidențialitate Google
              </a>
              .
            </p>

            <h2>10. Securitatea datelor</h2>
            <p>
              Implementăm măsuri tehnice și organizatorice adecvate: comunicare criptată
              (HTTPS/TLS), validare și sanitizare a datelor din formulare, acces restricționat
              la date.
            </p>

            <h2>11. Contact</h2>
            <p>
              Pentru orice întrebări legate de prelucrarea datelor personale:
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
