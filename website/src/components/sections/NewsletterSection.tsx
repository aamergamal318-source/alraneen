// Project Signature: alranin-community-development-association
import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function NewsletterSection() {
  const { t, isRTL } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail size={24} className="text-gold" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">{t.newsletter.title}</h2>
        <p className="text-white/70 mb-8 text-lg">{t.newsletter.desc}</p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-gold text-lg font-semibold">
            <CheckCircle size={24} />
            <span>{t.newsletter.success}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 max-w-lg mx-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.newsletter.placeholder}
              required
              className={`flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/15 transition-all ${isRTL ? 'text-right' : 'text-left'}`}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-primary font-bold rounded-full hover:bg-gold-light transition-colors duration-200 whitespace-nowrap"
            >
              {t.newsletter.btn}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
