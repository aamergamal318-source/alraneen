// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import ValuesSection from '../components/sections/ValuesSection';
import NewsletterSection from '../components/sections/NewsletterSection';
import VisionStats from '../components/ui/VisionStats';
import CTASection from '../components/ui/CTASection';
import SectionTitle from '../components/ui/SectionTitle';
import ProgramCard from '../components/ui/ProgramCard';
import InitiativeCard from '../components/ui/InitiativeCard';
import NewsCard from '../components/ui/NewsCard';
import FoundingStageBanner from '../components/ui/FoundingStageBanner';
import PartnerLogos from '../components/ui/PartnerLogos';
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

const GRADIENTS = [
  'from-primary/80 to-primary',
  'from-gold/70 to-gold-dark',
  'from-teal-600 to-teal-800',
  'from-emerald-600 to-emerald-800',
  'from-primary to-primary/80',
];

const NEWS_GRADIENTS = [
  'from-primary to-primary/80',
  'from-teal-700 to-teal-900',
  'from-emerald-700 to-emerald-900',
  'from-gold/80 to-gold-dark',
  'from-cyan-700 to-cyan-900',
];

export default function HomePage() {
  const { t, isRTL } = useLanguage();

  const programEntries = Object.entries(t.programs.items).slice(0, 4);
  const initiativeEntries = Object.entries(t.initiatives.items).slice(0, 3);
  const newsEntries = Object.entries(t.news.items).slice(0, 3);

  const statusMap: Record<string, 'planning' | 'soon' | 'open' | 'seeking'> = {
    scholarships: 'seeking',
    leaders: 'planning',
    techlab: 'open',
    volunteerDays: 'soon',
    schoolSupport: 'planning',
    aiWorkshops: 'open',
    cultural: 'soon',
  };

  const newsDates: Record<string, string> = {
    launch: '2026-01-15',
    volunteers: '2026-02-01',
    education: '2026-02-20',
    digital: '2026-03-10',
    partnership: '2026-04-05',
  };

  return (
    <div>
      <HeroSection />

      {/* Founding Stage Banner */}
      <section className="py-10 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FoundingStageBanner />
        </div>
      </section>

      {/* About Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">{t.common.foundingStage}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-5 leading-tight">
                {t.about.title}
              </h2>
              <div className="h-1 w-16 bg-gold rounded-full mb-6" />
              <p className="text-neutral-700 text-lg leading-relaxed mb-8">
                {t.about.intro}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-colors duration-200 shadow-md"
              >
                {t.common.learnMore}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary rounded-2xl p-6 text-white aspect-square flex flex-col justify-end">
                <div className="text-4xl mb-3">🌱</div>
                <p className="font-bold text-lg">{t.about.missionTitle}</p>
                <p className="text-white/70 text-sm mt-1">{t.about.missionDesc.slice(0, 60)}...</p>
              </div>
              <div className="bg-gold rounded-2xl p-6 text-primary aspect-square flex flex-col justify-end mt-6">
                <div className="text-4xl mb-3">🌟</div>
                <p className="font-bold text-lg">{t.about.visionTitle}</p>
                <p className="text-primary/80 text-sm mt-1">{t.about.visionDesc.slice(0, 60)}...</p>
              </div>
              <div className="bg-neutral-100 rounded-2xl p-6 aspect-square flex flex-col justify-end -mt-4">
                <div className="text-4xl mb-3">🤝</div>
                <p className="font-bold text-primary text-lg">{t.about.values.partnership}</p>
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 aspect-square flex flex-col justify-end">
                <div className="text-4xl mb-3">💡</div>
                <p className="font-bold text-primary text-lg">{t.about.values.innovation}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.programs.title} subtitle={t.programs.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {programEntries.map(([key, prog]) => (
              <ProgramCard
                key={key}
                icon={PROGRAM_ICONS[key] || '⭐'}
                title={prog.title}
                desc={prog.desc}
                slug={key}
              />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/fields"
              className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
            >
              {t.common.learnMore}
            </Link>
          </div>
        </div>
      </section>

      <VisionStats />

      {/* Initiatives Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.initiatives.title} subtitle={t.initiatives.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {initiativeEntries.map(([key, init], idx) => (
              <InitiativeCard
                key={key}
                id={key}
                title={init.title}
                desc={init.desc}
                target={init.target}
                status={statusMap[key] || 'planning'}
                category={init.category}
                gradient={GRADIENTS[idx % GRADIENTS.length]}
              />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/initiatives"
              className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
            >
              {t.common.learnMore}
            </Link>
          </div>
        </div>
      </section>

      <CTASection />

      {/* News Preview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.news.title} subtitle={t.news.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {newsEntries.map(([key, item], idx) => (
              <NewsCard
                key={key}
                id={key}
                title={item.title}
                summary={item.summary}
                date={newsDates[key] || '2026-01-01'}
                category={item.category}
                gradient={NEWS_GRADIENTS[idx % NEWS_GRADIENTS.length]}
              />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/news"
              className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
            >
              {t.common.readMore}
            </Link>
          </div>
        </div>
      </section>

      <PartnerLogos />

      <NewsletterSection />
    </div>
  );
}
