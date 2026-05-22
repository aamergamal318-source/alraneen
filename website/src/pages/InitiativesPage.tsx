// Project Signature: alranin-community-development-association
import SectionTitle from '../components/ui/SectionTitle';
import InitiativeCard from '../components/ui/InitiativeCard';
import CTASection from '../components/ui/CTASection';
import FoundingStageBanner from '../components/ui/FoundingStageBanner';
import { useLanguage } from '../context/LanguageContext';

const GRADIENTS = [
  'from-primary/80 to-primary',
  'from-gold/70 to-gold-dark',
  'from-teal-600 to-teal-800',
  'from-emerald-600 to-emerald-800',
  'from-cyan-700 to-cyan-900',
  'from-indigo-600 to-indigo-800',
  'from-primary/60 to-primary/90',
];

const STATUS_MAP: Record<string, 'planning' | 'soon' | 'open' | 'seeking'> = {
  scholarships: 'seeking',
  leaders: 'planning',
  techlab: 'open',
  volunteerDays: 'soon',
  schoolSupport: 'planning',
  aiWorkshops: 'open',
  cultural: 'soon',
};

export default function InitiativesPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">{t.common.foundingStage}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t.initiatives.title}</h1>
          <p className="text-white/75 text-xl leading-relaxed">{t.initiatives.subtitle}</p>
        </div>
      </section>

      {/* Status legend */}
      <section className="py-8 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FoundingStageBanner />
          <div className={`flex flex-wrap gap-4 mt-6 ${isRTL ? 'justify-end' : 'justify-start'}`}>
            {Object.entries(t.initiatives.statuses).map(([key, label]) => {
              const colors: Record<string, string> = {
                planning: 'bg-blue-100 text-blue-700',
                soon: 'bg-green-100 text-green-700',
                open: 'bg-gold/15 text-gold-dark',
                seeking: 'bg-purple-100 text-purple-700',
              };
              return (
                <span key={key} className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[key]}`}>
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(t.initiatives.items).map(([key, init], idx) => (
              <InitiativeCard
                key={key}
                id={key}
                title={init.title}
                desc={init.desc}
                target={init.target}
                status={STATUS_MAP[key] || 'planning'}
                category={init.category}
                gradient={GRADIENTS[idx % GRADIENTS.length]}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
