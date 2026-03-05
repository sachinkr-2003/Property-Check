import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Loader from '../components/Loader';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Team from '../pages/Team';
import Pricing from '../pages/Pricing';
import VerifyProperty from '../pages/VerifyProperty';
import AdminPanel from '../admin/AdminPanel';

const AppRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const isAdminRoute = location.pathname.startsWith('/admin');

  if (loading) return <Loader />;

  return (
    <div>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/verify" element={<VerifyProperty />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <WhatsAppButton />}
    </div>
  );
};

export default AppRoutes;