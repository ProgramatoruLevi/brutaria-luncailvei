import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/utils'

export function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md shadow-[0_-8px_24px_-12px_rgba(74,46,26,0.25)]"
    >
      {/* Gold top gradient border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden="true" />

      <div className="flex items-stretch">
        <a
          href={getPhoneUrl(siteConfig.phone)}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-foreground hover:bg-muted/60 transition-colors duration-200 cursor-pointer"
        >
          <Phone className="w-4 h-4 text-primary" />
          Sună acum
        </a>
        <div className="w-px bg-border/80" />
        <a
          href={getWhatsAppUrl(siteConfig.whatsapp, 'Bună ziua! Aș dori să comand produse de la brutărie.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 cursor-pointer relative overflow-hidden"
        >
          <span className="relative flex items-center justify-center">
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full bg-white/25 -m-1"
              aria-hidden="true"
            />
            <MessageCircle className="w-4 h-4 relative" />
          </span>
          WhatsApp
        </a>
      </div>

      <div className="pb-[env(safe-area-inset-bottom)]" />
    </motion.div>
  )
}
