// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const copy = {
  ar: {
    eyebrow: 'الصفحة غير موجودة',
    title: 'يبدو أن هذا الرنين وصل إلى مكان غير صحيح',
    desc: 'الرابط الذي تحاول فتحه غير متاح أو تم نقله. يمكنك العودة للرئيسية أو التواصل معنا.',
    home: 'العودة للرئيسية',
    contact: 'تواصل معنا',
  },
  he: {
    eyebrow: 'העמוד לא נמצא',
    title: 'נראה שהצלצול הזה הגיע למקום לא נכון',
    desc: 'הקישור שניסית לפתוח אינו זמין או הועבר. אפשר לחזור לדף הבית או ליצור קשר.',
    home: 'חזרה לדף הבית',
    contact: 'צרו קשר',
  },
  en: {
    eyebrow: 'Page not found',
    title: 'This ripple seems to have reached the wrong place',
    desc: 'The link you opened is unavailable or has moved. You can return home or contact us.',
    home: 'Return home',
    contact: 'Contact us',
  },
};

export default function NotFoundPage() {
  const { lang, isRTL } = useLanguage();
  const text = copy[lang];
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const logoSrc = `${import.meta.env.BASE_URL}brand/alraneen-logo.png`;

  return (
    <section className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full border border-gold/15 sm:h-[460px] sm:w-[460px]" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full border border-white/10 sm:h-[520px] sm:w-[520px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #c8912c 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] gap-10 lg:gap-14 items-center">
          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[390px]">
            <div className="not-found-ring not-found-ring-one" />
            <div className="not-found-ring not-found-ring-two" />
            <div className="not-found-ring not-found-ring-three" />
            <div className="relative rounded-[2rem] bg-white p-5 shadow-2xl shadow-primary-dark/30 ring-1 ring-gold/25">
              <img
                src={logoSrc}
                alt="Al Ranin logo"
                className="aspect-square w-full rounded-[1.45rem] object-contain bg-white"
              />
            </div>
          </div>

          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <p className="inline-flex items-center rounded-full border border-gold/35 bg-gold/15 px-4 py-2 text-sm font-bold text-gold-100 mb-6">
              {text.eyebrow}
            </p>

            <div className="text-[7rem] sm:text-[9rem] lg:text-[11rem] leading-none font-black text-white/10 mb-2 select-none">
              404
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5 max-w-3xl">
              {text.title}
            </h1>

            <p className="text-white/75 text-base sm:text-lg leading-loose mb-8 max-w-2xl">
              {text.desc}
            </p>

            <div className="grid grid-cols-1 sm:flex gap-3 sm:gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-white font-bold text-base rounded-full hover:bg-gold-light transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5"
              >
                <Home size={17} />
                {text.home}
                <ArrowIcon size={17} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-primary font-bold text-base rounded-full hover:bg-primary-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail size={17} />
                {text.contact}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
