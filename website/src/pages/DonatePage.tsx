// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import { CheckCircle, Info } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { useLanguage } from '../context/LanguageContext';

export default function DonatePage() {
  const { t, isRTL } = useLanguage();

  const CARD_ICONS = ['🎓', '📚', '🌟', '🏆', '💻'];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">{t.common.bePartner}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t.support.title}</h1>
          <p className="text-white/75 text-xl leading-relaxed">{t.support.subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`text-neutral-700 text-lg leading-relaxed mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t.support.intro}
          </p>
          <div className={`flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-5 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
            <Info size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-amber-800 text-sm leading-relaxed">{t.support.note}</p>
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.support.typesTitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.support.types.map((type, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 bg-neutral-50 rounded-xl p-4 border border-neutral-100 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <CheckCircle size={20} className="text-gold flex-shrink-0" />
                <span className="text-neutral-700 text-sm">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Cards */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.support.cardsTitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {t.support.cards.map((card, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
              >
                <div className="text-4xl mb-5">{CARD_ICONS[idx % CARD_ICONS.length]}</div>
                <h3 className="text-primary font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">{card.desc}</p>
                <Link
                  to="/contact"
                  className="inline-block px-5 py-2.5 bg-primary text-white font-semibold text-sm rounded-full hover:bg-primary-light transition-colors duration-200"
                >
                  {t.support.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t.support.cta}</h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">{t.support.intro}</p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold text-primary font-bold text-base rounded-full hover:bg-gold-light transition-colors duration-200 shadow-lg"
            >
              {t.common.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
