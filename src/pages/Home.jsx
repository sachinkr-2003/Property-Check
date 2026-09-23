import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { testimonialAPI } from '../services/apiService';
import Hero from '../home/Hero';
import Services from '../home/Services';
import WhyChooseUs from '../home/WhyChooseUs';
import TargetAudience from '../home/TargetAudience';

const Home = () => {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await testimonialAPI.getAll();
        if (res.success && res.data && res.data.length > 0) {
          setTestimonials(res.data);
        } else {
          // Fallback static data if DB is empty so UI is visible
          setTestimonials(fallbackTestimonials);
        }
      } catch (err) {
        console.error('Failed to fetch testimonials:', err);
        setTestimonials(fallbackTestimonials);
      }
    };
    fetchTestimonials();
  }, []);

  const fallbackTestimonials = [
    {
      name: "Rajesh Kumar",
      location: "Patna, Bihar",
      rating: 5,
      text: "Gorakhpur Property Check saved me from a major legal dispute. Being from Patna, it was impossible to verify local records. Their complete property report was an eye opener and helped me make a safe investment.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sandeep Mishra",
      location: "Muzaffarpur, Bihar",
      rating: 5,
      text: "The team is very professional. I was planning to buy a plot in GDA area but had no local knowledge. Their verification report showed the exact circle rate and land status within 24 hours.",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "Amitabh Singh",
      location: "Siwan, Bihar",
      rating: 5,
      text: "Extremely transparent service. I avoided a broker trap thanks to their exact Khasra verification. I highly recommend to every Bihar resident looking for a secure investment in Gorakhpur.",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  return (
    <div className="bg-amber-50 dark:bg-brand-dark transition-colors duration-300">
      <Hero />
      <Services />
      <WhyChooseUs />
      <TargetAudience />

      {/* Testimonials Section */}
      <div className="py-12 md:py-16 bg-amber-50 dark:bg-brand-dark relative overflow-hidden transition-colors duration-300">
        
        {/* Abstract Background for dark theme */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden dark:block">
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12" data-aos="fade-up">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent mb-4">
                <span className="font-semibold tracking-wider text-[11px] uppercase">Client Experiences</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white m-0 tracking-tight">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-500">Clients Say</span>
              </h2>
            </div>
            <div className="max-w-md text-left lg:text-right border-l-4 lg:border-l-0 lg:border-r-4 border-brand-accent/40 pl-4 lg:pl-0 lg:pr-5 py-1">
              <p className="text-gray-400 m-0 text-sm sm:text-base leading-relaxed">
                Real stories and experiences from our highly satisfied property investors and home buyers.
              </p>
            </div>
          </div>
          
          <style>
            {`
              @keyframes infinite-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-infinite-scroll {
                animation: infinite-scroll 40s linear infinite;
                width: max-content;
              }
              .animate-infinite-scroll:hover {
                animation-play-state: paused;
              }
            `}
          </style>

          <div className="relative overflow-hidden w-full">
            {/* Edge Fade Overlays */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-light dark:from-brand-dark to-transparent z-20 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-light dark:from-brand-dark to-transparent z-20 pointer-events-none"></div>
            
            <div className="flex gap-6 md:gap-8 animate-infinite-scroll py-4">
              {/* Combine array 4 times for a long seamless scrolling track */}
              {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
                <div key={idx} className="w-[320px] md:w-[400px] flex-shrink-0">
                  <div className="h-full bg-amber-100 dark:bg-white/5 dark:bg-amber-100 dark:bg-white/5 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-300 dark:border-white/20 dark:border-amber-200 dark:border-white/10 p-6 md:p-8 rounded-none flex flex-col group relative overflow-hidden">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex gap-1 mb-5 text-brand-accent relative z-10">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <i key={`star-${idx}-${i}`} className="fas fa-star text-sm"></i>
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 dark:text-gray-600 dark:text-gray-300 mb-8 italic flex-grow relative z-10 font-medium leading-relaxed m-0">
                      <span className="text-3xl absolute -top-4 -left-2 text-brand-accent/20 font-serif">"</span>
                      <span className="relative z-10">{testimonial.text}</span>
                    </p>
                    <div className="flex items-center gap-4 mt-auto relative z-10">
                      <img src={testimonial.image} className="w-12 h-12 rounded-full border border-brand-accent/50 object-cover shadow-lg" alt="Client" />
                      <div>
                        <h6 className="font-bold text-gray-900 dark:text-white mb-0 mt-0 text-sm sm:text-base">{testimonial.name}</h6>
                        <small className="text-xs text-brand-accent/80 block mt-0.5">{testimonial.location}</small>
                      </div>
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 h-1 bg-brand-accent w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-16 md:py-20 bg-gradient-to-r from-brand-accent via-yellow-500 to-orange-400 text-brand-dark overflow-hidden relative shadow-[0_-10px_40px_rgba(245,158,11,0.2)]">
        {/* Floating Glass Orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-pulse pointer-events-none delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center" data-aos="zoom-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tight drop-shadow-sm">
              Ready to Secure Your Property Investment?
            </h2>
            <p className="text-base md:text-xl text-brand-dark/90 mb-10 max-w-2xl mx-auto font-bold leading-relaxed">
              Join 500+ satisfied customers who made smart property decisions with our verification service.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/verify"
                className="w-full sm:w-auto bg-brand-dark text-gray-900 dark:text-white font-extrabold text-sm sm:text-base px-6 py-3 rounded-sm shadow-xl hover:-translate-y-1 hover:bg-black transition-all duration-300 flex items-center justify-center gap-3"
              >
                <i className="fas fa-rocket relative z-10"></i> Get Instant Quote
              </Link>
              <button
                className="w-full sm:w-auto border-2 border-brand-dark bg-transparent text-brand-dark hover:bg-brand-dark hover:text-white font-bold text-sm sm:text-base px-6 py-3 rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                onClick={() => window.open('tel:+919693420595', '_self')}
              >
                <i className="fas fa-phone-alt animate-pulse"></i> Call Expert
              </button>
              <button
                className="w-full sm:w-auto bg-green-600 text-gray-900 dark:text-white font-bold text-sm sm:text-base px-6 py-3 rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-3"
                onClick={() => window.open('https://wa.me/919693420595?text=Hi, I want to verify my property in Gorakhpur', '_blank')}
              >
                <i className="fab fa-whatsapp text-lg"></i> WhatsApp Us
              </button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center items-center gap-3 md:gap-5 text-xs sm:text-sm text-brand-dark/80 uppercase tracking-widest font-extrabold">
              <span className="flex items-center gap-2"><i className="fas fa-rupee-sign"></i> Money Back Guarantee</span>
              <span className="hidden sm:inline opacity-50">|</span>
              <span className="flex items-center gap-2"><i className="fas fa-headset"></i> 24/7 Support</span>
              <span className="hidden sm:inline opacity-50">|</span>
              <span className="flex items-center gap-2"><i className="fas fa-bolt"></i> Quick Response</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
