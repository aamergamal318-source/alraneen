// Project Signature: alranin-community-development-association
import { useLanguage } from '../../context/LanguageContext';
import type { Language } from '../../types';

const langs: { code: Language; label: string; short: string }[] = [
  { code: 'ar', label: 'العربية', short: 'AR' },
  { code: 'he', label: 'עברית', short: 'HE' },
  { code: 'en', label: 'English', short: 'EN' },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-full p-1">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          title={l.label}
          aria-label={`Switch to ${l.label}`}
          className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 ${
            lang === l.code
              ? 'bg-gold text-primary shadow-md'
              : 'text-white hover:bg-white/20'
          }`}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
