// Project Signature: alranin-community-development-association
import {
  BookOpen, Cpu, Users, Handshake, GraduationCap, Trophy, Palette, Network,
  type LucideIcon,
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ProgramCard from '../components/ui/ProgramCard';
import CTASection from '../components/ui/CTASection';
import { useLanguage } from '../context/LanguageContext';

const PROGRAM_META: Record<string, { Icon: LucideIcon; color: string; bg: string; accent: string }> = {
  education:    { Icon: BookOpen,       color: 'text-sky-600',     bg: 'bg-sky-50',     accent: 'bg-sky-600' },
  tech:         { Icon: Cpu,            color: 'text-violet-600',  bg: 'bg-violet-50',  accent: 'bg-violet-600' },
  youth:        { Icon: Users,          color: 'text-emerald-600', bg: 'bg-emerald-50', accent: 'bg-emerald-600' },
  volunteer:    { Icon: Handshake,      color: 'text-rose-600',    bg: 'bg-rose-50',    accent: 'bg-rose-600' },
  grants:       { Icon: GraduationCap,  color: 'text-amber-600',   bg: 'bg-amber-50',   accent: 'bg-amber-600' },
  leadership:   { Icon: Trophy,         color: 'text-orange-600',  bg: 'bg-orange-50',  accent: 'bg-orange-600' },
  cultural:     { Icon: Palette,        color: 'text-pink-600',    bg: 'bg-pink-50',    accent: 'bg-pink-600' },
  partnerships: { Icon: Network,        color: 'text-teal-600',    bg: 'bg-teal-50',    accent: 'bg-teal-600' },
};

const DEFAULT_META = { Icon: BookOpen, color: 'text-primary', bg: 'bg-primary-5', accent: 'bg-primary' };

export default function ProgramsPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-gold/10" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label">{t.common.foundingStage}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">{t.programs.title}</h1>
          <div className="h-[3px] w-14 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto mb-5" />
          <p className="text-white/70 text-xl leading-relaxed">{t.programs.subtitle}</p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.programs.title} subtitle={t.programs.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.entries(t.programs.items).map(([key, prog]) => {
              const meta = PROGRAM_META[key] || DEFAULT_META;
              return (
                <ProgramCard
                  key={key}
                  Icon={meta.Icon}
                  iconColor={meta.color}
                  iconBg={meta.bg}
                  title={prog.title}
                  desc={prog.desc}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="تفاصيل المجالات" />
          <div className="space-y-5">
            {Object.entries(t.programs.items).map(([key, prog], idx) => {
              const meta = PROGRAM_META[key] || DEFAULT_META;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={key}
                  className={`flex flex-col md:flex-row gap-0 bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-card hover:shadow-card-hover transition-all duration-300 ${!isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`w-full md:w-20 ${meta.accent} flex items-center justify-center p-6 flex-shrink-0`}>
                    <meta.Icon size={28} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div className={`p-7 flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold text-primary mb-2">{prog.title}</h3>
                    <p className="text-neutral-600 leading-relaxed text-sm">{prog.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
