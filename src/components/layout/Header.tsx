import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, MessageCircle, ArrowUpRight, Mail, Clock, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { mainNavigation } from '@/config/navigation'
import { cn } from '@/lib/utils'
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMobileMenuOpen(false)
      }
      window.addEventListener('keydown', handleEsc)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleEsc)
      }
    }
    document.body.style.overflow = ''
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-surface/85 backdrop-blur-xl shadow-[0_4px_24px_-8px_rgba(74,46,26,0.18)] border-b border-border/60'
            : 'bg-surface/70 backdrop-blur-md border-b border-transparent'
        )}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container-main">
          <nav className={cn('flex items-center justify-between transition-all duration-300', isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-24')}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 md:gap-3 shrink-0 group min-w-0">
              <img
                src={siteConfig.logoPath}
                alt={siteConfig.name}
                className={cn('w-auto transition-all duration-300 group-hover:scale-105 shrink-0', isScrolled ? 'h-11 md:h-14' : 'h-12 md:h-16')}
              />
              <div className="flex flex-col leading-tight min-w-0">
                <span className="font-serif text-[15px] md:text-lg font-bold text-secondary-dark tracking-tight">
                  Brutăria
                </span>
                <span className="font-serif text-[11px] md:text-sm italic text-primary -mt-0.5 whitespace-nowrap">
                  Lunca Ilvei
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 bg-background/60 rounded-full p-1 ring-1 ring-border/50 shadow-sm">
              {mainNavigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      'relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-300',
                      isActive
                        ? 'text-white bg-primary shadow-sm'
                        : 'text-foreground/75 hover:text-primary hover:bg-surface'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <a href={getPhoneUrl(siteConfig.phone)} className="inline-flex">
                <Button variant="ghost" size="sm" className="rounded-full hover:bg-accent/20 hover:text-accent-dark">
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">Sună</span>
                </Button>
              </a>
              <a href={getWhatsAppUrl(siteConfig.whatsapp, 'Bună ziua! Aș dori să comand produse de la brutărie.')} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm" className="rounded-full shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all">
                  <MessageCircle className="w-4 h-4" />
                  Comandă
                </Button>
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-muted/70 hover:bg-muted text-foreground transition-colors cursor-pointer ring-1 ring-border/60"
              aria-label="Deschide meniul"
            >
              <Menu className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[60]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 bottom-0 w-[88%] max-w-sm bg-surface shadow-2xl flex flex-col"
              style={{ height: '100dvh' }}
              role="dialog"
              aria-modal="true"
              aria-label="Meniu principal"
            >
              {/* Decorative gradient edge */}
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" aria-hidden="true" />

              {/* Top bar */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-background ring-1 ring-accent/40 p-1.5">
                    <img src={siteConfig.logoPath} alt="" className="h-full w-auto object-contain" />
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="font-serif text-base font-bold text-secondary-dark tracking-tight">
                      Brutăria
                    </span>
                    <span className="font-serif text-xs italic text-primary -mt-0.5">
                      Lunca Ilvei
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted/70 hover:bg-muted text-foreground transition-colors cursor-pointer"
                  aria-label="Închide meniul"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto px-5 py-6">
                {/* Nav tiles */}
                <nav className="flex flex-col gap-2">
                  {mainNavigation.map((item, i) => {
                    const isActive = location.pathname === item.href
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.3, ease: 'easeOut' }}
                      >
                        <Link
                          to={item.href}
                          className={cn(
                            'group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl transition-all duration-200',
                            isActive
                              ? 'bg-primary text-white shadow-lg shadow-primary/25'
                              : 'bg-muted/40 hover:bg-muted text-foreground'
                          )}
                        >
                          <span className="font-serif text-lg font-semibold">
                            {item.label}
                          </span>
                          <span
                            className={cn(
                              'inline-flex items-center justify-center w-8 h-8 rounded-full transition-transform group-hover:scale-110',
                              isActive ? 'bg-white/20' : 'bg-surface'
                            )}
                          >
                            <ArrowUpRight className={cn('w-4 h-4', isActive ? 'text-white' : 'text-primary')} />
                          </span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Ornament divider */}
                <div className="relative flex items-center justify-center my-7" aria-hidden="true">
                  <div className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                  <span className="relative inline-flex items-center justify-center w-7 h-7 rounded-full bg-surface ring-1 ring-accent/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-dark" />
                  </span>
                </div>

                {/* Contact block */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="bg-gradient-to-br from-muted/50 to-background rounded-2xl p-5 ring-1 ring-border/60"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary mb-4">
                    Contact direct
                  </p>
                  <ul className="space-y-3.5">
                    <li>
                      <a
                        href={getPhoneUrl(siteConfig.phone)}
                        className="flex items-center gap-3 group"
                      >
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary shrink-0">
                          <Phone className="w-4 h-4" />
                        </span>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {siteConfig.phone}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="flex items-center gap-3 group"
                      >
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary shrink-0">
                          <Mail className="w-4 h-4" />
                        </span>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                          {siteConfig.email}
                        </span>
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary shrink-0">
                        <MapPin className="w-4 h-4" />
                      </span>
                      <span className="text-sm text-muted-foreground leading-snug">
                        {siteConfig.address.full}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Clock className="w-4 h-4" />
                      </span>
                      <div className="text-sm text-muted-foreground space-y-0.5">
                        <p>{siteConfig.schedule.weekdays}</p>
                        <p>{siteConfig.schedule.saturday}</p>
                        <p>{siteConfig.schedule.sunday}</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Sticky bottom CTAs */}
              <div
                className="border-t border-border/60 bg-surface/95 backdrop-blur-md px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex flex-col gap-2.5"
              >
                <a href={getPhoneUrl(siteConfig.phone)}>
                  <Button variant="outline" size="md" className="w-full rounded-full">
                    <Phone className="w-4 h-4" />
                    Sună acum
                  </Button>
                </a>
                <a
                  href={getWhatsAppUrl(siteConfig.whatsapp, 'Bună ziua! Aș dori să comand produse de la brutărie.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="md"
                    className="w-full rounded-full bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/25"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Comandă pe WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
