export type CookiePreferences = {
  necessary: true
  analytics: boolean
  marketing: boolean
  updatedAt: string
}

export type CookiePreferenceInput = Omit<CookiePreferences, 'updatedAt'>

const STORAGE_KEY = 'brutaria_luncailvei_cookie_prefs'

export const defaultCookiePreferences: CookiePreferenceInput = {
  necessary: true,
  analytics: false,
  marketing: false,
}

export const getCookiePreferences = (): CookiePreferences | null => {
  if (typeof window === 'undefined') return null

  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) return null

  try {
    const parsed = JSON.parse(raw) as CookiePreferences
    if (parsed && parsed.necessary) return parsed
  } catch {
    return null
  }

  return null
}

export const COOKIE_PREFS_EVENT = 'cookie-preferences-changed'

export const saveCookiePreferences = (prefs: CookiePreferenceInput) => {
  if (typeof window === 'undefined') return

  const payload: CookiePreferences = {
    ...prefs,
    necessary: true,
    updatedAt: new Date().toISOString(),
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  window.dispatchEvent(new CustomEvent(COOKIE_PREFS_EVENT, { detail: payload }))
}

export const clearCookiePreferences = () => {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(STORAGE_KEY)
}
