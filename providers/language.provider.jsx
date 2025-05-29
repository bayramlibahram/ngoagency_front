"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const SUPPORTED_LANGUAGES = [
  { code: "az", label: "AZ" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const LanguageContext = createContext({
  languages: [],
  currentLang: "az",
});

export default function LanguageProvider({ children }) {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState("az");
  const [languages, setLanguages] = useState([]);

  // Handlers
  const generateUrls = useCallback(() => {
    const new_urls = SUPPORTED_LANGUAGES.map(({ code, label }) => {
      const other_langs = SUPPORTED_LANGUAGES.filter((l) => l.code !== code).map(
        (l) => `/${l.code}`
      );
      let new_pathname = pathname;
      for (let i = 0; i < other_langs.length; i++) {
        new_pathname = new_pathname.replace(other_langs[i], `/${code}`);
      }

      return {
        code: code,
        label: label,
        url: new_pathname,
      };
    });
    setLanguages(new_urls);
  }, [pathname]);

  useEffect(() => {
    generateUrls();

    //NEED TO REFACTOR THIS CASE
    const langInPath = pathname.split("/")[1];
    if (SUPPORTED_LANGUAGES.some((l) => l.code === langInPath)) {
      setCurrentLang(langInPath);
    }
  }, [pathname, generateUrls]);

  const value = useMemo(
    () => ({
      languages,
      currentLang,
      setCurrentLang,
    }),
    [languages, currentLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguageContext = () => useContext(LanguageContext);
