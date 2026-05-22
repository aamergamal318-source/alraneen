// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  const cards = [
    {
      ...t.cta.volunteer,
      link: '/volunteer',
      bg: 'bg-primary',
      btnClass: 'bg-gold text-primary hover:bg-gold-light',
    },
    {
      ...t.cta.partner,
      link: '/partners',
      bg: 'bg-gold-dark',
      btnClass: 'bg-white text-primary hover:bg-neutral-50',
    },
    {
      ...t.cta.support,
      link: '/support',
      bg: 'bg-primary/80',
      btnClass: 'bg-gold text-primary hover:bg-gold-light',
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.link}
              className={`${card.bg} rounded-3xl p-8 text-white flex flex-col items-center text-center`}
            >
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6 flex-1">{card.desc}</p>
              <Link
                to={card.link}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-200 ${card.btnClass}`}
              >
                {card.btn}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
