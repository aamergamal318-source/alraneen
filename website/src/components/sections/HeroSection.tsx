// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function HeroSection() {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen bg-primary flex items-center overflow-hidden" aria-label="Hero">
      {/* Ripple circles — visual identity */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-8%] right-[-5%] w-[520px] h-[520px] opacity-[0.07]">
          <div className="absolute inset-0 rounded-full border-2 border-gold animate-ripple" />
          <div className="absolute inset-0 rounded-full border-2 border-gold animate-ripple-slow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute inset-0 rounded-full border border-gold animate-ripple-slower" style={{ animationDelay: '3s' }} />
        </div>
        <div className="absolute top-[-10%] left-[-8%] w-[400px] h-[400px] opacity-[0.05]">
          <div className="absolute inset-0 rounded-full border border-gold animate-ripple-slow" />
          <div className="absolute inset-0 rounded-full border border-gold animate-ripple-slower" style={{ animationDelay: '2s' }} />
        </div>

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #c9912d 1px, transparent 1px)`,
            backgroundSize: '38px 38px',
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/60 via-transparent to-primary-light/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-gold/15 border border-gold/35 text-gold-light px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in`}
            style={{ direction: 'rtl' }}
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse-slow" />
            {t.hero.badge}
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] mb-5 animate-slide-up"
            style={{ animationDelay: '100ms' }}
          >
            {t.hero.subtitle}
          </h1>

          {/* Tagline with gold accent */}
          <div
            className="flex items-center gap-3 mb-6 animate-slide-up"
            style={{ animationDelay: '200ms', flexDirection: isRTL ? 'row' : 'row-reverse', justifyContent: isRTL ? 'flex-start' : 'flex-start' }}
          >
            <span className="h-[2px] w-10 bg-gold rounded-full flex-shrink-0" />
            <p className="text-gold text-xl sm:text-2xl font-bold leading-relaxed">
              {t.hero.tagline}
            </p>
          </div>

          {/* Description */}
          <p
            className="text-white/70 text-lg leading-loose mb-10 max-w-2xl animate-slide-up"
            style={{ animationDelay: '300ms' }}
          >
            {t.hero.desc}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 animate-slide-up`}
            style={{ animationDelay: '400ms', justifyContent: isRTL ? 'flex-start' : 'flex-start' }}
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-white font-bold text-base rounded-full hover:bg-gold-light transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5"
            >
              {t.hero.ctaLearn}
              <ArrowIcon size={17} />
            </Link>
            <Link
              to="/volunteer"
              className="px-7 py-3.5 bg-white/10 text-white font-bold text-base rounded-full border border-white/25 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
            >
              {t.hero.ctaVolunteer}
            </Link>
            <Link
              to="/support"
              className="px-7 py-3.5 border border-gold/40 text-gold font-bold text-base rounded-full hover:bg-gold/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              {t.hero.ctaSupport}
            </Link>
          </div>

          {/* Quick stats row */}
          <div
            className={`flex flex-wrap gap-6 mt-14 pt-10 border-t border-white/10 animate-fade-in`}
            style={{ animationDelay: '600ms' }}
          >
            {[
              { num: '٨', label: isRTL ? (t.nav.home === 'Home' ? 'Work Fields' : t.nav.home === 'דף הבית' ? 'תחומי עבודה' : 'مجالات عمل') : 'Work Fields' },
              { num: '٧+', label: isRTL ? (t.nav.home === 'Home' ? 'Initiatives' : t.nav.home === 'דף הבית' ? 'יוזמות' : 'مبادرات') : 'Initiatives' },
              { num: '∞', label: isRTL ? (t.nav.home === 'Home' ? 'Open to Join' : t.nav.home === 'דף הבית' ? 'פתוח להצטרפות' : 'باب مفتوح') : 'Open to Join' },
            ].map((s) => (
              <div key={s.label} className={isRTL ? 'text-right' : 'text-left'}>
                <p className="text-gold text-2xl font-extrabold leading-none">{s.num}</p>
                <p className="text-white/50 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30 hover:text-white/60 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={30} />
      </button>
    </section>
  );
}
