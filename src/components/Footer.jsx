import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/gpc-logo.svg';
import { settingsAPI } from '../services/apiService';

const Footer = () => {
  const [settings, setSettings] = useState({
    siteTitle: 'Gorakhpur Property Check',
    contactEmail: 'info@gorakhpurpropertycheck.com',
    contactPhone: '+91 9693420595',
    address: 'Third Floor, Yashodhara Complex, Near PSC Camp, Gorakhpur'
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await settingsAPI.get();
        if (res.success) {
          setSettings(res.data);
        }
      } catch (err) {
        console.error('Failed to fetch footer settings:', err);
      }
    };
    fetchSettings();
  }, []);

  return (
    <footer className="bg-amber-100 dark:bg-brand-dark text-gray-900 dark:text-white pt-16 md:pt-20 pb-8 relative overflow-hidden border-t border-amber-200 dark:border-white/10">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          <div className="flex flex-col gap-5">
            <Link to="/" className="inline-block transform hover:scale-105 transition-transform duration-300 origin-left">
              <img src={logo} alt="GPC Logo" className="h-10 object-contain filter brightness-0 invert opacity-100" />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm m-0">
              Your trusted partner for property verification and legal documentation in Gorakhpur.
              We ensure secure and transparent property transactions.
            </p>
          </div>

          <div>
            <h6 className="text-[15px] font-extrabold text-gray-900 dark:text-white mb-6 uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-[2px] after:bg-brand-accent">Quick Links</h6>
            <ul className="space-y-3">
              <li><Link className="text-gray-400 hover:text-brand-accent transition-all duration-300 flex items-center gap-2 group text-sm" to="/"><i className="fas fa-chevron-right text-[10px] text-white/20 group-hover:text-brand-accent group-hover:translate-x-1 transition-all"></i> Home</Link></li>
              <li><Link className="text-gray-400 hover:text-brand-accent transition-all duration-300 flex items-center gap-2 group text-sm" to="/about"><i className="fas fa-chevron-right text-[10px] text-white/20 group-hover:text-brand-accent group-hover:translate-x-1 transition-all"></i> About</Link></li>
              <li><Link className="text-gray-400 hover:text-brand-accent transition-all duration-300 flex items-center gap-2 group text-sm" to="/services"><i className="fas fa-chevron-right text-[10px] text-white/20 group-hover:text-brand-accent group-hover:translate-x-1 transition-all"></i> Services</Link></li>
              <li><Link className="text-gray-400 hover:text-brand-accent transition-all duration-300 flex items-center gap-2 group text-sm" to="/contact"><i className="fas fa-chevron-right text-[10px] text-white/20 group-hover:text-brand-accent group-hover:translate-x-1 transition-all"></i> Contact</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="text-[15px] font-extrabold text-gray-900 dark:text-white mb-6 uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-[2px] after:bg-brand-accent">Services</h6>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-white transition-all duration-300 cursor-default flex items-center gap-2 group text-sm"><i className="fas fa-chevron-right text-[10px] text-white/20 group-hover:translate-x-1 transition-all"></i> Property Verification</li>
              <li className="text-gray-400 hover:text-white transition-all duration-300 cursor-default flex items-center gap-2 group text-sm"><i className="fas fa-chevron-right text-[10px] text-white/20 group-hover:translate-x-1 transition-all"></i> Legal Documentation</li>
              <li className="text-gray-400 hover:text-white transition-all duration-300 cursor-default flex items-center gap-2 group text-sm"><i className="fas fa-chevron-right text-[10px] text-white/20 group-hover:translate-x-1 transition-all"></i> Title Search</li>
              <li className="text-gray-400 hover:text-white transition-all duration-300 cursor-default flex items-center gap-2 group text-sm"><i className="fas fa-chevron-right text-[10px] text-white/20 group-hover:translate-x-1 transition-all"></i> Property Registration</li>
            </ul>
          </div>

          <div>
            <h6 className="text-[15px] font-extrabold text-gray-900 dark:text-white mb-6 uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-[2px] after:bg-brand-accent">Contact Info</h6>
            <div className="space-y-4 text-gray-500 dark:text-gray-400 text-sm">
              <p className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-brand-accent mt-1"></i>
                <span className="leading-snug">{settings.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <i className="fas fa-phone text-brand-accent"></i>
                <span>{settings.contactPhone}</span>
              </p>
              <p className="flex items-center gap-3">
                <i className="fas fa-envelope text-brand-accent"></i>
                <span>{settings.contactEmail}</span>
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-amber-200 dark:border-white/10 pt-8 mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs sm:text-sm m-0 text-center md:text-left font-medium">
            © {new Date().getFullYear()} {settings.siteTitle}. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-amber-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="fab fa-facebook-f text-sm"></i>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-amber-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="fab fa-twitter text-sm"></i>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-amber-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="fab fa-linkedin-in text-sm"></i>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-amber-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <i className="fab fa-instagram text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
