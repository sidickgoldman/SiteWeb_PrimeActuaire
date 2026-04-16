"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { fr, type Dictionary } from "./fr";
import { en } from "./en";

export type Locale = "fr" | "en";

const dictionaries: Record<Locale, Dictionary> = { fr, en };

interface I18nContextValue {
  locale: Locale;
  t: Dictionary;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "fr",
  t: fr,
  toggleLocale: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "fr" ? "en" : "fr"));
  }, []);

  return (
    <I18nContext.Provider value={{ locale, t: dictionaries[locale], toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
