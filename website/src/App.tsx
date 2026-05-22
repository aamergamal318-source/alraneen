// Project Signature: alranin-community-development-association
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import InitiativesPage from './pages/InitiativesPage';
import InitiativeDetailPage from './pages/InitiativeDetailPage';
import VolunteerPage from './pages/VolunteerPage';
import DonatePage from './pages/DonatePage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';

function AppRoutes() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      {/* Admin - no layout header/footer */}
      <Route path="/admin" element={<AdminPage />} />

      {/* All other pages with Layout */}
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/about" element={<Layout><AboutPage /></Layout>} />
      <Route path="/fields" element={<Layout><ProgramsPage /></Layout>} />
      <Route path="/initiatives" element={<Layout><InitiativesPage /></Layout>} />
      <Route path="/initiatives/:id" element={<Layout><InitiativeDetailPage /></Layout>} />
      <Route path="/volunteer" element={<Layout><VolunteerPage /></Layout>} />
      <Route path="/support" element={<Layout><DonatePage /></Layout>} />
      <Route path="/news" element={<Layout><NewsPage /></Layout>} />
      <Route path="/news/:id" element={<Layout><NewsDetailPage /></Layout>} />
      <Route path="/partners" element={<Layout><PartnersPage /></Layout>} />
      <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

      <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
    </Routes>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </LanguageProvider>
  );
}
