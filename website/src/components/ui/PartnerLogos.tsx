// Project Signature: alranin-community-development-association
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from './SectionTitle';

export default function PartnerLogos() {
  const { t, isRTL } = useLanguage();

  const categories = [
    { label: t.partners.categories.schools,  count: 4 },
    { label: t.partners.categories.local,    count: 3 },
    { label: t.partners.categories.tech,     count: 4 },
    { label: t.partners.categories.academic, count: 3 },
  ];

  return (
    <section className="py-20 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.partners.title} subtitle={t.partners.subtitle} />
        <div className="space-y-10">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h4 className={`text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                {cat.label}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {Array.from({ length: cat.count }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[72px] bg-neutral-50 rounded-xl flex items-center justify-center border border-dashed border-neutral-200 hover:border-gold/40 hover:bg-gold/5 transition-all duration-200 group"
                  >
                    <span className="text-neutral-300 text-xs font-medium group-hover:text-gold-dark transition-colors duration-200">
                      {t.partners.placeholder}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
