// Project Signature: alranin-community-development-association
import { CheckCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ValuesSection from '../components/sections/ValuesSection';
import FoundingStageBanner from '../components/ui/FoundingStageBanner';
import CTASection from '../components/ui/CTASection';
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">{t.common.foundingStage}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t.about.title}</h1>
          <p className="text-white/75 text-xl leading-relaxed">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Founding Banner */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FoundingStageBanner />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h2 className="text-2xl font-bold text-primary mb-5">{t.about.subtitle}</h2>
            <p className="text-neutral-700 text-lg leading-relaxed mb-8">{t.about.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`bg-neutral-50 rounded-2xl p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="text-4xl mb-4">❓</div>
              <h3 className="text-xl font-bold text-primary mb-4">{t.about.whyTitle}</h3>
              <p className="text-neutral-700 leading-relaxed">{t.about.whyDesc}</p>
            </div>
            <div className={`bg-neutral-50 rounded-2xl p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-primary mb-4">{t.about.storyTitle}</h3>
              <p className="text-neutral-700 leading-relaxed">{t.about.storyDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`bg-white/10 rounded-3xl p-8 border border-white/10 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-gold font-bold text-xl mb-4">{t.about.missionTitle}</h3>
              <p className="text-white/85 leading-relaxed">{t.about.missionDesc}</p>
            </div>
            <div className={`bg-white/10 rounded-3xl p-8 border border-white/10 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌅</span>
              </div>
              <h3 className="text-gold font-bold text-xl mb-4">{t.about.visionTitle}</h3>
              <p className="text-white/85 leading-relaxed">{t.about.visionDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />

      {/* First Phase Goals */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.about.goalsTitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.about.goals.map((goal, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 bg-white rounded-xl p-5 border border-neutral-100 shadow-sm ${isRTL ? 'flex-row-reverse text-right' : ''}`}
              >
                <CheckCircle size={22} className="text-gold flex-shrink-0 mt-0.5" />
                <p className="text-neutral-700 text-sm leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.about.audienceTitle} />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {t.about.audiences.map((aud, idx) => (
              <div
                key={idx}
                className="bg-primary/5 rounded-xl p-5 border border-primary/10 text-center hover:bg-primary/10 transition-colors duration-200"
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
