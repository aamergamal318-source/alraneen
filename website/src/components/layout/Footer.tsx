// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.fields, path: '/fields' },
    { label: t.nav.initiatives, path: '/initiatives' },
    { label: t.nav.volunteer, path: '/volunteer' },
    { label: t.nav.support, path: '/support' },
    { label: t.nav.news, path: '/news' },
    { label: t.nav.partners, path: '/partners' },
    { label: t.nav.contact, path: '/contact' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className={`lg:col-span-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-primary font-bold text-xl leading-none">ر</span>
              </div>
              <div>
                <p className="text-white font-bold text-base leading-tight">
                  {isRTL
                    ? (t.nav.home === 'דף הבית' ? 'עמותת אלרנין' : 'جمعية الرنين')
                    : 'Al Ranin'}
                </p>
                <p className="text-gold text-xs leading-tight">
                  {t.footer.founding}
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              {t.footer.desc}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-gold font-semibold text-base mb-5">{t.footer.links}</h3>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-gold font-semibold text-base mb-5">&nbsp;</h3>
            <ul className="space-y-2">
              {navLinks.slice(5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-gold font-semibold text-base mb-5">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">{t.contact.info.email}</span>
              </li>
              <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm" dir="ltr">{t.contact.info.phone}</span>
              </li>
              <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">{t.contact.info.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center">
            © {currentYear} {isRTL
              ? (t.nav.home === 'דף הבית' ? 'עמותת אלרנין לפיתוח קהילתי' : 'جمعية الرنين للتطوير المجتمعي')
              : 'Al Ranin Association for Community Development'
            }. {t.footer.rights}.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/30 text-xs">{t.footer.founding}</span>
            <Link to="/admin" className="text-white/20 text-xs hover:text-white/40 transition-colors">{t.nav.admin}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
