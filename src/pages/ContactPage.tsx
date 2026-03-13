import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { SEOHead } from '@/components/shared/SEOHead'

interface FormData {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

const initialFormData: FormData = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
}

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData(initialFormData)
    }, 1000)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const inputStyles = 'w-full px-4 py-3 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors duration-200'
  const labelStyles = 'block text-sm font-medium text-foreground mb-1.5'

  return (
    <>
      <SEOHead
        title="Contact"
        description="Contactează Brutăria Lunca Ilvei. Suntem aici pentru comenzi, întrebări și sugestii."
        path="/contact"
      />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-muted/30">
        <div className="container-main text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contactează-ne
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Suntem bucuroși să te ajutăm cu orice întrebare sau comandă. Alege modalitatea care ți se potrivește cel mai bine.
          </p>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="container-main flex flex-wrap justify-center gap-4">
          <a href={getPhoneUrl(siteConfig.phone)}>
            <Button variant="primary" size="md">
              <Phone className="w-4 h-4" />
              Sună acum
            </Button>
          </a>
          <a
            href={getWhatsAppUrl(siteConfig.whatsapp, 'Bună ziua! Aș dori informații despre produsele dumneavoastră.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="md" className="bg-green-600 text-white hover:bg-green-700">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Trimite-ne un mesaj
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    Mesaj trimis cu succes!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Mulțumim pentru mesaj. Te vom contacta în cel mai scurt timp.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Trimite alt mesaj
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelStyles}>
                        Nume <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        placeholder="Numele tău"
                        className={inputStyles}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelStyles}>
                        Telefon <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                        placeholder="Numărul tău de telefon"
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelStyles}>Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="Adresa ta de email"
                      className={inputStyles}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className={labelStyles}>Subiect</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="Despre ce este vorba?"
                      className={inputStyles}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelStyles}>
                      Mesaj <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                      rows={5}
                      placeholder="Scrie mesajul tău aici..."
                      className={inputStyles + ' resize-y'}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      'Se trimite...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Trimite mesajul
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact details */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Date de contact
              </h2>

              <div className="bg-surface rounded-xl border border-border p-6 space-y-5">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefon</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                      {siteConfig.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Adresă</p>
                    <p className="font-medium text-foreground">{siteConfig.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Program</p>
                    <div className="font-medium text-foreground space-y-0.5 text-sm">
                      <p>{siteConfig.schedule.weekdays}</p>
                      <p>{siteConfig.schedule.saturday}</p>
                      <p>{siteConfig.schedule.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 md:pb-24">
        <div className="container-main">
          <div className="rounded-xl overflow-hidden shadow-sm border border-border h-[400px]">
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Brutăria Lunca Ilvei pe hartă"
            />
          </div>
        </div>
      </section>
    </>
  )
}
