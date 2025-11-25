"use client";

import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from "react";

import type { RequestLocation } from "@/i18n/getRequestLocaleInfo";

type LocationContextValue = {
  isBrazil: boolean;
  countryCode?: string | null;
  region?: string | null;
  city?: string | null;
};

const LocationContext = createContext<LocationContextValue | null>(null);

type LocationProviderProps = PropsWithChildren<{
  location?: RequestLocation;
}>;

const isBrazilCountry = (countryCode?: string | null) =>
  countryCode?.toUpperCase() === "BR";

export function LocationProvider({
  children,
  location,
}: LocationProviderProps) {
  const value = useMemo<LocationContextValue>(() => {
    const countryCode = location?.countryCode ?? null;
    const region = location?.region ?? null;
    const city = location?.city ?? null;

    return {
      isBrazil: isBrazilCountry(countryCode),
      countryCode,
      region,
      city,
    };
  }, [location?.countryCode, location?.region, location?.city]);

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

export const useLocation = () => {
  const ctx = useContext(LocationContext);
  if (!ctx) {
    throw new Error("useLocation must be used within LocationProvider");
  }
  return ctx;
};
