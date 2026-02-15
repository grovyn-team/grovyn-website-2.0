/**
 * Cookie consent state and helpers.
 * Use only in client components or after checking typeof window !== "undefined".
 */

export const CONSENT_COOKIE_NAME = "grovyn_consent";
export const CONSENT_COOKIE_MAX_AGE_DAYS = 365;

export type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export const FULL_CONSENT: ConsentState = {
  necessary: true,
  analytics: true,
  marketing: true,
};

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, maxAgeDays: number): void {
  if (typeof document === "undefined") return;
  const maxAge = maxAgeDays * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

/**
 * Returns the current consent state from the cookie, or null if not set.
 */
export function getConsent(): ConsentState | null {
  const raw = getCookie(CONSENT_COOKIE_NAME);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as ConsentState;
    if (typeof parsed.necessary !== "boolean" || typeof parsed.analytics !== "boolean" || typeof parsed.marketing !== "boolean") {
      return null;
    }
    return { necessary: true, analytics: !!parsed.analytics, marketing: !!parsed.marketing };
  } catch {
    return null;
  }
}

/**
 * Persists consent to a cookie. Call from client only.
 */
export function setConsent(state: ConsentState): void {
  setCookie(CONSENT_COOKIE_NAME, JSON.stringify(state), CONSENT_COOKIE_MAX_AGE_DAYS);
}

/**
 * Returns true if the user has already made a choice (cookie exists).
 */
export function hasConsentChoice(): boolean {
  return getConsent() !== null;
}

/**
 * Use from client code before loading analytics or marketing scripts.
 * Example: if (consentAllowsAnalytics()) loadGoogleAnalytics();
 */
export function consentAllowsAnalytics(): boolean {
  const c = getConsent();
  return c?.analytics === true;
}

/**
 * Use from client code before loading marketing scripts.
 */
export function consentAllowsMarketing(): boolean {
  const c = getConsent();
  return c?.marketing === true;
}
