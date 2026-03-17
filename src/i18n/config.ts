export const locales = ["tr", "en", "ru", "de", "es", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  ru: "Русский",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  ar: "العربية",
};

export const localeFlags: Record<Locale, string> = {
  tr: "🇹🇷",
  en: "🇬🇧",
  ru: "🇷🇺",
  de: "🇩🇪",
  es: "🇪🇸",
  fr: "🇫🇷",
  ar: "🇸🇦",
};
