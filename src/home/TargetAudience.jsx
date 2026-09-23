import React from 'react';

const TargetAudience = () => {
  return (
    <div className="py-12 md:py-16 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-brand-dark dark:to-brand-dark/90 text-gray-900 dark:text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12" data-aos="fade-up">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent mb-4">
              <span className="font-semibold tracking-wider text-[11px] uppercase">Special Audience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white m-0 tracking-tight">
              Specially for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">Bihar Families</span>
            </h2>
          </div>
          <div className="max-w-md text-left lg:text-right border-l-4 lg:border-l-0 lg:border-r-4 border-brand-accent/40 pl-4 lg:pl-0 lg:pr-5 py-1">
            <p className="text-gray-600 dark:text-gray-400 m-0 text-sm sm:text-base leading-relaxed">
              We deeply understand the challenges faced by Bihar residents when buying property in Gorakhpur.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Problems Section */}
          <div data-aos="fade-right">
            <div className="h-full bg-red-50 dark:bg-red-950/40 backdrop-blur-md border border-red-200 dark:border-red-500/20 shadow-xl dark:shadow-2xl p-6 md:p-8 rounded-none">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-red-200 dark:border-red-500/20">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-500/20 flex items-center justify-center text-red-600 dark:text-red-400">
                  <i className="fas fa-exclamation-circle text-2xl"></i>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-red-600 dark:text-red-400">Common Problems</h4>
              </div>
              
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { title: 'G.D.A. Procedures Unknown', desc: 'Lack of knowledge about GDA acquisition and master plan' },
                  { title: 'Khasra Verification Issues', desc: 'Difficulty in verifying land records and documentation' },
                  { title: 'Wrong Circle Rate Information', desc: 'Getting misled about actual property rates' },
                  { title: 'Broker Exploitation', desc: 'Being taken advantage of due to lack of local knowledge' },
                  { title: 'Legal Complications', desc: 'Unknown disputes and legal issues with properties' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className="fas fa-times-circle text-red-500 mt-1"></i>
                    <div>
                      <strong className="block text-gray-900 dark:text-white mb-0 text-sm sm:text-base">{item.title}</strong>
                      <p className="text-xs sm:text-sm text-red-600/80 dark:text-red-200/60 m-0 leading-tight">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solutions Section */}
          <div data-aos="fade-left">
            <div className="h-full bg-green-50 dark:bg-green-950/40 backdrop-blur-md border border-green-200 dark:border-green-500/20 shadow-xl dark:shadow-2xl p-6 md:p-8 rounded-none">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-green-200 dark:border-green-500/20">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-green-600 dark:text-green-400">Our Solutions</h4>
              </div>
              
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { title: 'Complete Verification Service', desc: 'End-to-end property verification from government records' },
                  { title: 'Government Record Access', desc: 'Direct access to official databases and records' },
                  { title: 'Transparent Process', desc: 'Clear reporting with no hidden information' },
                  { title: 'Affordable Pricing', desc: 'Quality service at reasonable rates starting ₹3,000' },
                  { title: 'Expert Guidance', desc: 'Professional advice throughout the process' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <div>
                      <strong className="block text-gray-900 dark:text-white mb-0 text-sm sm:text-base">{item.title}</strong>
                      <p className="text-xs sm:text-sm text-green-600/80 dark:text-green-200/60 m-0 leading-tight">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div data-aos="zoom-in">
          <div className="max-w-4xl mx-auto bg-amber-100 dark:bg-white/5 backdrop-blur-lg border border-amber-200 dark:border-white/10 shadow-2xl p-6 md:p-8 text-center rounded-none relative">
            <i className="fas fa-quote-left absolute top-4 left-4 text-3xl text-amber-500/20 dark:text-white/5"></i>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-brand-accent">
              <i className="fas fa-bullseye me-2"></i> Our Mission
            </h3>
            <blockquote className="text-base md:text-lg text-gray-700 dark:text-white/90 font-light italic leading-relaxed mb-4">
              "To provide complete and accurate property verification so that no family
              from Bihar faces financial loss while buying land in Gorakhpur."
            </blockquote>
            <footer className="text-gray-500 dark:text-white/60 mb-6 text-sm">
              <strong className="text-gray-900 dark:text-white">Arun Singh</strong>, Founder
            </footer>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button className="bg-brand-accent text-brand-dark hover:bg-yellow-400 font-bold px-6 py-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center text-sm md:text-base">
                <i className="fas fa-rocket me-2"></i> Start Verification
              </button>
              <button className="border border-white/30 text-gray-900 dark:text-white hover:bg-white hover:text-brand-dark font-bold px-6 py-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center text-sm md:text-base">
                <i className="fas fa-phone-alt me-2 animate-pulse"></i> Call Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
