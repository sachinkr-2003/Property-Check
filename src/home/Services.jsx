import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { serviceAPI } from '../services/apiService';

const Services = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // High-quality real estate placeholder images for services
  const realEstateImages = [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await serviceAPI.getAll();
        if (res.success) {
          setServices(res.data);
        }
      } catch (err) {
        console.error('Failed to fetch services:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center py-20 min-h-[50vh]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-dark"></div>
    </div>
  );

  return (
    <div className="py-12 md:py-16 relative overflow-hidden bg-amber-50 dark:bg-brand-dark transition-colors duration-300">
      {/* Abstract Background for dark theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden dark:block">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-dark/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12" data-aos="fade-up">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent mb-4">
              <span className="font-semibold tracking-wider text-[11px] uppercase">Service Catalog</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white m-0 tracking-tight">
              Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-500">Services</span>
            </h2>
          </div>
          <div className="max-w-md text-left lg:text-right border-l-4 lg:border-l-0 lg:border-r-4 border-brand-accent/40 pl-4 lg:pl-0 lg:pr-5 py-1">
            <p className="text-gray-600 dark:text-gray-400 m-0 text-sm sm:text-base leading-relaxed">
              Complete property verification solutions under one roof. Protect your investment with 100% accurate government records.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="group relative cursor-pointer"
            >
              {/* Glassmorphism Square Card */}
              <div className="h-full rounded-none bg-white/40 dark:bg-amber-100 dark:bg-white/5 backdrop-blur-lg border border-amber-200 dark:border-white/50 dark:border-amber-200 dark:border-white/10 shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                
                {/* Real Estate Image Header */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={realEstateImages[index % realEstateImages.length]} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-20"></div>
                  <div className="absolute bottom-4 left-6 z-30 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white">
                      <i className={service.icon}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-0">{service.title}</h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Hover Line Indicator */}
                <div className="absolute bottom-0 left-0 h-1 bg-brand-accent w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Container */}
        <div className="mt-16" data-aos="zoom-in" data-aos-delay="200">
          <div className="relative rounded-sm overflow-hidden group shadow-[0_10px_40px_rgba(245,158,11,0.2)]">
            {/* Extremely Premium Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent via-yellow-500 to-orange-400 group-hover:scale-105 transition-transform duration-700"></div>
            
            {/* Glass Geometric Overlays */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 blur-[80px] rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-dark/20 blur-[60px] rounded-full transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
            
            <div className="relative p-6 sm:p-8 md:p-10 flex flex-col xl:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="max-w-2xl text-center xl:text-left z-10 w-full">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 text-brand-dark leading-tight tracking-tight">
                  Ready to Verify Your Property?
                </h3>
                <p className="text-sm sm:text-base text-brand-dark/80 font-bold m-0 max-w-xl mx-auto xl:mx-0">
                  Don't let lack of information cost you lakhs of rupees. Secure your future investment with a complete and accurate verification report today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 z-10 w-full xl:w-auto justify-center">
                <button
                  className="bg-amber-100 dark:bg-brand-dark text-gray-900 dark:text-white hover:bg-black transition-all duration-300 font-bold px-6 py-3 text-sm sm:text-base hover:-translate-y-1 hover:shadow-2xl rounded-sm w-full sm:w-auto flex items-center justify-center gap-2"
                  onClick={() => navigate('/verify')}
                >
                  Start Verification
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
                <button
                  className="px-6 py-3 border-2 border-brand-dark text-brand-dark font-bold hover:bg-brand-dark hover:text-white transition-all duration-300 uppercase tracking-wide hover:-translate-y-1 rounded-sm shadow-xl hover:shadow-2xl w-full sm:w-auto flex items-center justify-center gap-2"
                  onClick={() => window.open('tel:+919693420595', '_self')}
                >
                  <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
