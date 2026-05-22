// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import { useLanguage } from '../context/LanguageContext';

const CATEGORY_ICONS: Record<string, string> = {
  schools: '🏫',
  local: '🏛️',
  academic: '🎓',
  tech: '💻',
  civil: '🌐',
  donors: '💛',
  youth: '🌟',
};

const CATEGORY_COUNTS: Record<string, number> = {
  schools: 4,
  local: 3,
  academic: 3,
  tech: 4,
  civil: 3,
  donors: 3,
  youth: 3,
};

export default function PartnersPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">{t.common.bePartner}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t.partners.title}</h1>
          <p className="text-white/75 text-xl leading-relaxed">{t.partners.subtitle}</p>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.partners.title} subtitle={t.partners.subtitle} />

          {Object.entries(t.partners.categories).map(([key, label]) => (
            <div key={key} className="mb-14">
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                <span className="text-2xl">{CATEGORY_ICONS[key]}</span>
                <h3 className="text-xl font-bold text-primary">{label}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {Array.from({ length: CATEGORY_COUNTS[key] || 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-24 bg-white rounded-xl flex flex-col items-center justify-center border border-dashed border-neutral-200 hover:border-gold/50 hover:bg-gold/5 hover:shadow-sm transition-all duration-200 cursor-pointer group"
                  >
                    <div className="text-2xl mb-1 opacity-30 group-hover:opacity-60 transition-opacity">{CATEGORY_ICONS[key]}</div>
                    <span className="text-neutral-400 text-xs font-medium">{t.partners.placeholder}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.partners.ctaTitle}</h2>
          <p className="text-white/75 text-lg mb-8 max-w-2xl mx-auto">{t.partners.ctaDesc}</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-primary font-bold text-base rounded-full hover:bg-gold-light transition-colors duration-200 shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
          >
            {t.partners.ctaBtn}
          </Link>
        </div>
      </section>
    </div>
  );
}
