import React from 'react';
import VerifyPropertyForm from '../form/VerifyPropertyForm';

const VerifyProperty = () => {
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-brand-dark transition-colors duration-300 pb-20">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1a2b4c] to-[#0a1128] pt-32 pb-24 text-gray-900 dark:text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="mb-6">
              <span className="inline-block bg-brand-accent text-brand-dark font-bold px-4 py-2 text-sm tracking-widest shadow-md">
                <i className="fas fa-trophy mr-2"></i> Professional Property Verification Service
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6">
              Verify Your <span className="text-brand-accent">Property</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed">
              Get complete property verification with 100% government record accuracy.
              Trusted by 500+ families across Bihar.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: 'fa-bolt', title: 'Quick Response', desc: 'Get your verification report within 1-3 days', color: 'text-brand-dark' },
                { icon: 'fa-university', title: 'Government Records', desc: 'All information from official sources', color: 'text-green-500' },
                { icon: 'fa-shield-alt', title: '100% Secure', desc: 'Your data is completely protected', color: 'text-brand-accent' }
              ].map((item, idx) => (
                <div key={idx} className="bg-amber-100 dark:bg-white/5 border border-amber-200 dark:border-white/10 p-6 backdrop-blur-md shadow-lg transform hover:-translate-y-1 transition-transform" data-aos="fade-up" data-aos-delay={idx * 150}>
                  <div className={`${item.color} text-4xl mb-4`}>
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h5 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h5>
                  <p className="text-white/60 text-sm m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          {/* Form Section */}
          <div className="mb-6">
            <VerifyPropertyForm />
          </div>

          {/* Process Steps */}
          <div className="bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 mt-6" data-aos="fade-up">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 bg-orange-50 dark:bg-[#0a192f] border border-brand-accent/30 text-brand-accent font-bold px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase rounded-none mb-3">
                <i className="fas fa-tasks text-brand-accent/70"></i> How It Works
              </span>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Our Verification Process</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Submit Form', desc: 'Fill out property details', icon: 'fa-file-alt', color: 'text-brand-accent', border: 'border-brand-accent/40' },
                { step: '2', title: 'Document Review', desc: 'Expert analysis begins', icon: 'fa-search', color: 'text-green-400', border: 'border-green-500/40' },
                { step: '3', title: 'Verification', desc: 'Government record check', icon: 'fa-university', color: 'text-blue-400', border: 'border-blue-500/40' },
                { step: '4', title: 'Report Delivery', desc: 'Detailed report sent', icon: 'fa-check-circle', color: 'text-purple-400', border: 'border-purple-500/40' }
              ].map((item, idx) => (
                <div key={idx} className="text-center relative group">
                  <div className={`w-14 h-14 rounded-none flex items-center justify-center mx-auto mb-4 border-2 ${item.border} bg-orange-50 dark:bg-[#0a192f] group-hover:bg-brand-accent/10 transition-colors`}>
                    <i className={`fas ${item.icon} ${item.color} text-xl group-hover:scale-110 transition-transform`}></i>
                  </div>
                  <div className={`text-[10px] font-black ${item.color} tracking-widest uppercase mb-1`}>Step {item.step}</div>
                  <h6 className="font-black text-gray-900 dark:text-white mb-1 text-sm">{item.title}</h6>
                  <p className="text-gray-400 text-[10px] m-0 font-semibold uppercase tracking-wider">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VerifyProperty;
