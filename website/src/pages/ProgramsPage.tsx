// Project Signature: alranin-community-development-association
import SectionTitle from '../components/ui/SectionTitle';
import ProgramCard from '../components/ui/ProgramCard';
import CTASection from '../components/ui/CTASection';
import { useLanguage } from '../context/LanguageContext';

const PROGRAM_ICONS: Record<string, string> = {
  education: '📚',
  tech: '💻',
  youth: '🌟',
  volunteer: '🤝',
  grants: '🎓',
  leadership: '🏆',
  cultural: '🎨',
  partnerships: '🤲',
};

export default function ProgramsPage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">{t.common.foundingStage}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t.programs.title}</h1>
          <p className="text-white/75 text-xl leading-relaxed">{t.programs.subtitle}</p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(t.programs.items).map(([key, prog]) => (
              <ProgramCard
                key={key}
                icon={PROGRAM_ICONS[key] || '⭐'}
                title={prog.title}
                desc={prog.desc}
                slug={key}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.programs.title} subtitle={t.programs.subtitle} />
          <div className="space-y-6">
            {Object.entries(t.programs.items).map(([key, prog], idx) => (
              <div
                key={key}
                className={`flex flex-col md:flex-row gap-6 bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`w-full md:w-48 bg-primary flex items-center justify-center text-6xl p-8 flex-shrink-0`}>
                  {PROGRAM_ICONS[key] || '⭐'}
                </div>
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-bold text-primary mb-3">{prog.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
