// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

function RaninLogo() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="22" cy="22" r="22" fill="#c9912d" />
      <circle cx="22" cy="26" r="6"   stroke="white" strokeWidth="1.4" strokeOpacity="0.5" fill="none"/>
      <circle cx="22" cy="26" r="10"  stroke="white" strokeWidth="0.9" strokeOpacity="0.3" fill="none"/>
      <circle cx="22" cy="26" r="14"  stroke="white" strokeWidth="0.6" strokeOpacity="0.15" fill="none"/>
      <text x="22" y="30" textAnchor="middle" fontFamily="Cairo, Arial" fontSize="16" fontWeight="800" fill="white">ر</text>
    </svg>
  );
}

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const isHe = t.nav.home === 'דף הבית';
  const isEn = t.nav.home === 'Home';
  const assocName = isEn ? 'Al Ranin' : isHe ? 'עמותת אלרנין' : 'جمعية الرنين';
  const assocFull = isEn ? 'Al Ranin Association for Community Development'
    : isHe ? 'עמותת אלרנין לפיתוח קהילתי'
    : 'جمعية الرنين للتطوير المجتمعي';

  const navLinks = [
    { label: t.nav.home,        path: '/' },
    { label: t.nav.about,       path: '/about' },
    { label: t.nav.fields,      path: '/fields' },
    { label: t.nav.initiatives, path: '/initiatives' },
    { label: t.nav.volunteer,   path: '/volunteer' },
    { label: t.nav.support,     path: '/support' },
    { label: t.nav.news,        path: '/news' },
    { label: t.nav.partners,    path: '/partners' },
    { label: t.nav.contact,     path: '/contact' },
  ];

  const socials = [
    { Icon: Facebook,  label: 'Facebook' },
    { Icon: Instagram, label: 'Instagram' },
    { Icon: Twitter,   label: 'Twitter (X)' },
    { Icon: Linkedin,  label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-primary-dark text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Wave top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className={`lg:col-span-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className={`flex items-center gap-3 mb-5 ${isRTL ? 'justify-start' : ''}`}>
              <RaninLogo />
              <div>
                <p className="text-white font-extrabold text-base leading-tight">{assocName}</p>
                <p className="text-gold text-xs leading-tight mt-0.5">{t.footer.founding}</p>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">{t.footer.desc}</p>
            <div className={`flex gap-2.5 ${isRTL ? '' : ''}`}>
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/8 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-gold font-bold text-sm mb-5 uppercase tracking-wider">{t.footer.links}</h3>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/55 hover:text-gold text-sm transition-colors duration-200 hover:underline underline-offset-2">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-gold font-bold text-sm mb-5 uppercase tracking-wider opacity-0 select-none">&nbsp;</h3>
            <ul className="space-y-2.5">
              {navLinks.slice(5).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/55 hover:text-gold text-sm transition-colors duration-200 hover:underline underline-offset-2">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-gold font-bold text-sm mb-5 uppercase tracking-wider">{t.footer.contact}</h3>
            <ul className="space-y-4">
              {[
                { Icon: Mail,   value: t.contact.info.email,    dir: undefined },
                { Icon: Phone,  value: t.contact.info.phone,    dir: 'ltr' as const },
                { Icon: MapPin, value: t.contact.info.location, dir: undefined },
              ].map(({ Icon, value, dir }) => (
                <li key={value} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Icon size={15} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/55 text-sm" dir={dir}>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs text-center">
            © {currentYear} {assocFull}. {t.footer.rights}.
          </p>
          <div className="flex items-center gap-5">
            <span className="text-white/25 text-xs">{t.footer.founding}</span>
            <Link to="/admin" className="text-white/15 text-xs hover:text-white/30 transition-colors">
              {t.nav.admin}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
