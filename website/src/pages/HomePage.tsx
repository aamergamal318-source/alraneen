// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import {
  BookOpen, Cpu, Users, Handshake, GraduationCap, Trophy, Palette, Network,
  Target, Lightbulb, ArrowLeft, ArrowRight, CheckCircle,
} from 'lucide-react';
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
import { type LucideIcon } from 'lucide-react';

const PROGRAM_ICONS: Record<string, { Icon: LucideIcon; color: string; bg: string }> = {
  education:    { Icon: BookOpen,      color: 'text-sky-600',     bg: 'bg-sky-50' },
  tech:         { Icon: Cpu,           color: 'text-violet-600',  bg: 'bg-violet-50' },
  youth:        { Icon: Users,         color: 'text-emerald-600', bg: 'bg-emerald-50' },
  volunteer:    { Icon: Handshake,     color: 'text-rose-600',    bg: 'bg-rose-50' },
  grants:       { Icon: GraduationCap, color: 'text-amber-600',   bg: 'bg-amber-50' },
  leadership:   { Icon: Trophy,        color: 'text-orange-600',  bg: 'bg-orange-50' },
  cultural:     { Icon: Palette,       color: 'text-pink-600',    bg: 'bg-pink-50' },
  partnerships: { Icon: Network,       color: 'text-teal-600',    bg: 'bg-teal-50' },
};

const GRADIENTS = [
  'from-primary/80 to-primary',
  'from-gold/70 to-gold-dark',
  'from-teal-600 to-teal-800',
  'from-emerald-600 to-emerald-800',
  'from-primary to-primary/80',
];

const NEWS_GRADIENTS = [
  'from-primary to-primary-light',
  'from-teal-700 to-teal-900',
  'from-emerald-700 to-emerald-900',
  'from-gold-dark to-gold',
  'from-cyan-700 to-cyan-900',
];

export default function HomePage() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const programEntries = Object.entries(t.programs.items).slice(0, 4);
  const initiativeEntries = Object.entries(t.initiatives.items).slice(0, 3);
  const newsEntries = Object.entries(t.news.items).slice(0, 3);

  const statusMap: Record<string, 'planning' | 'soon' | 'open' | 'seeking'> = {
    scholarships: 'seeking', leaders: 'planning', techlab: 'open',
    volunteerDays: 'soon', schoolSupport: 'planning', aiWorkshops: 'open', cultural: 'soon',
  };

  const newsDates: Record<string, string> = {
    launch: '2026-01-15', volunteers: '2026-02-01', education: '2026-02-20',
    digital: '2026-03-10', partnership: '2026-04-05',
  };

  return (
    <div>
      <HeroSection />

      {/* Founding Stage Banner */}
      <section className="py-8 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FoundingStageBanner />
        </div>
      </section>

      {/* About Intro — Bento Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center`}>

            {/* Text side */}
            <div className={isRTL ? 'text-right order-1' : 'text-left order-1'}>
              <p className="section-label">{t.common.foundingStage}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 leading-tight">
                {t.about.title}
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-neutral-600 text-lg leading-loose mb-8">
                {t.about.intro}
              </p>
              {/* Mission & Vision mini cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className={`bg-primary/5 border border-primary/10 rounded-2xl p-5 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Target size={18} className="text-primary" />
                  </div>
                  <p className="font-bold text-primary text-sm mb-1">{t.about.missionTitle}</p>
                  <p className="text-neutral-500 text-xs leading-relaxed line-clamp-3">{t.about.missionDesc}</p>
                </div>
                <div className={`bg-gold/8 border border-gold/15 rounded-2xl p-5 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="w-9 h-9 bg-gold/15 rounded-xl flex items-center justify-center mb-3">
                    <Lightbulb size={18} className="text-gold-dark" />
                  </div>
                  <p className="font-bold text-primary text-sm mb-1">{t.about.visionTitle}</p>
                  <p className="text-neutral-500 text-xs leading-relaxed line-clamp-3">{t.about.visionDesc}</p>
                </div>
              </div>
              <Link
                to="/about"
                className={`inline-flex items-center gap-2 btn-primary`}
              >
                {t.common.learnMore}
                <Arrow size={16} />
              </Link>
            </div>

            {/* Visual grid side */}
            <div className="grid grid-cols-2 gap-4 order-2">
              <div className="bg-primary rounded-2xl p-6 text-white flex flex-col justify-between min-h-[160px] shadow-primary">
                <CheckCircle size={28} className="text-gold mb-4" />
                <div>
                  <p className="font-bold text-base">{t.about.values.responsibility}</p>
                  <p className="text-white/55 text-xs mt-1">{t.about.valueDescs.responsibility.slice(0, 55)}...</p>
                </div>
              </div>
              <div className="bg-gold rounded-2xl p-6 flex flex-col justify-between min-h-[160px] shadow-gold mt-8">
                <GraduationCap size={28} className="text-white mb-4" />
                <div>
                  <p className="font-bold text-white text-base">{t.about.values.empowerment}</p>
                  <p className="text-white/65 text-xs mt-1">{t.about.valueDescs.empowerment.slice(0, 55)}...</p>
                </div>
              </div>
              <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-6 flex flex-col justify-between min-h-[140px] -mt-5">
                <Handshake size={26} className="text-teal mb-3" />
                <p className="font-bold text-primary text-base">{t.about.values.partnership}</p>
              </div>
              <div className="bg-primary/8 rounded-2xl p-6 flex flex-col justify-between min-h-[140px]">
                <Lightbulb size={26} className="text-gold-dark mb-3" />
                <p className="font-bold text-primary text-base">{t.about.values.innovation}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.programs.title} subtitle={t.programs.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {programEntries.map(([key, prog]) => {
              const meta = PROGRAM_ICONS[key] || { Icon: BookOpen, color: 'text-primary', bg: 'bg-primary-5' };
              return (
                <ProgramCard
                  key={key}
                  Icon={meta.Icon}
                  iconColor={meta.color}
                  iconBg={meta.bg}
                  title={prog.title}
                  desc={prog.desc}
                  slug={key}
                />
              );
            })}
          </div>
          <div className="text-center">
            <Link to="/fields" className="inline-flex items-center gap-2 btn-outline">
              {t.common.learnMore}
              <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      <VisionStats />

      {/* Initiatives Preview */}
      <section className="py-24 bg-white">
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
            <Link to="/initiatives" className="inline-flex items-center gap-2 btn-outline">
              {t.common.learnMore}
              <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />

      {/* News Preview */}
      <section className="py-24 bg-neutral-50">
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
            <Link to="/news" className="inline-flex items-center gap-2 btn-outline">
              {t.common.readMore}
              <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      <PartnerLogos />
      <ValuesSection />
      <NewsletterSection />
    </div>
  );
}
