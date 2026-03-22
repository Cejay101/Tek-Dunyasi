import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { countryToLocale } from "./i18n/country-locale-map";
import { locales } from "./i18n/config";

const COOKIE_NAME = "NEXT_LOCALE";
const intlMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest) {
  const hasLocaleCookie = request.cookies.has(COOKIE_NAME);

  // If no cookie exists (first-time visitor), try geolocation
  if (!hasLocaleCookie) {
    const country = request.headers.get("x-vercel-ip-country");

    if (country) {
      const geoLocale = countryToLocale[country];

      if (geoLocale && locales.includes(geoLocale)) {
        // Set cookie on the request so next-intl picks it up
        request.cookies.set(COOKIE_NAME, geoLocale);
      }
    }
  }

  // Delegate to next-intl (handles: URL prefix > Cookie > Accept-Language > Default)
  const response = intlMiddleware(request);

  // Persist the geo-detected locale as a cookie on the response
  if (!hasLocaleCookie) {
    const country = request.headers.get("x-vercel-ip-country");
    if (country) {
      const geoLocale = countryToLocale[country];
      if (geoLocale && locales.includes(geoLocale)) {
        response.cookies.set(COOKIE_NAME, geoLocale, {
          maxAge: 60 * 60 * 24 * 365, // 1 year
          sameSite: "lax",
          path: "/",
        });
      }
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
