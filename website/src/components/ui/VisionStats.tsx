// Project Signature: alranin-community-development-association
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from './SectionTitle';

export default function VisionStats() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.stats.title} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.stats.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-5xl font-extrabold text-primary mb-2 leading-none">
                {item.value}
              </div>
              <div className="text-sm text-neutral-600 font-medium leading-snug">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-neutral-500 mt-6 italic">
          {t.common.foundingStage}
        </p>
      </div>
    </section>
  );
}
