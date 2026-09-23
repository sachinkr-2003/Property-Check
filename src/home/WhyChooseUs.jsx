import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Government Verified',
      description: 'All information verified from official government records',
      color: 'text-blue-500'
    },
    {
      icon: 'fas fa-check-circle',
      title: '100% Accurate',
      description: 'Comprehensive verification with detailed reporting',
      color: 'text-green-500'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Quick Response',
      description: 'Get your verification report within 24-48 hours',
      color: 'text-yellow-500'
    },
    {
      icon: 'fas fa-eye',
      title: 'Transparent Process',
      description: 'Clear and honest reporting system with no hidden charges',
      color: 'text-cyan-500'
    },
    {
      icon: 'fas fa-user-graduate',
      title: 'Expert Guidance',
      description: 'Professional advice from property verification experts',
      color: 'text-purple-500'
    },
    {
      icon: 'fas fa-wallet',
      title: 'Affordable Pricing',
      description: 'Quality service starting from just ₹3,000',
      color: 'text-teal-500'
    }
  ];

  return (
    <div className="py-8 md:py-16 bg-amber-50 dark:bg-brand-dark transition-colors duration-300 relative overflow-hidden">
      {/* Abstract Background for dark theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden dark:block">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-brand-dark/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12" data-aos="fade-up">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent mb-4">
              <span className="font-semibold tracking-wider text-[11px] uppercase">Our Value Proposition</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white m-0 tracking-tight">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-500">Choose Us?</span>
            </h2>
          </div>
          <div className="max-w-md text-left lg:text-right border-l-4 lg:border-l-0 lg:border-r-4 border-brand-accent/40 pl-4 lg:pl-0 lg:pr-5 py-1">
            <p className="text-gray-600 dark:text-gray-400 m-0 text-sm sm:text-base leading-relaxed">
              Our commitment to excellence and customer satisfaction. All information verified from official government records with 100% accuracy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="h-full bg-amber-100 dark:bg-white/5 dark:bg-amber-100 dark:bg-white/5 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-300 dark:border-white/20 dark:border-amber-200 dark:border-white/10 p-5 sm:p-6 rounded-none group flex flex-col items-center text-center relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-4 bg-brand-dark/50 border border-amber-200 dark:border-white/10 flex items-center justify-center rounded-none group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 z-10 shadow-lg">
                  <i className={`${feature.icon} text-xl sm:text-2xl ${feature.color} group-hover:animate-bounce`}></i>
                </div>
                
                <h5 className="text-base sm:text-lg font-extrabold text-gray-900 dark:text-white mb-2 z-10 transition-colors">
                  {feature.title}
                </h5>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium z-10 transition-colors m-0 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-brand-accent w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12" data-aos="zoom-in">
          <div className="bg-gradient-to-r from-brand-dark to-brand-accent dark:from-brand-dark dark:to-brand-dark/80 border border-amber-200 dark:border-white/10 shadow-2xl p-6 md:p-8 lg:p-10 rounded-none relative overflow-hidden">
            
            <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-center text-white">Our Track Record</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-extrabold text-brand-accent mb-2">500+</div>
                <p className="text-white/80 font-medium tracking-wide">Properties Verified</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-extrabold text-green-400 mb-2">100%</div>
                <p className="text-white/80 font-medium tracking-wide">Accurate Reports</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-extrabold text-brand-accent mb-2">24hrs</div>
                <p className="text-white/80 font-medium tracking-wide">Quick Response</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">₹3K</div>
                <p className="text-white/80 font-medium tracking-wide">Starting Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
