import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Pricing from '../pages/Pricing';
import VerifyProperty from '../pages/VerifyProperty';
import AdminPanel from '../admin/AdminPanel';

const AppRoutes = () => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/verify" element={<VerifyProperty />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Home />} />
      </Routes>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <WhatsAppButton />}
    </div>
  );
};

export default AppRoutes;