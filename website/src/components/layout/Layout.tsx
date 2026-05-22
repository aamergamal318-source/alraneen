// Project Signature: alranin-community-development-association
import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '../../context/LanguageContext';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isRTL, lang } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? 'rtl' : 'ltr'} lang={lang}>
      <Header />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
}
