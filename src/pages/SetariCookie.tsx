import { useEffect, useState } from 'react'
import { CheckCircle2, ShieldCheck } from 'lucide-react'
import { SEOHead } from '@/components/shared/SEOHead'
import {
  defaultCookiePreferences,
  getCookiePreferences,
  saveCookiePreferences,
  type CookiePreferenceInput,
} from '@/utils/cookies'
import { disableAnalytics, enableAnalytics } from '@/utils/analytics'

type ToggleProps = {
  id: string
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange?: (next: boolean) => void
}

function Toggle({ id, title, description, checked, disabled, onChange }: ToggleProps) {
  return (
    <div className="flex items-start justify-between gap-5 rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex-1 min-w-0">
        <label htmlFor={id} className="font-serif text-lg font-semibold text-foreground">
          {title}
        </label>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className="shrink-0 pt-1">
        <button
          id={id}
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          onClick={() => !disabled && onChange?.(!checked)}
          className={[
            'relative inline-flex h-7 w-12 items-center rounded-full transition cursor-pointer disabled:cursor-not-allowed',
            checked ? 'bg-primary' : 'bg-muted',
            disabled ? 'opacity-70' : '',
          ].join(' ')}
        >
          <span
            className={[
              'inline-block h-5 w-5 rounded-full bg-white shadow transition-transform',
              checked ? 'translate-x-6' : 'translate-x-1',
            ].join(' ')}
          />
        </button>
      </div>
    </div>
  )
}

export function SetariCookie() {
  const [prefs, setPrefs] = useState<CookiePreferenceInput>(defaultCookiePreferences)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const stored = getCookiePreferences()
    if (stored) {
      setPrefs({
        necessary: true,
        analytics: stored.analytics,
        marketing: stored.marketing,
      })
    }
  }, [])

  const handleSave = () => {
    saveCookiePreferences(prefs)
    if (prefs.analytics) {
      enableAnalytics()
    } else {
      disableAnalytics()
    }
    setSaved(true)
    setTimeout(() => setSaved(false), 3500)
  }

  return (
    <>
      <SEOHead title="Setări cookie" path="/setari-cookie" noIndex />

      <article className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-main max-w-3xl">
          <div className="mb-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <h1 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-foreground">
              Setări cookie
            </h1>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Controlează preferințele tale de confidențialitate. Modificările au efect
              imediat — cookie-urile analitice se șterg automat când dezactivezi categoria.
            </p>
          </div>

          <div className="space-y-4">
            <Toggle
              id="necessary"
              title="Necesare"
              description="Cookie-uri esențiale pentru funcționarea site-ului. Nu pot fi dezactivate."
              checked
              disabled
            />

            <Toggle
              id="analytics"
              title="Analitice"
              description="Ne ajută să înțelegem cum este folosit site-ul, în mod agregat și anonimizat (Google Analytics)."
              checked={prefs.analytics}
              onChange={(next) => setPrefs((p) => ({ ...p, analytics: next }))}
            />

            <Toggle
              id="marketing"
              title="Marketing"
              description="Permit personalizarea reclamelor și măsurarea conversiilor (Google Ads). Se activează doar cu acordul tău."
              checked={prefs.marketing}
              onChange={(next) => setPrefs((p) => ({ ...p, marketing: next }))}
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary-dark cursor-pointer"
            >
              Salvează preferințele
            </button>
            {saved && (
              <span className="inline-flex items-center gap-2 text-sm font-medium text-green-700">
                <CheckCircle2 className="h-5 w-5" />
                Preferințele au fost salvate.
              </span>
            )}
          </div>
        </div>
      </article>
    </>
  )
}
