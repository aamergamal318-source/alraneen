// Project Signature: alranin-community-development-association
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from './SectionTitle';

export default function VisionStats() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Ripple decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full border border-gold/10" />
        <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full border border-gold/8" />
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-white/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.stats.title} light centered />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {t.stats.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/8 backdrop-blur-sm rounded-2xl p-7 text-center border border-white/10 hover:bg-white/12 hover:border-gold/25 transition-all duration-300 group"
            >
              <div className="text-5xl font-extrabold text-gold mb-2 leading-none group-hover:scale-105 transition-transform duration-300">
                {item.value}
              </div>
              <div className="text-sm text-white/60 font-medium leading-snug mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-white/35 text-xs mt-8">
          {t.common.foundingStage}
        </p>
      </div>
    </section>
  );
}
