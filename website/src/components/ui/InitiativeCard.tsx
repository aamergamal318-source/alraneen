// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import { Users, Tag, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface InitiativeCardProps {
  id: string;
  title: string;
  desc: string;
  target: string;
  status: 'planning' | 'soon' | 'open' | 'seeking';
  category: string;
  gradient?: string;
}

const STATUS_COLORS = {
  planning: 'bg-blue-100 text-blue-700',
  soon: 'bg-green-100 text-green-700',
  open: 'bg-gold/15 text-gold-dark',
  seeking: 'bg-purple-100 text-purple-700',
};

const STATUS_DOTS = {
  planning: 'bg-blue-500',
  soon: 'bg-green-500',
  open: 'bg-gold',
  seeking: 'bg-purple-500',
};

const GRADIENTS = [
  'from-primary/80 to-primary',
  'from-gold/70 to-gold-dark',
  'from-teal-600 to-teal-800',
  'from-emerald-600 to-emerald-800',
  'from-cyan-600 to-cyan-800',
  'from-indigo-600 to-indigo-800',
  'from-primary/60 to-primary/90',
];

export default function InitiativeCard({ id, title, desc, target, status, category, gradient }: InitiativeCardProps) {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const statusLabel = t.initiatives.statuses[status];
  const gradClass = gradient || GRADIENTS[0];

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-neutral-100 transition-all duration-300 hover:-translate-y-1 flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className={`h-40 bg-gradient-to-br ${gradClass} flex items-end p-5`}>
        <span className="text-white/80 text-xs font-medium bg-white/10 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className={`flex items-center gap-2 mb-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${STATUS_COLORS[status]}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOTS[status]}`} />
            {statusLabel}
          </span>
        </div>
        <h3 className="text-primary font-bold text-lg mb-2">{title}</h3>
        <p className="text-neutral-600 text-sm leading-relaxed flex-1 mb-4">{desc}</p>
        <div className="space-y-2 mb-4 border-t border-neutral-100 pt-4">
          <div className={`flex items-center gap-2 text-xs text-neutral-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Users size={13} />
            <span>{target}</span>
          </div>
          <div className={`flex items-center gap-2 text-xs text-neutral-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Tag size={13} />
            <span>{category}</span>
          </div>
          <div className={`flex items-center gap-2 text-xs text-neutral-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Clock size={13} />
            <span>{statusLabel}</span>
          </div>
        </div>
        <Link
          to={`/initiatives/${id}`}
          className={`inline-flex items-center gap-2 text-gold font-semibold text-sm hover:text-gold-dark transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          {t.initiatives.details}
          <Arrow size={16} />
        </Link>
      </div>
    </div>
  );
}
