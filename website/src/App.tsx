// Project Signature: alranin-community-development-association
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

      {/* 404 */}
      <Route path="*" element={
        <Layout>
          <div className="min-h-screen flex items-center justify-center bg-neutral-50">
            <div className="text-center">
              <div className="text-8xl font-extrabold text-primary/10 mb-6">404</div>
              <h1 className="text-2xl font-bold text-primary mb-4">Page Not Found</h1>
              <a href="/" className="text-gold font-semibold hover:underline">Return Home</a>
            </div>
          </div>
        </Layout>
      } />
    </Routes>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
}
