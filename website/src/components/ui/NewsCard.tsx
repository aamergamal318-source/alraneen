// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface NewsCardProps {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  gradient?: string;
}

const GRADIENTS = [
  'from-primary to-primary/80',
  'from-teal-700 to-teal-900',
  'from-emerald-700 to-emerald-900',
  'from-cyan-700 to-cyan-900',
  'from-gold/80 to-gold-dark',
];

export default function NewsCard({ id, title, summary, date, category, gradient }: NewsCardProps) {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const gradClass = gradient || GRADIENTS[0];

  return (
    <article className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-neutral-100 transition-all duration-300 hover:-translate-y-1 flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className={`h-44 bg-gradient-to-br ${gradClass} relative flex items-end p-5`}>
        <span className="text-white text-xs font-medium bg-white/20 px-3 py-1 rounded-full">
          {category}
        </span>
        <span className="absolute top-4 end-4 bg-white/10 text-white text-xs px-2 py-0.5 rounded">
          {t.common.demo}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className={`flex items-center gap-3 mb-3 text-xs text-neutral-500 flex-wrap ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
          <span className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Calendar size={12} />
            <time>{date}</time>
          </span>
          <span className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Tag size={12} />
            <span>{category}</span>
          </span>
        </div>
        <h3 className="text-primary font-bold text-base leading-snug mb-3">{title}</h3>
        <p className="text-neutral-600 text-sm leading-relaxed flex-1 mb-4">{summary}</p>
        <Link
          to={`/news/${id}`}
          className={`inline-flex items-center gap-2 text-gold font-semibold text-sm hover:text-gold-dark transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          {t.news.readMore}
          <Arrow size={16} />
        </Link>
      </div>
    </article>
  );
}
