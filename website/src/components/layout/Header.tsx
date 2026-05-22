// Project Signature: alranin-community-development-association
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

interface NavLink {
  label: string;
  path: string;
}

export default function Header() {
  const { t, isRTL } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

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
        scrolled ? 'bg-primary shadow-lg py-3' : 'bg-primary/95 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <span className="text-primary font-bold text-lg leading-none">ر</span>
              </div>
              <div className={`hidden sm:block ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className="text-white font-bold text-sm leading-tight">
                  {t.nav.home === 'Home'
                    ? 'Al Ranin'
                    : t.nav.home === 'דף הבית'
                    ? 'אלרנין'
                    : 'الرنين'}
                </p>
                <p className="text-gold text-xs leading-tight font-medium">
                  {t.nav.home === 'Home'
                    ? 'Community Development'
                    : t.nav.home === 'דף הבית'
                    ? 'לפיתוח קהילתי'
                    : 'للتطوير المجتمعي'}
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-wrap justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'bg-gold text-primary'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 bg-gold text-primary font-semibold text-sm rounded-full hover:bg-gold-light transition-colors duration-200 shadow-md"
            >
              {t.common.contactUs}
            </Link>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10 mt-2">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'bg-gold text-primary'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 px-4 py-3 bg-gold text-primary font-semibold text-sm rounded-lg text-center"
            >
              {t.common.contactUs}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
