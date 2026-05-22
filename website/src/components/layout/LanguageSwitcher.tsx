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
    <div className="flex items-center gap-1 bg-primary/7 rounded-full p-1 ring-1 ring-primary/10">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          title={l.label}
          aria-label={`Switch to ${l.label}`}
          className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 ${
            lang === l.code
              ? 'bg-primary text-white shadow-md'
              : 'text-primary/75 hover:bg-primary/10 hover:text-primary'
          }`}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
