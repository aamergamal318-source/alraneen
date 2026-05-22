// Project Signature: alranin-community-development-association
import { CheckCircle, Target, Lightbulb, HelpCircle, BookOpen } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ValuesSection from '../components/sections/ValuesSection';
import FoundingStageBanner from '../components/ui/FoundingStageBanner';
import CTASection from '../components/ui/CTASection';
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-primary py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full border border-gold/10" />
          <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label">{t.common.foundingStage}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">{t.about.title}</h1>
          <div className="h-[3px] w-14 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto mb-5" />
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Founding Banner */}
      <section className="py-10 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FoundingStageBanner />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className="text-2xl font-bold text-primary mb-4">{t.about.subtitle}</h2>
            <div className="gold-divider mb-5" />
            <p className="text-neutral-600 text-lg leading-loose">{t.about.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`bg-neutral-50 border border-neutral-100 rounded-2xl p-8 hover:shadow-card transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center mb-5">
                <HelpCircle size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{t.about.whyTitle}</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">{t.about.whyDesc}</p>
            </div>
            <div className={`bg-neutral-50 border border-neutral-100 rounded-2xl p-8 hover:shadow-card transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                <BookOpen size={22} className="text-gold-dark" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{t.about.storyTitle}</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">{t.about.storyDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full border border-gold/8" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`bg-white/8 backdrop-blur-sm rounded-3xl p-8 border border-white/12 hover:bg-white/12 transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center mb-6">
                <Target size={24} className="text-gold" />
              </div>
              <h3 className="text-gold font-bold text-xl mb-4">{t.about.missionTitle}</h3>
              <p className="text-white/80 leading-relaxed">{t.about.missionDesc}</p>
            </div>
            <div className={`bg-white/8 backdrop-blur-sm rounded-3xl p-8 border border-white/12 hover:bg-white/12 transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb size={24} className="text-gold" />
              </div>
              <h3 className="text-gold font-bold text-xl mb-4">{t.about.visionTitle}</h3>
              <p className="text-white/80 leading-relaxed">{t.about.visionDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />

      {/* First Phase Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.about.goalsTitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.about.goals.map((goal, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 bg-neutral-50 border border-neutral-100 rounded-xl p-5 hover:shadow-card hover:border-gold/20 transition-all duration-200 ${isRTL ? 'flex-row-reverse text-right' : ''}`}
              >
                <CheckCircle size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <p className="text-neutral-700 text-sm leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.about.audienceTitle} />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {t.about.audiences.map((aud, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-100 rounded-xl p-5 text-center hover:border-gold/30 hover:shadow-card transition-all duration-200"
              >
                <p className="text-primary font-semibold text-sm">{aud}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
