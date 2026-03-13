import { Phone, MessageCircle, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'

export function ContactCTA() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container-main text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Pentru comenzi și detalii, contactează-ne direct
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Suntem mereu la dispoziția ta. Alege modalitatea preferată de a ne contacta.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href={getPhoneUrl(siteConfig.phone)}>
            <Button
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Phone className="w-5 h-5" />
              Sună acum
            </Button>
          </a>
          <a
            href={getWhatsAppUrl(siteConfig.whatsapp, 'Bună ziua! Aș dori informații despre produsele dumneavoastră.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </a>
          <Link to="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Mail className="w-5 h-5" />
              Trimite mesaj
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
