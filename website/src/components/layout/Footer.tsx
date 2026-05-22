// Project Signature: alranin-community-development-association
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

function RaninLogo() {
  const logoSrc = `${import.meta.env.BASE_URL}brand/alraneen-logo.png`;

  return (
    <img
      src={logoSrc}
      alt=""
      aria-hidden="true"
      className="h-16 w-36 rounded-xl object-contain bg-white ring-1 ring-gold/35 shadow-lg"
    />
  );
}

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

  const socials = [
    { Icon: Facebook, label: 'Facebook' },
    { Icon: Instagram, label: 'Instagram' },
    { Icon: Twitter, label: 'Twitter (X)' },
    { Icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-primary-dark text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mb-11">
          <div className={`lg:col-span-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center gap-3 mb-5">
              <RaninLogo />
              <div>
                <p className="text-white font-extrabold text-base leading-tight">Al Ranin</p>
                <p className="text-gold text-xs leading-tight mt-0.5">{t.footer.founding}</p>
              </div>
            </div>
            <p className="text-white/62 text-sm leading-relaxed mb-6">{t.footer.desc}</p>
            <div className="flex gap-2.5">
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

          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-gold font-bold text-sm mb-5 uppercase tracking-wider">{t.footer.links}</h3>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/62 hover:text-gold text-sm transition-colors duration-200 hover:underline underline-offset-2">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-gold font-bold text-sm mb-5 uppercase tracking-wider opacity-0 select-none">&nbsp;</h3>
            <ul className="space-y-2.5">
              {navLinks.slice(5).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/62 hover:text-gold text-sm transition-colors duration-200 hover:underline underline-offset-2">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-gold font-bold text-sm mb-5 uppercase tracking-wider">{t.footer.contact}</h3>
            <ul className="space-y-4">
              {[
                { Icon: Mail, value: t.contact.info.email, dir: undefined },
                { Icon: Phone, value: t.contact.info.phone, dir: 'ltr' as const },
                { Icon: MapPin, value: t.contact.info.location, dir: undefined },
              ].map(({ Icon, value, dir }) => (
                <li key={value} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Icon size={15} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/62 text-sm" dir={dir}>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/42 text-xs text-center">
            © {currentYear} Al Ranin. {t.footer.rights}.
          </p>
          <div className="flex items-center gap-5">
            <span className="text-white/30 text-xs">{t.footer.founding}</span>
            <Link to="/admin" className="text-white/25 text-xs hover:text-white/45 transition-colors">
              {t.nav.admin}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
