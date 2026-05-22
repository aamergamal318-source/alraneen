// Project Signature: alranin-community-development-association
import { Heart, Eye, Lightbulb, Zap, Handshake, Leaf } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from '../ui/SectionTitle';

const VALUE_ICONS = {
  responsibility: Heart,
  transparency: Eye,
  innovation: Lightbulb,
  empowerment: Zap,
  partnership: Handshake,
  sustainability: Leaf,
};

const VALUE_COLORS: Record<string, { bg: string; icon: string; border: string }> = {
  responsibility: { bg: 'bg-rose-50',    icon: 'text-rose-600',   border: 'border-rose-100' },
  transparency:   { bg: 'bg-sky-50',     icon: 'text-sky-600',    border: 'border-sky-100' },
  innovation:     { bg: 'bg-amber-50',   icon: 'text-amber-600',  border: 'border-amber-100' },
  empowerment:    { bg: 'bg-violet-50',  icon: 'text-violet-600', border: 'border-violet-100' },
  partnership:    { bg: 'bg-emerald-50', icon: 'text-emerald-600',border: 'border-emerald-100' },
  sustainability: { bg: 'bg-teal-50',    icon: 'text-teal-600',   border: 'border-teal-100' },
};

export default function ValuesSection() {
  const { t, isRTL } = useLanguage();

  const values = Object.entries(t.about.values).map(([key, label]) => ({
    key,
    label,
    desc: t.about.valueDescs[key as keyof typeof t.about.valueDescs],
    Icon: VALUE_ICONS[key as keyof typeof VALUE_ICONS],
    colors: VALUE_COLORS[key] || { bg: 'bg-neutral-50', icon: 'text-primary', border: 'border-neutral-100' },
  }));

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.about.valuesTitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map(({ key, label, desc, Icon, colors }) => (
            <div
              key={key}
              className={`bg-white rounded-2xl p-6 border ${colors.border} shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {Icon && <Icon size={22} className={colors.icon} />}
              </div>
              <h3 className="text-primary font-bold text-base mb-2">{label}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
