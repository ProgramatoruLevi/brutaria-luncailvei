import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Shield } from 'lucide-react'
import {
  defaultCookiePreferences,
  getCookiePreferences,
  saveCookiePreferences,
} from '@/utils/cookies'
import { enableAnalytics, disableAnalytics } from '@/utils/analytics'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const navigate = useNavigate()
  const location = useLocation()

  const isSettingsPage = location.pathname.includes('/setari-cookie')

  useEffect(() => {
    if (isSettingsPage) {
      if (timerRef.current) clearTimeout(timerRef.current)
      setVisible(false)
      return
    }

    const prefs = getCookiePreferences()
    if (prefs) return

    timerRef.current = setTimeout(() => setVisible(true), 1300)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [isSettingsPage])

  if (!visible) return null

  const acceptAll = () => {
    saveCookiePreferences({ necessary: true, analytics: true, marketing: true })
    enableAnalytics()
    setVisible(false)
  }

  const reject = () => {
    saveCookiePreferences({
      ...defaultCookiePreferences,
      analytics: false,
      marketing: false,
    })
    disableAnalytics()
    setVisible(false)
  }

  const openSettings = () => {
    setVisible(false)
    navigate('/setari-cookie')
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-md bg-foreground/40 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
        className="w-full max-w-lg rounded-3xl border border-border bg-surface p-7 sm:p-9 shadow-2xl shadow-secondary-dark/30"
      >
        <div className="mb-2 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Shield className="h-5 w-5" />
          </span>
          <h2
            id="cookie-banner-title"
            className="font-serif text-xl font-bold text-foreground"
          >
            Respectăm confidențialitatea ta
          </h2>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Folosim cookie-uri pentru a îmbunătăți experiența pe site. Cookie-urile
          analitice și de marketing se activează doar cu acordul tău.{' '}
          <Link
            to="/politica-confidentialitate"
            className="text-primary underline hover:text-primary-dark"
          >
            Politica de confidențialitate
          </Link>
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={acceptAll}
            className="w-full rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary-dark cursor-pointer"
          >
            Acceptă toate cookie-urile
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={reject}
              className="rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-muted-foreground transition hover:bg-muted cursor-pointer"
            >
              Doar necesare
            </button>
            <button
              type="button"
              onClick={openSettings}
              className="rounded-full border border-primary bg-surface px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white cursor-pointer"
            >
              Setări cookie
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
