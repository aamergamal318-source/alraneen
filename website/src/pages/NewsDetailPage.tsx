// Project Signature: alranin-community-development-association
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Tag, Share2 } from 'lucide-react';
import NewsCard from '../components/ui/NewsCard';
import { useLanguage } from '../context/LanguageContext';

const NEWS_DATES: Record<string, string> = {
  launch: '2026-01-15',
  volunteers: '2026-02-01',
  education: '2026-02-20',
  digital: '2026-03-10',
  partnership: '2026-04-05',
};

const NEWS_GRADIENTS = [
  'from-primary to-primary/80',
  'from-teal-700 to-teal-900',
  'from-emerald-700 to-emerald-900',
  'from-gold/80 to-gold-dark',
  'from-cyan-700 to-cyan-900',
];

const NEWS_CONTENT: Record<string, { ar: string; he: string; en: string }> = {
  launch: {
    ar: 'يسعدنا أن نُعلن عن إطلاق الموقع الإلكتروني الرسمي لجمعية الرنين للتطوير المجتمعي. يُمثّل هذا الموقع خطوتنا الأولى نحو بناء حضور رقمي موثوق يعكس هوية جمعيتنا وطموحاتها.\n\nنحن جمعية حديثة الإنشاء تعمل على وضع الأُسس لمبادرات تعليمية وتقنية وشبابية تخدم المجتمع. نسعى من خلال هذا الموقع إلى التواصل مع المتطوعين، الشركاء، والداعمين المحتملين الذين يشاركوننا الرؤية والطموح.\n\nندعو كل من يؤمن بقدرة المجتمع على التغيير إلى الانضمام إلينا في هذه الرحلة.',
    he: 'אנו שמחים להכריז על השקת האתר האינטרנטי הרשמי של עמותת אלרנין לפיתוח קהילתי. אתר זה מייצג את הצעד הראשון שלנו לעבר בניית נוכחות דיגיטלית אמינה המשקפת את זהות העמותה ושאיפותיה.\n\nאנו עמותה חדשה הפועלת להנחת יסודות ליוזמות חינוכיות, טכנולוגיות וקהילתיות שישרתו את הקהילה. אנו שואפים דרך אתר זה להתחבר למתנדבים, שותפים ותומכים פוטנציאליים החולקים את החזון שלנו.\n\nאנו מזמינים את כל מי שמאמין בכוחה של הקהילה לשינוי להצטרף אלינו במסע זה.',
    en: 'We are pleased to announce the launch of the official website of Al Ranin Association for Community Development. This website represents our first step toward building a trusted digital presence that reflects our association\'s identity and ambitions.\n\nWe are a newly established association working to lay the foundations for educational, technological, and youth-focused initiatives that serve the community. Through this website, we seek to connect with potential volunteers, partners, and supporters who share our vision and ambition.\n\nWe invite everyone who believes in the community\'s capacity for change to join us on this journey.',
  },
  volunteers: {
    ar: 'نحن في جمعية الرنين للتطوير المجتمعي نؤمن أن أقوى قوة لدينا هي أشخاص مثلك، الذين يؤمنون بالتغيير ويسعون إلى إحداثه.\n\nنفتح اليوم باب الانضمام إلى قائمة المتطوعين الأوائل في جمعيتنا. المتطوعون الأوائل هم شركاؤنا الأساسيون في بناء أولى مبادراتنا وتشكيل هويتنا الفعلية كجمعية.\n\nسواء كنت معلمًا، مصممًا، مبرمجًا، مصورًا، أو مهتمًا بالعمل الاجتماعي، لديك مكان في عائلة الرنين.\n\nسجّل الآن واكن جزءًا من القصة من أولها.',
    he: 'אנו בעמותת אלרנין מאמינים שהכוח החזק ביותר שלנו הוא אנשים כמוך, המאמינים בשינוי ושואפים לייצר אותו.\n\nאנו פותחים היום את הדלת להצטרפות לרשימת המתנדבים הראשונים בעמותתנו. המתנדבים הראשונים הם השותפים המרכזיים שלנו בבניית היוזמות הראשונות ועיצוב זהותנו האמיתית כעמותה.\n\nבין אם אתה מורה, מעצב, מתכנת, צלם, או מעוניין בעבודה חברתית, יש לך מקום במשפחת אלרנין.\n\nהירשם עכשיו והיה חלק מהסיפור מהתחלה.',
    en: 'We at Al Ranin Association believe that our most powerful force is people like you, who believe in change and strive to create it.\n\nWe are now opening the door to join the list of early volunteers at our association. Early volunteers are our key partners in building our first initiatives and shaping our actual identity as an association.\n\nWhether you are a teacher, designer, programmer, photographer, or interested in social work, you have a place in the Al Ranin family.\n\nRegister now and be part of the story from its very beginning.',
  },
};

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t, lang, isRTL } = useLanguage();
  const ArrowBack = isRTL ? ArrowRight : ArrowLeft;

  const newsItem = id ? t.news.items[id as keyof typeof t.news.items] : null;
  const date = id ? (NEWS_DATES[id] || '2026-01-01') : '2026-01-01';
  const content = id ? (NEWS_CONTENT[id]?.[lang] || NEWS_CONTENT[id]?.en || newsItem?.summary || '') : '';

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-neutral-500 text-lg mb-4">News item not found</p>
          <Link to="/news" className="text-gold font-semibold hover:underline">
            {lang === 'ar' ? 'العودة إلى الأخبار' : lang === 'he' ? 'חזרה לחדשות' : 'Back to News'}
          </Link>
        </div>
      </div>
    );
  }

  const relatedEntries = Object.entries(t.news.items)
    .filter(([key]) => key !== id)
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            to="/news"
            className={`inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <ArrowBack size={18} />
            <span className="text-sm">{t.news.title}</span>
          </Link>
          <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full">{newsItem.category}</span>
            <span className="text-white/40 text-sm">{t.common.demo}</span>
          </div>
          <h1 className={`text-3xl md:text-4xl font-extrabold text-white leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
            {newsItem.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center gap-4 mb-8 text-sm text-neutral-500 flex-wrap ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
            <span className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Calendar size={14} />
              <time>{date}</time>
            </span>
            <span className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Tag size={14} />
              <span>{newsItem.category}</span>
            </span>
          </div>

          <div className={`bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-neutral-100 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            {content.split('\n\n').map((para, idx) => (
              <p key={idx} className="text-neutral-700 leading-relaxed text-base mb-6 last:mb-0">
                {para}
              </p>
            ))}
          </div>

          {/* Share */}
          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
            <span className="text-sm text-neutral-500 flex items-center gap-2">
              <Share2 size={16} />
              {lang === 'ar' ? 'مشاركة' : lang === 'he' ? 'שתף' : 'Share'}
            </span>
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedEntries.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-2xl font-bold text-primary mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              {lang === 'ar' ? 'أخبار ذات صلة' : lang === 'he' ? 'חדשות קשורות' : 'Related News'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedEntries.map(([key, item], idx) => (
                <NewsCard
                  key={key}
                  id={key}
                  title={item.title}
                  summary={item.summary}
                  date={NEWS_DATES[key] || '2026-01-01'}
                  category={item.category}
                  gradient={NEWS_GRADIENTS[idx % NEWS_GRADIENTS.length]}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
