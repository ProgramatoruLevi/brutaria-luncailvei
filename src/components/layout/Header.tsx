import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
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
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-surface border-b border-border',
        isScrolled && 'shadow-sm'
      )}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={siteConfig.logoPath}
              alt={siteConfig.name}
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 hover:text-primary',
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-foreground/80'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={getPhoneUrl(siteConfig.phone)} className="inline-flex">
              <Button variant="ghost" size="sm">
                <Phone className="w-4 h-4" />
                <span className="sr-only md:not-sr-only">Sună acum</span>
              </Button>
            </a>
            <a href={getWhatsAppUrl(siteConfig.whatsapp, 'Bună ziua! Aș dori să comand produse de la brutărie.')} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm">
                <MessageCircle className="w-4 h-4" />
                Comandă
              </Button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 cursor-pointer text-foreground"
            aria-label={isMobileMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-surface z-40">
          <div className="container-main py-8 flex flex-col gap-6">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-lg font-medium py-2 border-b border-border transition-colors duration-200',
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a href={getPhoneUrl(siteConfig.phone)}>
                <Button variant="outline" size="lg" className="w-full">
                  <Phone className="w-5 h-5" />
                  Sună acum
                </Button>
              </a>
              <a href={getWhatsAppUrl(siteConfig.whatsapp, 'Bună ziua! Aș dori să comand produse de la brutărie.')} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="w-full">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
