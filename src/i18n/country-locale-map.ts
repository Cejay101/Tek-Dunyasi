import type { Locale } from "./config";

/**
 * Maps ISO 3166-1 alpha-2 country codes to supported locales.
 * Used by the proxy to auto-detect language from Vercel's x-vercel-ip-country header.
 */
export const countryToLocale: Record<string, Locale> = {
  // Turkish
  TR: "tr",
  CY: "tr",

  // English
  US: "en",
  GB: "en",
  AU: "en",
  CA: "en",
  NZ: "en",
  IE: "en",
  ZA: "en",
  IN: "en",
  PH: "en",
  SG: "en",
  MY: "en",
  KE: "en",
  NG: "en",

  // German
  DE: "de",
  AT: "de",
  CH: "de",
  LI: "de",
  LU: "de",

  // Spanish
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  PE: "es",
  CL: "es",
  VE: "es",
  EC: "es",
  GT: "es",
  CU: "es",
  BO: "es",
  DO: "es",
  HN: "es",
  PY: "es",
  SV: "es",
  NI: "es",
  CR: "es",
  PA: "es",
  UY: "es",

  // French
  FR: "fr",
  BE: "fr",
  SN: "fr",
  CI: "fr",
  CM: "fr",
  MG: "fr",
  ML: "fr",
  BF: "fr",
  NE: "fr",
  TD: "fr",
  GN: "fr",
  RW: "fr",
  HT: "fr",
  TG: "fr",
  CG: "fr",
  GA: "fr",
  DJ: "fr",
  CF: "fr",
  MC: "fr",

  // Russian
  RU: "ru",
  BY: "ru",
  KZ: "ru",
  KG: "ru",
  TJ: "ru",
  UZ: "ru",

  // Arabic
  SA: "ar",
  AE: "ar",
  EG: "ar",
  IQ: "ar",
  MA: "ar",
  DZ: "ar",
  SD: "ar",
  YE: "ar",
  SY: "ar",
  TN: "ar",
  JO: "ar",
  LY: "ar",
  LB: "ar",
  OM: "ar",
  KW: "ar",
  QA: "ar",
  BH: "ar",
  PS: "ar",
  MR: "ar",
};
