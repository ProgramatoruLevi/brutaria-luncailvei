import { getCookiePreferences } from './cookies'

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
  }
}

const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined)?.trim() || ''
const ADS_ID = (import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined)?.trim() || ''

const isBrowser = () => typeof window !== 'undefined'

let gaLoaded = false

export const hasAnalyticsIds = () => Boolean(GA_ID || ADS_ID)

export const enableAnalytics = () => {
  if (!isBrowser() || gaLoaded) return
  if (!GA_ID && !ADS_ID) return

  const idForBootstrap = GA_ID || ADS_ID
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${idForBootstrap}`
  script.async = true
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window.gtag = function gtag(this: unknown) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments as unknown as Record<string, unknown>)
  }
  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  })
  window.gtag('js', new Date())
  if (GA_ID) window.gtag('config', GA_ID)
  if (ADS_ID) window.gtag('config', ADS_ID)

  gaLoaded = true
}

export const disableAnalytics = () => {
  if (!isBrowser()) return

  document
    .querySelectorAll<HTMLScriptElement>('script[src*="googletagmanager.com"]')
    .forEach((s) => s.remove())

  const cookieNames = document.cookie
    .split(';')
    .map((c) => c.trim().split('=')[0])
    .filter((n) => n.startsWith('_ga') || n === '_gid')

  const hostname = window.location.hostname
  cookieNames.forEach((name) => {
    const expiry = 'expires=Thu, 01 Jan 1970 00:00:00 UTC'
    document.cookie = `${name}=; ${expiry}; path=/;`
    document.cookie = `${name}=; ${expiry}; path=/; domain=.${hostname};`
    document.cookie = `${name}=; ${expiry}; path=/; domain=${hostname};`
  })

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    })
  }

  window.gtag = undefined
  gaLoaded = false
}

export const initConsentBasedAnalytics = () => {
  if (!isBrowser()) return
  const prefs = getCookiePreferences()
  if (prefs?.analytics) enableAnalytics()
}

const isAnalyticsAllowed = (): boolean => {
  const prefs = getCookiePreferences()
  return Boolean(prefs?.analytics)
}

type AnalyticsParams = Record<string, string | number | boolean | undefined>

export const trackEvent = (eventName: string, params: AnalyticsParams = {}) => {
  if (!isBrowser() || !isAnalyticsAllowed()) return

  const payload: Record<string, unknown> = {
    event: eventName,
    event_time: new Date().toISOString(),
    page_path: window.location.pathname,
    ...params,
  }

  if (Array.isArray(window.dataLayer)) window.dataLayer.push(payload)
  if (typeof window.gtag === 'function') window.gtag('event', eventName, payload)
}

export const trackCallClick = (label = 'phone_link') => {
  trackEvent('call_click', { label, source_page: window.location.pathname })
}

export const trackWhatsappClick = (label = 'whatsapp_link') => {
  trackEvent('whatsapp_click', { label, source_page: window.location.pathname })
}
