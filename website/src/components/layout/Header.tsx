// Project Signature: alranin-community-development-association
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

interface NavLink { label: string; path: string; }

function BrandLogo() {
  const logoSrc = `${import.meta.env.BASE_URL}brand/alraneen-logo.png`;

  return (
    <img
      src={logoSrc}
      alt=""
      aria-hidden="true"
      className="h-12 w-28 sm:h-14 sm:w-36 rounded-xl object-contain bg-white ring-1 ring-gold/25 shadow-sm"
    />
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

  const navLinks: NavLink[] = [
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

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-lg shadow-primary-dark/10 backdrop-blur-md py-2'
          : 'bg-white/90 backdrop-blur-sm py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="flex-shrink-0 group" aria-label="Home">
            <div className={`flex items-center gap-2.5 ${isRTL ? '' : 'flex-row-reverse'}`}>
              <div className="group-hover:scale-105 transition-transform duration-200">
                <BrandLogo />
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-primary/75 hover:text-primary hover:bg-primary/7'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 flex-shrink-0">
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
              className="lg:hidden text-primary p-2 rounded-lg hover:bg-primary/8 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-primary/10 mt-2 shadow-xl" role="navigation">
          <nav className="max-w-7xl mx-auto px-3 py-4 flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'bg-primary text-white'
                    : 'text-primary/80 hover:bg-primary/7 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 px-4 py-3 bg-gold text-white font-bold text-sm rounded-xl text-center hover:bg-gold-light transition-colors shadow-gold"
            >
              {t.common.contactUs}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
