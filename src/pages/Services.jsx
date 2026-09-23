import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🏛️',
      title: 'Complete Property Verification',
      description: 'Comprehensive property document verification and legal status check from official government records with detailed analysis.',
      features: ['Document authenticity verification', 'Legal status confirmation', 'Ownership history analysis', 'Encumbrance certificate check'],
      price: '₹5,000',
      duration: '2-3 Days'
    },
    {
      icon: '📋',
      title: 'Khasra-Khata Verification',
      description: 'Complete information extraction from revenue records including Khasra, Khata, survey numbers, and land classification details.',
      features: ['Khasra number verification', 'Khata number validation', 'Land survey records', 'Classification details'],
      price: '₹3,000',
      duration: '1-2 Days'
    },
    {
      icon: '🗺️',
      title: 'Master Plan Verification',
      description: 'Land status verification in GDA/Development Authority master plan to ensure compliance with approved development regulations.',
      features: ['Master plan status check', 'Development permissions', 'Zoning compliance', 'Future planning insights'],
      price: '₹4,000',
      duration: '2-3 Days'
    },
    {
      icon: '💼',
      title: 'Premium Due Diligence',
      description: 'Complete property due diligence including market analysis, legal verification, and investment advisory services.',
      features: ['Market rate analysis', 'Legal compliance check', 'Investment advisory', 'Risk assessment report'],
      price: '₹8,000',
      duration: '3-5 Days'
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-brand-dark transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-white dark:bg-[#0a0f1e] pt-36 md:pt-40 pb-16 text-gray-900 dark:text-white relative overflow-hidden border-b border-amber-200 dark:border-white/5">
        {/* Background glow behind header */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center" data-aos="fade-up">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-orange-50 dark:bg-[#0a192f] border-2 border-brand-accent/50 text-brand-accent font-bold px-5 py-2 text-[10px] md:text-sm tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(245,158,11,0.15)] rounded-none">
              <i className="fas fa-trophy"></i> Professional Property Services
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">Expert</span> Services
          </h1>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            Comprehensive property verification services backed by government records,
            designed specifically for Bihar residents investing in Gorakhpur properties.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm font-semibold tracking-wider text-gray-600 dark:text-gray-300 uppercase">
            <span className="flex items-center gap-2"><i className="fas fa-check text-brand-accent"></i> Government Verified</span>
            <span className="flex items-center gap-2"><i className="fas fa-check text-brand-accent"></i> 500+ Satisfied Clients</span>
            <span className="flex items-center gap-2"><i className="fas fa-check text-brand-accent"></i> Quick Turnaround</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-10 md:py-14 bg-amber-50 dark:bg-brand-dark relative overflow-hidden">
        {/* Background glow decoration */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="h-full bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/5 hover:border-brand-accent/30 shadow-[0_10px_30px_rgba(0,0,0,0.4)] p-6 md:p-8 transition-transform hover:-translate-y-2 duration-300 relative group overflow-hidden rounded-none">
                  {/* Card inner glow on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/20 transition-colors pointer-events-none"></div>
                  
                  <div className="flex items-start gap-4 mb-5 relative z-10">
                    <div className="w-14 h-14 bg-brand-dark text-brand-accent border border-brand-accent/20 flex items-center justify-center text-2xl shrink-0 rounded-none shadow-[0_0_10px_rgba(245,158,11,0.1)] group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="flex-grow pt-1">
                      <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide group-hover:text-brand-accent transition-colors">{service.title}</h5>
                      <div className="flex gap-2 flex-wrap">
                        <span className="bg-green-950/40 border border-green-900/50 text-green-400 px-2 py-0.5 text-xs font-bold uppercase tracking-wider rounded-none">{service.price}</span>
                        <span className="bg-blue-950/40 border border-blue-900/50 text-blue-400 px-2 py-0.5 text-xs font-bold uppercase tracking-wider rounded-none">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed relative z-10 font-light border-b border-amber-200 dark:border-white/10 pb-5">
                    {service.description}
                  </p>
                  
                  <div className="mb-6 relative z-10">
                    <h6 className="font-bold text-gray-600 dark:text-gray-300 text-sm mb-3 flex items-center gap-2">
                      <i className="fas fa-list-ul text-brand-accent/70"></i> Service Includes:
                    </h6>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <i className="fas fa-check text-brand-accent text-xs mt-1"></i>
                          <span className="text-gray-400 text-xs md:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto relative z-10">
                    <button className="w-full border border-brand-accent/30 text-brand-accent hover:bg-brand-accent hover:text-brand-dark px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-all shadow-[0_0_10px_rgba(245,158,11,0.1)] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] rounded-none">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Section */}
          <div data-aos="zoom-in" className="mb-4">
            <div className="bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/5 text-gray-900 dark:text-white p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden rounded-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px] transform translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
              
              <div className="text-center mb-6 relative z-10">
                <h3 className="text-xl md:text-2xl font-black mb-2">Why Choose Gorakhpur Property Check?</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold">
                  Professional verification with complete transparency
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 relative z-10">
                {[
                  { icon: 'fas fa-search', title: 'Transparent Process', desc: 'All info dynamically sourced from official records' },
                  { icon: 'fas fa-bolt', title: 'Quick Delivery', desc: 'Fast turnaround time with detailed reports by experts' },
                  { icon: 'fas fa-shield-alt', title: '100% Accurate', desc: 'Government verified info with total accuracy guarantee' },
                  { icon: 'fas fa-rupee-sign', title: 'Fair Pricing', desc: 'Protect your lifelong investment with minimal cost' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center group p-3 bg-brand-dark transition-all rounded-none shadow-md hover:shadow-xl">
                    <div className="w-10 h-10 mx-auto bg-white dark:bg-[#0a0f1e] flex items-center justify-center text-brand-accent text-lg mb-2 shadow-[0_0_10px_rgba(245,158,11,0.1)] group-hover:scale-110 transition-transform rounded-none">
                      <i className={item.icon}></i>
                    </div>
                    <h5 className="text-white text-xs font-bold mb-1 group-hover:text-brand-accent transition-colors">{item.title}</h5>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center border-t border-amber-200 dark:border-white/10 pt-5 relative z-10 bg-brand-dark/30 -mx-6 md:-mx-8 -mb-6 md:-mb-8 p-5 md:p-6">
                <blockquote className="text-sm text-gray-600 dark:text-gray-300 font-light italic mb-4">
                  "Smart property investment starts with proper verification. Don't let emotions override facts."
                </blockquote>
                <button 
                  className="bg-brand-accent text-brand-dark hover:bg-yellow-400 px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all shadow-[0_5px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_5px_25px_rgba(245,158,11,0.5)] rounded-none"
                  onClick={() => window.open('tel:+919693420595', '_self')}
                >
                  Start Verification Today
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
