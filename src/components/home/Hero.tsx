import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Wheat, Clock, MessageCircle, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { siteConfig } from '@/config/site'
import { getWhatsAppUrl } from '@/lib/utils'

const trustItems = [
  'Ingrediente naturale',
  'Coapte zilnic',
  'Rețete tradiționale',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&h=1080&fit=crop&q=80"
          alt="Produse de brutărie proaspete"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      </div>

      {/* Decorative blur orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-main relative z-10 py-24 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="max-w-2xl lg:col-span-8"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
            variants={{}}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="mb-6">
              <SectionEyebrow variant="dark" align="left">
                Din inima Bistriței-Năsăud
              </SectionEyebrow>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-[4rem] font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Pâine proaspătă și patiserie <span className="italic text-accent-light">făcute cu grijă</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-xl"
            >
              Descoperă gustul autentic al produselor pregătite zilnic,
              din ingrediente atent alese, pentru tine și familia ta.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to="/produse">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-full shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Vezi produsele
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a
                href={getWhatsAppUrl(siteConfig.whatsapp, 'Bună ziua! Aș dori să comand produse de la brutărie.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/50 text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Comandă pe WhatsApp
                </Button>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-x-5 gap-y-3 text-white/80"
            >
              {trustItems.map((text, i) => (
                <div key={text} className="flex items-center gap-3">
                  <Wheat className="w-4 h-4 text-accent-light" />
                  <span className="text-sm font-medium">{text}</span>
                  {i < trustItems.length - 1 && (
                    <span className="hidden sm:inline-block w-px h-4 bg-white/25 ml-2" aria-hidden="true" />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating credential card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:justify-self-end"
          >
            <div className="relative max-w-md lg:max-w-xs mx-auto lg:mx-0">
              {/* Ring accent */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/40 via-transparent to-primary/30 blur-sm" aria-hidden="true" />
              <div className="relative bg-surface/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 md:p-6 ring-1 ring-white/30">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary shrink-0 ring-4 ring-primary/5">
                    <Clock className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-dark mb-1">
                      Pregătite zilnic
                    </p>
                    <p className="font-serif text-base md:text-lg font-bold text-foreground leading-tight">
                      Coapte proaspăt din zori
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">
                      Zi de zi, de la 4:00
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-5 pt-3 md:pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600" />
                    </span>
                    Deschis acum
                  </span>
                  <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                    06:00 – 20:00
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/70"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">Descoperă</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
