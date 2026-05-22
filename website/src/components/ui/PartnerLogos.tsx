// Project Signature: alranin-community-development-association
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from './SectionTitle';

interface PartnerCategory {
  label: string;
  count: number;
}

export default function PartnerLogos() {
  const { t, isRTL } = useLanguage();

  const categories: PartnerCategory[] = [
    { label: t.partners.categories.schools, count: 4 },
    { label: t.partners.categories.local, count: 3 },
    { label: t.partners.categories.academic, count: 3 },
    { label: t.partners.categories.tech, count: 4 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.partners.title}
          subtitle={t.partners.subtitle}
        />
        {categories.map((cat) => (
          <div key={cat.label} className="mb-10">
            <h4 className={`text-sm font-semibold text-neutral-500 mb-4 uppercase tracking-wide ${isRTL ? 'text-right' : 'text-left'}`}>
              {cat.label}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Array.from({ length: cat.count }).map((_, i) => (
                <div
                  key={i}
                  className="h-20 bg-neutral-100 rounded-xl flex items-center justify-center border border-dashed border-neutral-200 hover:border-gold/50 hover:bg-gold/5 transition-colors duration-200"
                >
                  <span className="text-neutral-400 text-xs font-medium">{t.partners.placeholder}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
