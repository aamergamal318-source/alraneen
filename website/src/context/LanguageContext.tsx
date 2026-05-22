// Project Signature: alranin-community-development-association
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Language, TranslationSet } from '../types';
import translations from '../data/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationSet;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    return (localStorage.getItem('alranin-lang') as Language) || 'ar';
  });

  const t = translations[lang];
  const isRTL = lang === 'ar' || lang === 'he';

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('alranin-lang', newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.title = lang === 'ar'
      ? 'جمعية الرنين للتطوير المجتمعي'
      : lang === 'he'
      ? 'עמותת אלרנין לפיתוח קהילתי'
      : 'Al Ranin Association for Community Development';
  }, [lang, isRTL]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
