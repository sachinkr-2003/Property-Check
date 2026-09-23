import React, { useState, useEffect } from 'react';
import { settingsAPI } from '../services/apiService';

const Pricing = () => {
  const [pricing, setPricing] = useState({
    basic: 3000,
    complete: 5000,
    premium: 8000
  });
  const [phone, setPhone] = useState('+91 9693420595');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await settingsAPI.get();
        if (res.success) {
          setPricing(res.data.pricing);
          setPhone(res.data.contactPhone);
        }
      } catch (err) {
        console.error('Failed to fetch pricing:', err);
      }
    };
    fetchSettings();
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-brand-dark pt-32 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-accent dark:from-white dark:to-gray-400">
            Pricing Plans
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Protect your investment with our comprehensive property verification services.
            Choose the plan that best suits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto mb-20">
          
          {/* Basic Verification */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="h-full bg-white dark:bg-gray-900 border border-amber-200 dark:border-amber-200 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 text-center p-8 flex flex-col pt-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 dark:bg-amber-100 dark:bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              
              <h5 className="text-xl font-bold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-widest relative z-10">Basic Verification</h5>
              <h3 className="text-4xl font-extrabold text-brand-dark dark:text-white mb-8 relative z-10">
                ₹{pricing.basic.toLocaleString()}
              </h3>
              
              <ul className="mb-10 space-y-4 text-left relative z-10 flex-grow">
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i> <span className="text-gray-700 dark:text-gray-300">Khasra-Khata Check</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i> <span className="text-gray-700 dark:text-gray-300">Basic Document Verification</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i> <span className="text-gray-700 dark:text-gray-300">Ownership Status</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i> <span className="text-gray-700 dark:text-gray-300">Report within 3 days</span></li>
              </ul>
              
              <button
                className="w-full border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white dark:border-amber-300 dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-brand-dark px-6 py-4 font-bold transition-all relative z-10"
                onClick={() => window.open(`tel:${phone.replace(/\s/g, '')}`, '_self')}
              >
                Choose Plan
              </button>
            </div>
          </div>

          {/* Complete Verification (Featured) */}
          <div data-aos="fade-up" data-aos-delay="200" className="transform md:-translate-y-4 z-10">
            <div className="h-full bg-gradient-to-br from-brand-dark to-brand-accent text-gray-900 dark:text-white shadow-2xl p-8 flex flex-col pt-12 relative overflow-hidden border-2 border-brand-accent/50">
              <div className="absolute top-4 right-4 bg-brand-accent text-brand-dark text-xs font-black uppercase tracking-wider py-1 px-3 shadow-md transform rotate-3">
                Most Popular
              </div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100 dark:bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
              
              <h5 className="text-xl font-bold text-white/80 mb-4 uppercase tracking-widest relative z-10">Complete Verification</h5>
              <h3 className="text-5xl font-extrabold text-brand-accent mb-8 relative z-10">
                ₹{pricing.complete.toLocaleString()}
              </h3>
              
              <ul className="mb-10 space-y-4 text-left relative z-10 flex-grow">
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> <span className="text-white/90">All Basic features</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> <span className="text-white/90">GDA Master Plan Check</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> <span className="text-white/90">Circle Rate Information</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> <span className="text-white/90">Land Demarcation Details</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-brand-accent mt-1"></i> <span className="text-white/90 font-bold">Report within 2 days</span></li>
              </ul>
              
              <button
                className="w-full bg-brand-accent text-brand-dark hover:bg-yellow-400 px-6 py-4 font-extrabold shadow-lg shadow-brand-accent/30 transition-all relative z-10"
                onClick={() => window.open(`tel:${phone.replace(/\s/g, '')}`, '_self')}
              >
                Choose Plan
              </button>
            </div>
          </div>

          {/* Premium Service */}
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="h-full bg-white dark:bg-gray-900 border border-amber-200 dark:border-amber-200 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 text-center p-8 flex flex-col pt-12 relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-100 dark:bg-amber-100 dark:bg-white/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              
              <h5 className="text-xl font-bold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-widest relative z-10">Premium Service</h5>
              <h3 className="text-4xl font-extrabold text-brand-dark dark:text-white mb-8 relative z-10">
                ₹{pricing.premium.toLocaleString()}
              </h3>
              
              <ul className="mb-10 space-y-4 text-left relative z-10 flex-grow">
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i> <span className="text-gray-700 dark:text-gray-300">All Complete features</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i> <span className="text-gray-700 dark:text-gray-600 dark:text-gray-300 font-bold text-brand-dark dark:text-brand-accent">Physical Site Visit</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i> <span className="text-gray-700 dark:text-gray-300">Legal Consultation</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i> <span className="text-gray-700 dark:text-gray-300">Market Analysis Report</span></li>
                <li className="flex items-start gap-3"><i className="fas fa-check text-green-500 mt-1"></i> <span className="text-gray-700 dark:text-gray-600 dark:text-gray-300 font-bold text-brand-dark dark:text-brand-accent">Same day report</span></li>
              </ul>
              
              <button
                className="w-full border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white dark:border-amber-300 dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-brand-dark px-6 py-4 font-bold transition-all relative z-10"
                onClick={() => window.open(`tel:${phone.replace(/\s/g, '')}`, '_self')}
              >
                Choose Plan
              </button>
            </div>
          </div>

        </div>

        {/* Special Offer */}
        <div data-aos="zoom-in">
          <div className="max-w-4xl mx-auto bg-brand-accent text-brand-dark p-10 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 blur-xl">
              <i className="fas fa-tags text-[200px]"></i>
            </div>
            <div className="relative z-10">
              <h4 className="text-3xl font-extrabold mb-4 flex items-center justify-center gap-3">
                <i className="fas fa-gift"></i> Special Offer for Bihar Residents
              </h4>
              <p className="text-lg font-medium mb-6 max-w-2xl mx-auto text-brand-dark/80">
                Get <strong className="text-xl">20% discount</strong> on any verification package. We understand the challenges
                faced by people from Bihar when buying property in Gorakhpur.
              </p>
              <div className="inline-block bg-white border-2 border-dashed border-gray-300 px-8 py-3 text-2xl font-black text-brand-dark tracking-widest shadow-inner">
                BIHAR20
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
