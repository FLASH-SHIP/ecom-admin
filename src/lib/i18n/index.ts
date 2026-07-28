export const SUPPORTED_LOCALES = ["vi", "en"] as const;
export const locales = SUPPORTED_LOCALES;
export const DEFAULT_LOCALE = "vi" as const;
export const defaultLocale = DEFAULT_LOCALE;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export type Locale = SupportedLocale;

export function translate(
  key: string,
  _locale?: string | null,
  variables?: Record<string, unknown>,
): string {
  if (variables) {
    let result = key;
    for (const [vKey, vVal] of Object.entries(variables)) {
      result = result.replace(new RegExp(`{${vKey}}`, "g"), String(vVal));
    }
    return result;
  }
  return key;
}
