import React from 'react';
import aboutImage from '../assets/about.jpeg';

const About = () => {
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-brand-dark transition-colors duration-300 pb-20">
      
      {/* Hero Section */}
      <div className="bg-amber-100 dark:bg-brand-dark pt-24 md:pt-28 pb-16 md:pb-20 text-gray-900 dark:text-white relative overflow-hidden border-b border-amber-200 dark:border-white/10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="lg:w-1/2" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">Gorakhpur Property Check</span>
              </h1>
              <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed max-w-xl">
                Your trusted partner for property verification in Gorakhpur, specially serving families from Bihar. We secure your hard-earned money with verified facts.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-brand-accent text-brand-dark px-4 py-2 text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2">
                  <i className="fas fa-trophy"></i> 500+ Properties Verified
                </span>
                <span className="bg-amber-100 dark:bg-white/10 text-gray-900 dark:text-white border border-amber-300 dark:border-white/20 hover:border-brand-accent hover:text-brand-accent transition-colors px-4 py-2 text-xs sm:text-sm font-bold flex items-center gap-2">
                  <i className="fas fa-check-circle text-green-500"></i> 100% Accurate
                </span>
                <span className="bg-amber-100 dark:bg-white/10 text-gray-900 dark:text-white border border-amber-300 dark:border-white/20 hover:border-brand-accent hover:text-brand-accent transition-colors px-4 py-2 text-xs sm:text-sm font-bold flex items-center gap-2">
                  <i className="fas fa-bolt text-brand-accent"></i> 24hr Response
                </span>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-accent rounded-none transform rotate-6 scale-105 opacity-50 group-hover:rotate-12 transition-transform duration-500"></div>
                <img
                  src={aboutImage}
                  alt="Arun Singh"
                  className="relative z-10 w-56 h-56 md:w-72 md:h-72 object-cover border-4 border-brand-accent shadow-2xl"
                />
                <div className="absolute -bottom-5 -right-5 z-20 bg-green-500 text-gray-900 dark:text-white w-14 h-14 flex items-center justify-center text-2xl shadow-xl border-4 border-[#0a1128] rounded-full">
                  <i className="fas fa-check"></i>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Quick Stats - Premium Floating Glassmorphic Strip */}
      <div className="container mx-auto px-4 relative z-30 -mt-4 sm:-mt-6 mb-12">
        <div className="bg-brand-dark/95 backdrop-blur-xl border border-amber-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-xl relative overflow-hidden">
          {/* Subtle top glow line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent/70 to-transparent"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 py-3 md:py-4 text-center divide-x divide-white/10 relative z-10">
            <div className="p-1 md:p-2 group">
              <div className="text-2xl md:text-3xl font-black text-brand-accent mb-0.5 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)] transform group-hover:scale-110 transition-transform duration-300">500+</div>
              <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.10em] m-0"><i className="fas fa-building mr-1.5 hidden sm:inline-block text-brand-accent/70"></i>Properties</p>
            </div>
            <div className="p-1 md:p-2 group">
              <div className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-0.5 transform group-hover:scale-110 transition-transform duration-300">100%</div>
              <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.10em] m-0"><i className="fas fa-certificate mr-1.5 hidden sm:inline-block text-green-500/70"></i>Accuracy</p>
            </div>
            <div className="p-1 md:p-2 group">
              <div className="text-2xl md:text-3xl font-black text-brand-accent mb-0.5 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)] transform group-hover:scale-110 transition-transform duration-300">24<span className="text-sm md:text-lg text-brand-accent">h</span></div>
              <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.10em] m-0"><i className="fas fa-bolt mr-1.5 hidden sm:inline-block text-brand-accent/70"></i>Response</p>
            </div>
            <div className="p-1 md:p-2 group">
              <div className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-0.5 transform group-hover:scale-110 transition-transform duration-300"><span className="text-sm md:text-lg font-light text-white">₹</span>3K</div>
              <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.10em] m-0"><i className="fas fa-wallet mr-1.5 hidden sm:inline-block text-white/50"></i>Starting</p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Story */}
      <div className="py-8 md:py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-amber-100 dark:bg-brand-dark shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-amber-200 dark:border-white/10 overflow-hidden rounded-xl" data-aos="zoom-in">
            {/* Premium Header Container */}
            <div className="bg-amber-100 dark:bg-brand-dark p-6 md:p-8 text-center relative overflow-hidden border-b border-amber-200 dark:border-white/10">
              {/* Background glow behind header */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px]"></div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 tracking-tight relative z-10 text-white">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">Founder</span>
              </h2>
              <div className="inline-block relative z-10">
                <div className="bg-white dark:bg-[#0a0f1e] border-2 border-brand-accent/50 text-brand-accent px-4 py-1.5 md:py-2 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-[0.10em] shadow-[0_0_20px_rgba(245,158,11,0.15)] flex items-center gap-2">
                  <i className="fas fa-certificate text-brand-accent/70"></i>
                  Arun Singh - Property Expert from Gopalganj, Bihar
                  <i className="fas fa-certificate text-brand-accent/70"></i>
                </div>
              </div>
            </div>
            
            <div className="p-4 md:p-6 bg-white dark:bg-[#0a0f1e]">
              <div className="bg-amber-100 dark:bg-brand-dark border-l-4 border-brand-accent p-4 mb-6 shadow-lg">
                <h4 className="text-lg md:text-xl font-bold text-brand-accent flex items-center gap-2 mb-1.5"><i className="fas fa-hands-helping"></i> Namaste Friends!</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-0 text-xs md:text-sm">
                  My name is <strong className="text-gray-900 dark:text-white">Arun Singh</strong>, and I am from <strong className="text-gray-900 dark:text-white">Gopalganj, Bihar</strong>.
                  I want to share something very important that can save you from major financial losses.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-red-900/50 bg-red-950/20 h-full flex flex-col rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
                  <div className="bg-red-500 text-gray-900 dark:text-white p-3 font-bold flex items-center gap-2 text-xs md:text-sm">
                    <i className="fas fa-exclamation-circle"></i> Problems I Witnessed
                  </div>
                  <div className="p-4 text-xs md:text-sm">
                    <ul className="space-y-2">
                      {['GDA procedures unknown', 'Master plan confusion', 'Khasra verification issues', 'Wrong circle rate info', 'Broker exploitation', 'Legal complications'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 border-b border-red-900/20 pb-1.5 last:border-0 last:pb-0">
                          <i className="fas fa-times text-red-500 text-base"></i> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border border-green-900/50 bg-green-950/20 h-full flex flex-col rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
                  <div className="bg-green-500 text-gray-900 dark:text-white p-3 font-bold flex items-center gap-2 text-xs md:text-sm">
                    <i className="fas fa-lightbulb"></i> Our Solution
                  </div>
                  <div className="p-4 text-xs md:text-sm">
                    <ul className="space-y-2">
                      {['Complete verification service', 'Government record access', 'Transparent process', 'Affordable pricing', 'Expert guidance', 'Peace of mind'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 border-b border-green-900/20 pb-1.5 last:border-0 last:pb-0">
                          <i className="fas fa-check text-green-500 text-base"></i> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-100 dark:bg-brand-dark border border-brand-accent/30 p-5 md:p-6 text-center rounded-xl shadow-[0_10px_30px_rgba(245,158,11,0.1)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h5 className="text-lg md:text-xl font-black text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2 relative z-10"><i className="fas fa-bullseye text-brand-accent"></i> Our Mission</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed italic mb-0 relative z-10 font-light px-2">
                  "To provide complete and accurate property verification so that no family
                  from Bihar faces financial loss while buying land in Gorakhpur."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid (What We Offer) */}
      <div className="bg-white dark:bg-[#0a0f1e] py-10 md:py-14 border-y border-amber-200 dark:border-white/5 relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-accent tracking-tight">
              What We Offer
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold">Complete property verification solutions at one place</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { title: 'Document Verification', icon: 'fa-file-invoice', desc: 'Complete legal status check from government records' },
              { title: 'Government Records', icon: 'fa-university', desc: 'Direct access to official government databases' },
              { title: 'Transparent Process', icon: 'fa-eye', desc: 'Clear and honest reporting system' },
              { title: 'Affordable Pricing', icon: 'fa-rupee-sign', desc: 'Quality service starting from just ₹3,000' }
            ].map((srv, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="bg-amber-100 dark:bg-brand-dark border border-amber-200 dark:border-white/10 hover:border-brand-accent/50 p-5 md:p-6 text-center h-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group rounded-none">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/20 transition-colors"></div>
                  
                  <div className="text-3xl mb-4 relative z-10 text-brand-accent group-hover:scale-110 transition-transform">
                    <i className={`fas ${srv.icon} drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]`}></i>
                  </div>
                  <h6 className="text-base md:text-lg font-bold mb-2 relative z-10 text-gray-900 dark:text-white tracking-wide">{srv.title}</h6>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-0 relative z-10 font-light">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-10 md:py-14 relative overflow-hidden bg-amber-50 dark:bg-brand-dark">
        {/* Background glow decoration */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-brand-dark dark:from-white to-brand-accent tracking-tight">
              Why Choose Us?
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 uppercase tracking-widest font-semibold">Our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-brand-dark text-brand-accent flex items-center justify-center text-xl md:text-2xl mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)] rounded-none border border-brand-accent/20 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300 group-hover:-translate-y-2">
                <i className="fas fa-handshake"></i>
              </div>
              <h5 className="text-base md:text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide group-hover:text-brand-accent transition-colors">Trust & Reliability</h5>
              <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed px-2">Building relationships based on trust and reliable service from verification to registration</p>
            </div>
            <div className="text-center group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-brand-dark text-brand-accent flex items-center justify-center text-xl md:text-2xl mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)] rounded-none border border-brand-accent/20 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300 group-hover:-translate-y-2">
                <i className="fas fa-bullseye"></i>
              </div>
              <h5 className="text-base md:text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide group-hover:text-brand-accent transition-colors">100% Accuracy</h5>
              <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed px-2">Every information is cross-verified thoroughly directly from official sources</p>
            </div>
            <div className="text-center group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-brand-dark text-brand-accent flex items-center justify-center text-xl md:text-2xl mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)] rounded-none border border-brand-accent/20 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300 group-hover:-translate-y-2">
                <i className="fas fa-headset"></i>
              </div>
              <h5 className="text-base md:text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide group-hover:text-brand-accent transition-colors">Customer First</h5>
              <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed px-2">Your satisfaction, peace of mind, and financial safety is our absolute top priority</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;