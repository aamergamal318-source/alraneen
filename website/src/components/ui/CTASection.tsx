// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import { Users, Handshake, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  const cards = [
    {
      ...t.cta.volunteer,
      link: '/volunteer',
      Icon: Users,
      gradient: 'from-primary to-primary-light',
      btnClass: 'bg-gold text-white hover:bg-gold-light shadow-gold',
    },
    {
      ...t.cta.partner,
      link: '/partners',
      Icon: Handshake,
      gradient: 'from-gold-dark to-gold',
      btnClass: 'bg-white text-primary hover:bg-neutral-50 shadow-md',
    },
    {
      ...t.cta.support,
      link: '/support',
      Icon: Heart,
      gradient: 'from-teal to-primary',
      btnClass: 'bg-gold text-white hover:bg-gold-light shadow-gold',
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.link}
              className={`bg-gradient-to-br ${card.gradient} rounded-3xl p-8 text-white flex flex-col items-center text-center shadow-primary hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-5">
                <card.Icon size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-extrabold mb-3">{card.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed mb-7 flex-1">{card.desc}</p>
              <Link
                to={card.link}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 ${card.btnClass}`}
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
