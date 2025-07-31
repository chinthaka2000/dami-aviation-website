import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoursePage from './pages/CoursePage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import SitemapPage from './pages/SitemapPage';
import GalleryPage from './pages/GalleryPage';
import OtherServicesPage from './pages/OtherServicesPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CloudinaryTest from './components/CloudinaryTest';
export function App() {
  return <BrowserRouter>
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0a1929] to-[#0f2942]">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/other-services" element={<OtherServicesPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/test-cloudinary" element={<CloudinaryTest />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>;
}