// Project Signature: alranin-community-development-association
import { useLanguage } from '../../context/LanguageContext';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, label, centered = true, light = false }: SectionTitleProps) {
  const { isRTL } = useLanguage();
  const align = centered ? 'text-center' : isRTL ? 'text-right' : 'text-left';

  return (
    <div className={`mb-12 ${align}`}>
      {label && (
        <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-3 opacity-90">{label}</p>
      )}
      <h2 className={`text-3xl md:text-4xl font-extrabold mb-3 leading-tight ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      <div className={`h-[3px] w-12 rounded-full bg-gradient-to-r from-gold to-gold-light ${centered ? 'mx-auto' : ''} mb-4`} />
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-white/75' : 'text-neutral-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
