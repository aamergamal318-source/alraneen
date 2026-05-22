// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ProgramCardProps {
  icon: string;
  title: string;
  desc: string;
  slug?: string;
}

export default function ProgramCard({ icon, title, desc, slug }: ProgramCardProps) {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-neutral-100 transition-all duration-300 hover:-translate-y-1 group flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="w-14 h-14 bg-primary/8 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
        <span className="group-hover:grayscale group-hover:brightness-0 group-hover:invert transition-all duration-300">
          {icon}
        </span>
      </div>
      <h3 className="text-primary font-bold text-lg mb-3">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed flex-1">{desc}</p>
      {slug && (
        <Link
          to={`/fields/${slug}`}
          className={`mt-5 inline-flex items-center gap-2 text-gold font-semibold text-sm hover:text-gold-dark transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          {t.programs.learnMore}
          <Arrow size={16} />
        </Link>
      )}
    </div>
  );
}
