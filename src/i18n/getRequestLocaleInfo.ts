import { headers } from "next/headers";
import { cache } from "react";

import { defaultLocale, isLocale, type Locale } from "./config";

export type RequestLocation = {
  countryCode?: string | null;
  region?: string | null;
  city?: string | null;
};

export type RequestLocaleInfo = {
  locale: Locale;
  location: RequestLocation;
  detectedVia: "country_header" | "accept_language" | "default";
};

const resolveLocaleFromCountry = (
  countryCode: string | null
): Locale | null => {
  if (!countryCode) {
    return null;
  }

  const upper = countryCode.toUpperCase();
  if (upper === "BR") {
    return "pt-BR";
  }

  return "en-US";
};

const resolveLocaleFromAcceptLanguage = (
  headerValue: string | null
): Locale | null => {
  if (!headerValue) {
    return null;
  }

  const languages = headerValue
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  const first = languages[0];

  if (!first) {
    return null;
  }

  if (first.startsWith("pt")) {
    return "pt-BR";
  }

  if (isLocale(first)) {
    return first;
  }

  return "en-US";
};

export const getRequestLocaleInfo = cache(
  async (): Promise<RequestLocaleInfo> => {
    const headerList = await headers();

    const countryCode = headerList.get("x-vercel-ip-country");
    const region = headerList.get("x-vercel-ip-country-region");
    const city = headerList.get("x-vercel-ip-city");
    const acceptLanguage = headerList.get("accept-language");

  let locale: Locale = defaultLocale;
  let detectedVia: RequestLocaleInfo["detectedVia"] = "default";

  const localeFromCountry = resolveLocaleFromCountry(countryCode);
  if (localeFromCountry) {
    locale = localeFromCountry;
    detectedVia = "country_header";
  } else {
    const localeFromLanguage = resolveLocaleFromAcceptLanguage(acceptLanguage);
    if (localeFromLanguage) {
      locale = localeFromLanguage;
      detectedVia = "accept_language";
    }
  }

    const location = { countryCode, region, city };

    console.log("[locale] Request locale resolved", {
      locale,
      detectedVia,
      location,
    });

    return {
      locale,
      detectedVia,
      location,
    };
  }
);
