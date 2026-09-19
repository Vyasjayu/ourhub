"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "hi";

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

const STORAGE_KEY = "ourhub-language";

/* =========================================================
   LANGUAGE PROVIDER
========================================================= */

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  /*
   * DEFAULT LANGUAGE
   * Always English on initial load.
   */
  const [language, setLanguageState] =
    useState<Language>("en");

  /* =======================================================
     SET INITIAL HTML LANGUAGE
  ======================================================= */

  useEffect(() => {
    document.documentElement.lang = "en-IN";

    /*
     * Remove any previously saved Hindi value.
     *
     * This makes English the default language.
     */
    localStorage.setItem(
      STORAGE_KEY,
      "en"
    );

    document.cookie =
      `${STORAGE_KEY}=en; ` +
      `path=/; max-age=31536000; SameSite=Lax`;
  }, []);

  /* =======================================================
     CHANGE LANGUAGE
  ======================================================= */

  const setLanguage = (
    nextLanguage: Language
  ) => {
    setLanguageState(nextLanguage);

    /* Save selected language */
    localStorage.setItem(
      STORAGE_KEY,
      nextLanguage
    );

    /* Save cookie */
    document.cookie =
      `${STORAGE_KEY}=${nextLanguage}; ` +
      `path=/; max-age=31536000; SameSite=Lax`;

    /* Update HTML language */
    document.documentElement.lang =
      nextLanguage === "hi"
        ? "hi-IN"
        : "en-IN";
  };

  /* =======================================================
     TOGGLE LANGUAGE
  ======================================================= */

  const toggleLanguage = () => {
    setLanguage(
      language === "en"
        ? "hi"
        : "en"
    );
  };

  /* =======================================================
     CONTEXT VALUE
  ======================================================= */

  const value = useMemo<LanguageContextType>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
    }),
    [language]
  );

  /* =======================================================
     PROVIDER
  ======================================================= */

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/* =========================================================
   LANGUAGE HOOK
========================================================= */

export function useLanguage(): LanguageContextType {
  const context =
    useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}