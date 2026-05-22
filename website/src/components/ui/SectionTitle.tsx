// Project Signature: alranin-community-development-association
import { useLanguage } from '../../context/LanguageContext';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true, light = false }: SectionTitleProps) {
  const { isRTL } = useLanguage();

  return (
    <div className={`mb-12 ${centered ? 'text-center' : isRTL ? 'text-right' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-neutral-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gold rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
