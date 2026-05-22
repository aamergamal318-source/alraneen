// Project Signature: alranin-community-development-association
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Users, Tag, Clock, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const STATUS_MAP: Record<string, 'planning' | 'soon' | 'open' | 'seeking'> = {
  scholarships: 'seeking',
  leaders: 'planning',
  techlab: 'open',
  volunteerDays: 'soon',
  schoolSupport: 'planning',
  aiWorkshops: 'open',
  cultural: 'soon',
};

const GRADIENTS: Record<string, string> = {
  scholarships: 'from-primary/80 to-primary',
  leaders: 'from-gold/70 to-gold-dark',
  techlab: 'from-teal-600 to-teal-800',
  volunteerDays: 'from-emerald-600 to-emerald-800',
  schoolSupport: 'from-cyan-700 to-cyan-900',
  aiWorkshops: 'from-indigo-600 to-indigo-800',
  cultural: 'from-primary/60 to-primary/90',
};

const PHASES: Record<string, { ar: string; he: string; en: string }> = {
  scholarships: { ar: 'قيد التخطيط', he: 'בתכנון', en: 'In Planning' },
  leaders: { ar: 'فكرة أولية', he: 'רעיון ראשוני', en: 'Initial Idea' },
  techlab: { ar: 'نبحث عن شركاء', he: 'מחפשים שותפים', en: 'Seeking Partners' },
  volunteerDays: { ar: 'نبحث عن متطوعين', he: 'מחפשים מתנדבים', en: 'Seeking Volunteers' },
  schoolSupport: { ar: 'فكرة أولية', he: 'רעיון ראשוני', en: 'Initial Idea' },
  aiWorkshops: { ar: 'نبحث عن شركاء', he: 'מחפשים שותפים', en: 'Seeking Partners' },
  cultural: { ar: 'قيد التخطيط', he: 'בתכנון', en: 'In Planning' },
};

export default function InitiativeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t, lang, isRTL } = useLanguage();
  const ArrowBack = isRTL ? ArrowRight : ArrowLeft;

  const initiative = id ? t.initiatives.items[id as keyof typeof t.initiatives.items] : null;
  const status = id ? (STATUS_MAP[id] || 'planning') : 'planning';
  const gradient = id ? (GRADIENTS[id] || 'from-primary to-primary/80') : 'from-primary to-primary/80';
  const phase = id ? (PHASES[id]?.[lang] || PHASES[id]?.en || '') : '';

  if (!initiative) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-neutral-500 text-lg mb-4">Initiative not found</p>
          <Link to="/initiatives" className="text-gold font-semibold hover:underline">
            {isRTL ? 'العودة إلى المبادرات' : 'Back to Initiatives'}
          </Link>
        </div>
      </div>
    );
  }

  const statusLabel = t.initiatives.statuses[status];

  return (
    <div>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${gradient} py-32 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            to="/initiatives"
            className={`inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <ArrowBack size={18} />
            <span className="text-sm">{t.initiatives.title}</span>
          </Link>
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            {initiative.category}
          </span>
          <h1 className={`text-4xl md:text-5xl font-extrabold text-white mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            {initiative.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2 space-y-6">
              <div className={`bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h2 className="text-xl font-bold text-primary mb-4">
                  {lang === 'ar' ? 'عن المبادرة' : lang === 'he' ? 'אודות היוזמה' : 'About the Initiative'}
                </h2>
                <p className="text-neutral-700 leading-relaxed">{initiative.desc}</p>
              </div>

              <div className={`bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h2 className="text-xl font-bold text-primary mb-4">
                  {lang === 'ar' ? 'طرق المشاركة' : lang === 'he' ? 'דרכי השתתפות' : 'Ways to Participate'}
                </h2>
                <ul className="space-y-3">
                  {[
                    lang === 'ar' ? 'التطوع في تنظيم وتنفيذ المبادرة' : lang === 'he' ? 'התנדבות בארגון וביצוע היוזמה' : 'Volunteer to help organize and execute the initiative',
                    lang === 'ar' ? 'الدعم المالي أو العيني' : lang === 'he' ? 'תמיכה כספית או עינית' : 'Financial or in-kind support',
                    lang === 'ar' ? 'الشراكة المؤسسية' : lang === 'he' ? 'שיתוף פעולה מוסדי' : 'Institutional partnership',
                    lang === 'ar' ? 'نشر المبادرة والتوعية بها' : lang === 'he' ? 'הפצת היוזמה והגברת המודעות' : 'Spread awareness about the initiative',
                  ].map((item, i) => (
                    <li key={i} className={`flex items-center gap-3 text-neutral-700 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className={`bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="font-bold text-primary mb-4 text-base">
                  {lang === 'ar' ? 'تفاصيل سريعة' : lang === 'he' ? 'פרטים מהירים' : 'Quick Details'}
                </h3>
                <ul className="space-y-4">
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Users size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-neutral-400 font-medium mb-0.5">
                        {lang === 'ar' ? 'الفئة المستهدفة' : lang === 'he' ? 'קהל יעד' : 'Target Audience'}
                      </p>
                      <p className="text-sm text-neutral-700">{initiative.target}</p>
                    </div>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Tag size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-neutral-400 font-medium mb-0.5">
                        {lang === 'ar' ? 'التصنيف' : lang === 'he' ? 'קטגוריה' : 'Category'}
                      </p>
                      <p className="text-sm text-neutral-700">{initiative.category}</p>
                    </div>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Clock size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-neutral-400 font-medium mb-0.5">
                        {lang === 'ar' ? 'الحالة' : lang === 'he' ? 'סטטוס' : 'Status'}
                      </p>
                      <p className="text-sm text-neutral-700">{statusLabel}</p>
                    </div>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Target size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-neutral-400 font-medium mb-0.5">
                        {lang === 'ar' ? 'المرحلة الحالية' : lang === 'he' ? 'שלב נוכחי' : 'Current Phase'}
                      </p>
                      <p className="text-sm text-neutral-700">{phase}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="block w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors duration-200 text-center text-sm shadow-md"
              >
                {t.common.contactUs}
              </Link>
              <Link
                to="/volunteer"
                className="block w-full py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors duration-200 text-center text-sm"
              >
                {t.common.joinUs}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
