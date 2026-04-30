import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { footerNavigation } from '@/config/navigation'
import anpcSal from '@/assets/anpc-sal.svg'
import anpcSol from '@/assets/anpc-sol.svg'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white/90">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background shadow-lg ring-2 ring-accent/40 p-1.5 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={siteConfig.logoPath}
                  alt={siteConfig.name}
                  className="h-full w-auto object-contain"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-bold text-white tracking-tight">
                  Brutăria
                </span>
                <span className="font-serif text-sm italic text-accent -mt-0.5">
                  Lunca Ilvei
                </span>
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Pâine proaspătă și produse de patiserie făcute cu grijă, din ingrediente atent alese, pentru tine și familia ta.
            </p>

            {/* ANPC badges */}
            <div className="flex items-center gap-3">
              <a
                href="https://anpc.ro/ce-este-sal/"
                target="_blank"
                rel="noreferrer"
                aria-label="ANPC - Soluționarea Alternativă a Litigiilor"
                className="inline-flex items-center justify-center bg-white rounded-md p-1.5 ring-1 ring-white/20 hover:ring-accent transition"
              >
                <img src={anpcSal} alt="ANPC SAL" className="h-9 w-auto" />
              </a>
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noreferrer"
                aria-label="ANPC - Soluționarea Online a Litigiilor"
                className="inline-flex items-center justify-center bg-white rounded-md p-1.5 ring-1 ring-white/20 hover:ring-accent transition"
              >
                <img src={anpcSol} alt="ANPC SOL" className="h-9 w-auto" />
              </a>
            </div>
          </div>

          {/* Column 2 - Navigare */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">
              Navigare rapidă
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.navigare.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-serif text-lg font-semibold mt-7 mb-4 text-white">
              Linkuri utile
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://anpc.ro/ce-este-sal/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/70 hover:text-accent transition-colors duration-200"
                >
                  ANPC — Soluționarea Alternativă a Litigiilor
                </a>
              </li>
              <li>
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/70 hover:text-accent transition-colors duration-200"
                >
                  ANPC — Soluționarea Online a Litigiilor
                </a>
              </li>
              <li>
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/70 hover:text-accent transition-colors duration-200"
                >
                  Platforma ODR — Uniunea Europeană
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-2.5 text-sm text-white/70 hover:text-accent transition-colors duration-200 cursor-pointer"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 text-sm text-white/70 hover:text-accent transition-colors duration-200 cursor-pointer"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <p>{siteConfig.schedule.weekdays}</p>
                  <p>{siteConfig.schedule.saturday}</p>
                  <p>{siteConfig.schedule.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10 space-y-1">
              <p className="text-xs text-white/50">{siteConfig.company.name}</p>
              <p className="text-xs text-white/50">CUI: {siteConfig.company.cui}</p>
              <p className="text-xs text-white/50">Reg. Com.: {siteConfig.company.regCom}</p>
              <p className="text-xs text-white/50">EUID: {siteConfig.company.euid}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            &copy; {currentYear} {siteConfig.name}. Toate drepturile rezervate.
          </p>
          {(siteConfig.social.facebook || siteConfig.social.instagram) && (
            <div className="flex items-center gap-4">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-accent transition-colors duration-200 cursor-pointer"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-accent transition-colors duration-200 cursor-pointer"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
