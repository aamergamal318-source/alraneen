// Project Signature: alranin-community-development-association
import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import NewsCard from '../components/ui/NewsCard';
import { useLanguage } from '../context/LanguageContext';

const NEWS_GRADIENTS = [
  'from-primary to-primary/80',
  'from-teal-700 to-teal-900',
  'from-emerald-700 to-emerald-900',
  'from-gold/80 to-gold-dark',
  'from-cyan-700 to-cyan-900',
];

const NEWS_DATES: Record<string, string> = {
  launch: '2026-01-15',
  volunteers: '2026-02-01',
  education: '2026-02-20',
  digital: '2026-03-10',
  partnership: '2026-04-05',
};

const NEWS_CATEGORY_KEYS: Record<string, string> = {
  launch: 'launch',
  volunteers: 'volunteer',
  education: 'initiative',
  digital: 'initiative',
  partnership: 'partnership',
};

export default function NewsPage() {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = Object.entries(t.news.categories);

  const newsEntries = Object.entries(t.news.items);
  const filteredNews = activeCategory === 'all'
    ? newsEntries
    : newsEntries.filter(([key]) => NEWS_CATEGORY_KEYS[key] === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">{t.common.foundingStage}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t.news.title}</h1>
          <p className="text-white/75 text-xl leading-relaxed">{t.news.subtitle}</p>
        </div>
      </section>

      {/* Demo Note */}
      <section className="py-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
            <AlertCircle size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-amber-800 text-sm">{t.news.demoNote}</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : 'justify-start'}`}>
            {categories.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === key
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-primary/30 hover:text-primary'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map(([key, item], idx) => (
              <NewsCard
                key={key}
                id={key}
                title={item.title}
                summary={item.summary}
                date={NEWS_DATES[key] || '2026-01-01'}
                category={item.category}
                gradient={NEWS_GRADIENTS[idx % NEWS_GRADIENTS.length]}
              />
            ))}
          </div>
          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-400 text-lg">
                {isRTL ? 'لا توجد أخبار في هذا التصنيف حاليًا' : 'No news in this category yet'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
