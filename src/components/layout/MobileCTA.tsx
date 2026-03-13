import { Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/utils'

export function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <div className="flex items-stretch">
        <a
          href={getPhoneUrl(siteConfig.phone)}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-foreground hover:bg-muted transition-colors duration-200 cursor-pointer"
        >
          <Phone className="w-4 h-4" />
          Sună acum
        </a>
        <div className="w-px bg-border" />
        <a
          href={getWhatsAppUrl(siteConfig.whatsapp, 'Bună ziua! Aș dori să comand produse de la brutărie.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
