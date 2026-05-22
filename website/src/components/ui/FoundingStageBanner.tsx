// Project Signature: alranin-community-development-association
import { Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function FoundingStageBanner() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="bg-gold/15 border border-gold/30 rounded-2xl p-5">
      <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
        <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <Info size={20} className="text-gold-dark" />
        </div>
        <div>
          <p className="font-bold text-primary text-base mb-1">{t.founding.banner}</p>
          <p className="text-neutral-700 text-sm leading-relaxed">{t.founding.desc}</p>
        </div>
      </div>
    </div>
  );
}
