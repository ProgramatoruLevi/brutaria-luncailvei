import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { SEOHead } from '@/components/shared/SEOHead'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Reveal } from '@/components/ui/Reveal'

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
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData(initialFormData)
    }, 1000)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const inputStyles = 'w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary transition-all duration-200'
  const labelStyles = 'block text-sm font-medium text-foreground mb-1.5'

  return (
    <>
      <SEOHead
        title="Contact"
        description="Contactează Brutăria Lunca Ilvei. Suntem aici pentru comenzi, întrebări și sugestii."
        path="/contact"
      />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-14 md:pb-20 bg-gradient-to-b from-muted/40 via-background to-background overflow-hidden">
        <div className="absolute -top-20 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container-main relative text-center">
          <Reveal>
            <div className="mb-5">
              <SectionEyebrow>Ia legătura</SectionEyebrow>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 tracking-tight leading-[1.05]">
              Hai să <span className="italic text-primary">vorbim</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Suntem bucuroși să te ajutăm cu orice întrebare sau comandă. Alege modalitatea care ți se potrivește cel mai bine.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-8 bg-surface border-y border-border/60">
        <div className="container-main flex flex-wrap justify-center gap-4">
          <a href={getPhoneUrl(siteConfig.phone)}>
            <Button variant="primary" size="md" className="rounded-full shadow-md shadow-primary/20">
              <Phone className="w-4 h-4" />
              Sună acum
            </Button>
          </a>
          <a
            href={getWhatsAppUrl(siteConfig.whatsapp, 'Bună ziua! Aș dori informații despre produsele dumneavoastră.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="md" className="rounded-full bg-green-600 text-white hover:bg-green-700 shadow-md shadow-green-600/20">
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
            <Reveal className="lg:col-span-3">
              <div className="mb-3">
                <SectionEyebrow align="left">Formular</SectionEyebrow>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Trimite-ne un mesaj
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-gradient-to-br from-green-50 to-green-100/40 border border-green-200 rounded-2xl p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white mb-5 shadow-lg shadow-green-600/30"
                  >
                    <CheckCircle className="w-8 h-8" />
                  </motion.div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
                    Mesaj trimis cu succes!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Mulțumim pentru mesaj. Te vom contacta în cel mai scurt timp.
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Trimite alt mesaj
                  </Button>
                </motion.div>
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
                    className="w-full sm:w-auto rounded-full shadow-lg shadow-primary/25"
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
            </Reveal>

            {/* Contact details */}
            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="mb-3">
                <SectionEyebrow align="left">Date</SectionEyebrow>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Date de contact
              </h2>

              <div className="bg-gradient-to-br from-surface to-background rounded-2xl ring-1 ring-border/60 p-6 space-y-5 shadow-sm">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:ring-2 group-hover:ring-accent/40 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Telefon</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {siteConfig.phone}
                    </p>
                  </div>
                </a>

                <div className="h-px bg-border/50" />

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:ring-2 group-hover:ring-accent/40 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <div className="h-px bg-border/50" />

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Adresă</p>
                    <p className="font-medium text-foreground">{siteConfig.address.full}</p>
                  </div>
                </div>

                <div className="h-px bg-border/50" />

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Program</p>
                    <div className="font-medium text-foreground space-y-0.5 text-sm">
                      <p>{siteConfig.schedule.weekdays}</p>
                      <p>{siteConfig.schedule.saturday}</p>
                      <p>{siteConfig.schedule.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 md:pb-28">
        <div className="container-main">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-accent/30 h-[400px]">
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
          </Reveal>
        </div>
      </section>
    </>
  )
}
