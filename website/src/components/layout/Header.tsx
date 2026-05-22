// Project Signature: alranin-community-development-association
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

interface NavLink { label: string; path: string; }

function RaninLogo() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="19" cy="19" r="19" fill="#c9912d" />
      {/* Ripple rings */}
      <circle cx="19" cy="22" r="5.5" stroke="white" strokeWidth="1.4" strokeOpacity="0.5" fill="none"/>
      <circle cx="19" cy="22" r="9"   stroke="white" strokeWidth="0.9" strokeOpacity="0.3" fill="none"/>
      <circle cx="19" cy="22" r="12.5" stroke="white" strokeWidth="0.6" strokeOpacity="0.15" fill="none"/>
      {/* Letter ر */}
      <text x="19" y="25" textAnchor="middle" fontFamily="Cairo, Arial" fontSize="14" fontWeight="800" fill="white">ر</text>
    </svg>
  );
}

export default function Header() {
  const { t, isRTL } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const isHe = t.nav.home === 'דף הבית';
  const isEn = t.nav.home === 'Home';

  const logoName   = isEn ? 'Al Ranin' : isHe ? 'אלרנין' : 'الرنين';
  const logoSub    = isEn ? 'Community Development' : isHe ? 'לפיתוח קהילתי' : 'للتطوير المجتمعي';

  const navLinks: NavLink[] = [
    { label: t.nav.home,       path: '/' },
    { label: t.nav.about,      path: '/about' },
    { label: t.nav.fields,     path: '/fields' },
    { label: t.nav.initiatives,path: '/initiatives' },
    { label: t.nav.volunteer,  path: '/volunteer' },
    { label: t.nav.support,    path: '/support' },
    { label: t.nav.news,       path: '/news' },
    { label: t.nav.partners,   path: '/partners' },
    { label: t.nav.contact,    path: '/contact' },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/98 shadow-xl shadow-primary-dark/30 py-2.5'
          : 'bg-primary py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group" aria-label="الرئيسية">
            <div className={`flex items-center gap-2.5 ${isRTL ? '' : 'flex-row-reverse'}`}>
              <div className="group-hover:scale-105 transition-transform duration-200">
                <RaninLogo />
              </div>
              <div className={`hidden sm:block ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className="text-white font-extrabold text-sm leading-tight tracking-wide">{logoName}</p>
                <p className="text-gold text-xs leading-tight font-medium opacity-90">{logoSub}</p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-gold text-white shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 bg-gold text-white font-bold text-sm rounded-full hover:bg-gold-light transition-all duration-200 shadow-gold hover:-translate-y-0.5"
              aria-label={t.common.contactUs}
            >
              {t.common.contactUs}
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-primary-dark border-t border-white/10 mt-2 shadow-xl" role="navigation">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'bg-gold text-white'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 px-4 py-3 bg-gold text-white font-bold text-sm rounded-xl text-center hover:bg-gold-light transition-colors"
            >
              {t.common.contactUs}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
