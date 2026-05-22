// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowLeft, ArrowRight, HeartHandshake, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function HeroSection() {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const logoSrc = `${import.meta.env.BASE_URL}brand/alraneen-logo.png`;

  return (
    <section className="relative min-h-[100svh] bg-hero-gradient flex items-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-28 -right-24 h-72 w-72 rounded-full border border-gold/15 sm:h-[460px] sm:w-[460px]" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-white/10 sm:h-[520px] sm:w-[520px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #c8912c 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary-dark/45 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pt-32 sm:pb-20 w-full">
        <div className={`grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.75fr)] gap-10 lg:gap-14 items-center ${isRTL ? '' : 'lg:[direction:rtl]'}`}>
          <div className={`${isRTL ? 'text-right' : 'text-left lg:[direction:ltr]'} order-2 lg:order-1`}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-gold-100 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm">
              <Sparkles size={15} className="text-gold-light" />
              {t.hero.badge}
            </div>

            <h1 className="text-[2.45rem] sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.18] mb-5 max-w-3xl">
              {t.hero.subtitle}
            </h1>

            <div className={`flex items-center gap-3 mb-6 ${isRTL ? '' : 'flex-row-reverse justify-end lg:justify-start'}`}>
              <span className="h-[2px] w-11 bg-gold rounded-full flex-shrink-0" />
              <p className="text-gold-100 text-xl sm:text-2xl font-bold leading-relaxed">
                {t.hero.tagline}
              </p>
            </div>

            <p className="text-white/78 text-base sm:text-lg leading-loose mb-8 max-w-2xl">
              {t.hero.desc}
            </p>

            <div className={`grid grid-cols-1 sm:flex gap-3 sm:gap-4 ${isRTL ? 'sm:justify-start' : 'sm:justify-start'}`}>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-white font-bold text-base rounded-full hover:bg-gold-light transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5"
              >
                {t.hero.ctaLearn}
                <ArrowIcon size={17} />
              </Link>
              <Link
                to="/volunteer"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-primary font-bold text-base rounded-full hover:bg-primary-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                {t.hero.ctaVolunteer}
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-gold/55 text-gold-100 font-bold text-base rounded-full hover:bg-gold/10 hover:-translate-y-0.5 transition-all duration-200"
              >
                {t.hero.ctaSupport}
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:[direction:ltr]">
            <div className="relative mx-auto w-full max-w-[310px] sm:max-w-[390px] lg:max-w-[430px]">
              <div className="absolute inset-6 rounded-full bg-gold/18 blur-3xl" />
              <div className="relative rounded-[2rem] bg-white/96 p-4 sm:p-5 shadow-2xl shadow-primary-dark/30 ring-1 ring-white/70">
                <img
                  src={logoSrc}
                  alt="Al Ranin logo"
                  className="aspect-square w-full rounded-[1.45rem] object-contain bg-white"
                />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 mx-auto flex max-w-[260px] items-center justify-center gap-2 rounded-full bg-primary-dark/90 px-4 py-3 text-white shadow-xl ring-1 ring-white/10 backdrop-blur-sm">
                <HeartHandshake size={18} className="text-gold-light flex-shrink-0" />
                <span className="text-sm font-bold truncate">{t.common.foundingStage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce text-white/45 hover:text-white/70 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={30} />
      </button>
    </section>
  );
}
