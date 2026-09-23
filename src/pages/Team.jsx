import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import aboutImage from '../assets/about.jpeg';

const Team = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  const teamMembers = [
    {
      name: 'Arun Singh',
      role: 'Founder & CEO',
      image: aboutImage,
      description: 'Visionary leader with over 3+ years of expertise in real estate verification and legal compliance. Specializes in property due diligence, title verification, and ensuring transparent property transactions across Gorakhpur region.',
      expertise: ['Property Law', 'Due Diligence', 'Risk Assessment'],
      linkedin: '#',
      email: 'arun@gorakhpurpropertycheck.com'
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Legal Advisor',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      description: 'Accomplished legal professional with LLM in Property Law. Brings 8+ years of experience in property documentation, title deed verification, and legal advisory services. Expert in handling complex property disputes and registration matters.',
      expertise: ['Property Documentation', 'Title Verification', 'Legal Compliance'],
      linkedin: '#',
      email: 'priya@gorakhpurpropertycheck.com'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Chief Property Consultant',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80',
      description: 'Certified property valuation expert with 10+ years in real estate consulting. Specializes in property assessment, market analysis, and verification of land records. Known for meticulous attention to detail in property inspections.',
      expertise: ['Property Valuation', 'Market Analysis', 'Land Records'],
      linkedin: '#',
      email: 'rajesh@gorakhpurpropertycheck.com'
    }
  ];

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-brand-dark transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="bg-white dark:bg-[#0a0f1e] pt-36 md:pt-40 pb-16 text-gray-900 dark:text-white relative overflow-hidden border-b border-amber-200 dark:border-white/5">
        {/* Background glow behind header */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10" data-aos="zoom-in">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-orange-50 dark:bg-[#0a192f] border-2 border-brand-accent/50 text-brand-accent font-bold px-5 py-2 text-[10px] md:text-sm tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(245,158,11,0.15)] rounded-none">
              <i className="fas fa-users text-brand-accent/70"></i> Meet Our Professionals
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">Expert</span> Team
          </h1>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            Dedicated professionals committed to ensuring secure and transparent property transactions
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-semibold tracking-wider text-gray-600 dark:text-gray-300 uppercase">
            <span className="flex items-center gap-2"><i className="fas fa-check text-brand-accent"></i> 3+ Years Experience</span>
            <span className="flex items-center gap-2"><i className="fas fa-check text-brand-accent"></i> Certified Professionals</span>
            <span className="flex items-center gap-2"><i className="fas fa-check text-brand-accent"></i> 100% Client Satisfaction</span>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="py-10 md:py-14 bg-amber-50 dark:bg-brand-dark relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {teamMembers.map((member, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="bg-white dark:bg-[#0a0f1e] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] transition-all duration-300 border border-amber-200 dark:border-white/5 hover:border-brand-accent/30 h-full flex flex-col group rounded-none">
                  {/* Image & Hover Overlay Container */}
                  <div className="relative overflow-hidden shrink-0 h-[320px]">
                    {/* Background image */}
                    <img 
                      src={member.image} 
                      className="w-full h-full object-cover object-[center_25%] transform group-hover:scale-110 transition-transform duration-700" 
                      alt={member.name} 
                    />

                    {/* Dark Glass Overlay on Hover */}
                    <div className="absolute inset-0 bg-white dark:bg-[#0a0f1e]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none backdrop-blur-sm"></div>
                    
                    {/* Floating Expert Tag (Disappears on hover) */}
                    <div className="absolute top-4 right-4 z-20 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                      <span className="inline-block bg-brand-accent text-white dark:text-[#0a0f1e] px-3 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.4)] rounded-none">
                        <i className="fas fa-star me-1 text-[9px]"></i> Expert
                      </span>
                    </div>

                    {/* BIO & EXPERTISE HOVER OVERLAY (Text) */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
                      <p className="text-gray-100 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                        "{member.description}"
                      </p>
                      <div className="flex flex-wrap justify-center gap-1.5">
                        {member.expertise.map((skill, i) => (
                          <span key={i} className="bg-brand-accent border border-brand-dark text-brand-dark px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded-none shadow-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Persistent Identity Container */}
                  <div className="flex flex-col items-center justify-center bg-orange-50 dark:bg-[#0a192f] border-t border-amber-200 dark:border-white/5 h-24 relative z-10 transition-colors duration-300">
                    <h4 className="text-xl font-black text-gray-900 dark:text-white mb-1 group-hover:text-brand-accent transition-colors text-center">{member.name}</h4>
                    <p className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase text-center mb-0">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12" data-aos="fade-up">
            {[
              { value: '3+', label: 'Years Experience', color: 'text-brand-accent' },
              { value: '800+', label: 'Properties Verified', color: 'text-white' },
              { value: '100%', label: 'Client Satisfaction', color: 'text-brand-accent' },
              { value: '24/7', label: 'Support Available', color: 'text-white' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/5 p-6 md:p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-brand-accent/30 hover:-translate-y-1 transition-all rounded-none group">
                <h2 className={`text-3xl md:text-4xl font-black mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>{stat.value}</h2>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-0">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div data-aos="zoom-in" className="max-w-4xl mx-auto mb-8">
            <div className="bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/5 text-gray-900 dark:text-white p-8 md:p-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden rounded-none">
              <div className="absolute top-0 left-0 w-48 h-48 bg-brand-accent/5 rounded-full blur-[80px] transform -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-widest">Ready to Work With Us?</h3>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto font-light">
                  Get in touch with our expert team for all your property verification needs in Gorakhpur
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-brand-accent text-white dark:text-[#0a0f1e] hover:bg-yellow-400 px-6 py-3 font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] rounded-none flex items-center justify-center">
                    <i className="fas fa-phone mr-3"></i> Contact Us
                  </a>
                  <a href="/verify" className="border border-amber-300 dark:border-white/20 text-gray-900 dark:text-white hover:border-brand-accent/50 hover:text-brand-accent px-6 py-3 font-bold text-sm uppercase tracking-widest transition-all rounded-none flex items-center justify-center">
                    <i className="fas fa-check-circle mr-3"></i> Verify Property
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Team;
