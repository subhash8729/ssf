"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useTransition,
} from "react";
import en, { Translations } from "@/locales/en";

export type Language = "en" | "hi";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => Promise<void>;
  toggleLanguage: () => Promise<void>;
  t: Translations;
  isLanguageLoading: boolean;
  languageError: string | null;
  clearLanguageError: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: async () => {},
  toggleLanguage: async () => {},
  t: en,
  isLanguageLoading: false,
  languageError: null,
  clearLanguageError: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

// In-memory cache for lazy-loaded Hindi module
let cachedHindiDictionary: Translations | null = null;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [translations, setTranslations] = useState<Translations>(en);
  const [isLanguageLoading, setIsLanguageLoading] = useState(false);
  const [languageError, setLanguageError] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  const clearLanguageError = useCallback(() => {
    setLanguageError(null);
  }, []);

  // Update <html lang="..."> attribute for accessibility and SEO
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  // Load Hindi dictionary lazily on demand
  const loadHindiDictionary = useCallback(async (): Promise<Translations | null> => {
    if (cachedHindiDictionary) {
      return cachedHindiDictionary;
    }

    setIsLanguageLoading(true);
    setLanguageError(null);

    try {
      // Dynamic lazy-load code-split chunk: only downloaded when user requests Hindi
      const hiModule = await import("@/locales/hi");
      cachedHindiDictionary = hiModule.default;
      return hiModule.default;
    } catch (err) {
      console.error("Failed to lazy load Hindi translations:", err);
      setLanguageError("Could not load Hindi translations. Please check your connection.");
      return null;
    } finally {
      setIsLanguageLoading(false);
    }
  }, []);

  // Check saved user language preference on initial mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("ss_lang") as Language | null;
      if (savedLang === "hi") {
        loadHindiDictionary().then((hiDict) => {
          if (hiDict) {
            startTransition(() => {
              setTranslations(hiDict);
              setLanguageState("hi");
            });
          }
        });
      }
    } catch {
      // localStorage may be unavailable or disabled
    }
  }, [loadHindiDictionary]);

  const setLanguage = useCallback(
    async (newLang: Language) => {
      if (newLang === language) return;

      if (newLang === "hi") {
        if (cachedHindiDictionary) {
          // Already cached: switch synchronously without fake delay
          startTransition(() => {
            setTranslations(cachedHindiDictionary!);
            setLanguageState("hi");
          });
          try {
            localStorage.setItem("ss_lang", "hi");
          } catch {
            // ignore
          }
        } else {
          // Must fetch chunk over network: show real loading spinner
          const hiDict = await loadHindiDictionary();
          if (hiDict) {
            startTransition(() => {
              setTranslations(hiDict);
              setLanguageState("hi");
            });
            try {
              localStorage.setItem("ss_lang", "hi");
            } catch {
              // ignore
            }
          }
        }
      } else {
        // Switch to English: en is already bundled synchronously
        startTransition(() => {
          setTranslations(en);
          setLanguageState("en");
        });
        try {
          localStorage.setItem("ss_lang", "en");
        } catch {
          // ignore
        }
      }
    },
    [language, loadHindiDictionary]
  );

  const toggleLanguage = useCallback(async () => {
    const nextLang: Language = language === "en" ? "hi" : "en";
    await setLanguage(nextLang);
  }, [language, setLanguage]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations,
        isLanguageLoading,
        languageError,
        clearLanguageError,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
