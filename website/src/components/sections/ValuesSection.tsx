// Project Signature: alranin-community-development-association
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from '../ui/SectionTitle';

const ICONS: Record<string, string> = {
  responsibility: '🤝',
  transparency: '🔍',
  innovation: '💡',
  empowerment: '⚡',
  partnership: '🌐',
  sustainability: '🌱',
};

export default function ValuesSection() {
  const { t, isRTL } = useLanguage();

  const values = Object.entries(t.about.values).map(([key, label]) => ({
    key,
    label,
    desc: t.about.valueDescs[key as keyof typeof t.about.valueDescs],
    icon: ICONS[key],
  }));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.about.valuesTitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ key, label, desc, icon }) => (
            <div
              key={key}
              className={`bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:border-gold/30 hover:shadow-sm transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-primary font-bold text-lg mb-2">{label}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
