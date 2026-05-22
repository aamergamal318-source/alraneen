// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function HeroSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative min-h-screen bg-primary flex items-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 start-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 end-10 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/2 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, #dca05b 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className={`max-w-4xl ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            {t.hero.badge}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            {t.hero.subtitle}
          </h1>

          {/* Tagline */}
          <p className="text-gold text-xl sm:text-2xl font-semibold mb-6 leading-relaxed">
            {t.hero.tagline}
          </p>

          {/* Description */}
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-2xl">
            {t.hero.desc}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end sm:justify-start' : ''}`}>
            <Link
              to="/about"
              className="px-8 py-4 bg-gold text-primary font-bold text-base rounded-full hover:bg-gold-light transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {t.hero.ctaLearn}
            </Link>
            <Link
              to="/volunteer"
              className="px-8 py-4 bg-white/10 text-white font-bold text-base rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              {t.hero.ctaVolunteer}
            </Link>
            <Link
              to="/support"
              className="px-8 py-4 border border-gold/40 text-gold font-bold text-base rounded-full hover:bg-gold/10 transition-all duration-200"
            >
              {t.hero.ctaSupport}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={28} className="text-white/40" />
      </div>
    </section>
  );
}
