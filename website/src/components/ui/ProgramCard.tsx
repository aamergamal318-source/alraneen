// Project Signature: alranin-community-development-association
import { type LucideIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ProgramCardProps {
  Icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  title: string;
  desc: string;
  slug?: string;
  onClick?: () => void;
}

export default function ProgramCard({ Icon, iconColor = 'text-primary', iconBg = 'bg-primary-8', title, desc, onClick }: ProgramCardProps) {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-neutral-100 transition-all duration-300 hover:-translate-y-1 group flex flex-col cursor-default ${isRTL ? 'text-right' : 'text-left'}`}
      onClick={onClick}
    >
      <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
        <Icon size={21} className={iconColor} strokeWidth={1.8} />
      </div>
      <h3 className="text-primary font-bold text-base mb-2 leading-snug">{title}</h3>
      <p className="text-neutral-500 text-sm leading-relaxed flex-1">{desc}</p>
      {onClick && (
        <button
          className={`mt-5 inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:text-gold-dark transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          {t.programs.learnMore}
          <Arrow size={15} />
        </button>
      )}
    </div>
  );
}
