import React, { useState, useEffect } from 'react';
import { settingsAPI, propertyAPI } from '../services/apiService';
import Swal from 'sweetalert2';
import aboutImage from '../assets/about.jpeg';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [settings, setSettings] = useState({
    contactEmail: 'info@gorakhpurpropertycheck.com',
    contactPhone: '+91 9693420595',
    address: 'Third Floor, Yashodhara Complex, Near PSC Camp, Gorakhpur',
    whatsappNumber: '919693420595'
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    settingsAPI.get().then(res => { if (res.success) setSettings(res.data); }).catch(() => {});
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await propertyAPI.createContact(formData);
      setFormData({ name: '', phone: '', email: '', message: '' });
      Swal.fire({
        icon: 'success',
        title: 'Message Sent! 🎉',
        html: `<p>Thank you <strong>${formData.name}</strong>!<br/>We will contact you within <strong>24 hours</strong>.</p>`,
        confirmButtonText: 'Great!',
        confirmButtonColor: '#667eea',
        background: '#fff',
        showClass: { popup: 'animate__animated animate__fadeInDown' },
        hideClass: { popup: 'animate__animated animate__fadeOutUp' }
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: err.message || 'Failed to send message. Please try again.',
        confirmButtonColor: '#667eea'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-brand-dark transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="bg-white dark:bg-[#0a0f1e] pt-36 md:pt-44 pb-28 md:pb-32 text-gray-900 dark:text-white relative overflow-hidden border-b border-amber-200 dark:border-white/5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10" data-aos="fade-up">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-orange-50 dark:bg-[#0a192f] border-2 border-brand-accent/50 text-brand-accent font-bold px-4 py-1.5 text-[10px] md:text-sm tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(245,158,11,0.15)] rounded-none">
              <i className="fas fa-shield-check text-brand-accent/70"></i> Professional Property Verification Service
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-black mb-3 tracking-tight">
            Verify <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">Your Property</span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to verify your property? Get in touch with our experienced team for professional property verification services in Gorakhpur.
          </p>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-brand-dark relative z-20 pb-8">
        {/* Background glow decoration */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10 -mt-16 md:-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-4 flex flex-col" data-aos="fade-right">
              <div className="bg-white dark:bg-[#0a0f1e] shadow-[0_30px_60px_rgba(0,0,0,0.6)] p-5 lg:p-6 border border-amber-200 dark:border-white/5 rounded-none h-full flex flex-col">
                
                {/* Profile Header */}
                <div className="text-center mb-4 pb-4 border-b border-amber-200 dark:border-white/10 shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto border-2 border-brand-accent/60 shadow-[0_0_20px_rgba(245,158,11,0.2)] rounded-none overflow-hidden mb-3 relative group">
                    <img 
                      src={aboutImage} 
                      alt="Arun Singh" 
                      className="w-full h-full object-cover object-top filter contrast-110 group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <h4 className="text-lg md:text-xl font-black text-gray-900 dark:text-white mb-1 tracking-tight">Arun Singh</h4>
                  <p className="text-brand-accent text-[9px] font-bold tracking-[0.2em] uppercase mb-2">Founder & Expert</p>
                  <span className="inline-block bg-green-950/40 border border-green-900/50 text-green-400 px-3 py-1 font-bold uppercase tracking-widest text-[8px] md:text-[9px] rounded-none shadow-sm">
                    5+ Years Experience
                  </span>
                </div>
                
                {/* Contact Info Cards */}
                <div className="space-y-2 mb-4 flex-grow">
                  {[
                    { bg: 'bg-orange-50 dark:bg-[#0a192f]', icon: 'fa-phone-alt', label: 'Phone Number', value: settings.contactPhone },
                    { bg: 'bg-orange-50 dark:bg-[#0a192f]', icon: 'fa-envelope', label: 'Email Address', value: settings.contactEmail },
                    { bg: 'bg-orange-50 dark:bg-[#0a192f]', icon: 'fa-map-marker-alt', label: 'Office Address', value: settings.address }
                  ].map((item, i) => (
                    <div key={i} className={`flex flex-col p-3 ${item.bg} border-l-2 border-transparent hover:border-brand-accent rounded-none hover:bg-amber-100 dark:bg-[#0c1f3a] transition-all duration-300 group shadow-[0_10px_20px_rgba(0,0,0,0.2)]`}>
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-6 h-6 flex items-center justify-center bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/5 rounded-none shrink-0 group-hover:bg-brand-accent transition-colors">
                          <i className={`fas ${item.icon} text-brand-accent text-[10px] group-hover:text-white dark:text-[#0a0f1e]`}></i>
                        </div>
                        <small className="text-gray-400 font-bold uppercase tracking-[0.15em] text-[9px] group-hover:text-gray-600 dark:text-gray-300 transition-colors">{item.label}</small>
                      </div>
                      <strong className="text-gray-200 text-xs pl-8 break-all">{item.value}</strong>
                    </div>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="grid gap-2 shrink-0 mt-2">
                  <button 
                    className="w-full bg-orange-50 dark:bg-[#0a192f] border border-amber-200 dark:border-white/10 text-gray-900 dark:text-white hover:border-brand-accent/50 hover:bg-brand-accent hover:text-white dark:text-[#0a0f1e] px-4 py-3 font-black text-[10px] uppercase tracking-widest transition-all rounded-none flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(245,158,11,0.0)] hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                    onClick={() => window.open(`tel:${settings.contactPhone.replace(/\s/g, '')}`, '_self')}
                  >
                    <i className="fas fa-phone-alt text-sm"></i> Call Now
                  </button>
                  <button 
                    className="w-full bg-orange-50 dark:bg-[#0a192f] border border-green-500/30 text-green-400 hover:border-green-500 hover:bg-green-500 hover:text-white dark:text-[#0a0f1e] px-4 py-3 font-black text-[10px] uppercase tracking-widest transition-all rounded-none flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(34,197,94,0.0)] hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                    onClick={() => window.open(`https://wa.me/${settings.whatsappNumber}?text=Hi, I want to verify my property in Gorakhpur`, '_blank')}
                  >
                    <i className="fab fa-whatsapp text-sm"></i> WhatsApp
                  </button>
                </div>
              </div>
            </div>

          {/* Contact Form */}
          <div className="lg:col-span-8 flex flex-col" data-aos="fade-left">
            <div className="bg-amber-100 dark:bg-brand-dark shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-amber-200 dark:border-white/5 rounded-none flex flex-col">
              <div className="bg-white dark:bg-[#0a0f1e] p-5 text-gray-900 dark:text-white relative overflow-hidden border-b border-amber-200 dark:border-white/5">
                <div className="absolute top-0 right-0 opacity-10 transform scale-150 -translate-y-1/4 translate-x-1/4 text-8xl">
                  <i className="fas fa-envelope-open-text text-brand-accent"></i>
                </div>
                <h3 className="text-xl font-black mb-1 relative z-10"><i className="fas fa-edit mr-3 text-brand-accent"></i> Send a Message</h3>
                <p className="text-gray-400 text-xs relative z-10 m-0 tracking-wide font-light">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-600 dark:text-gray-300 font-bold mb-1 text-[10px] uppercase tracking-widest">
                          <i className="fas fa-user text-brand-accent/70 mr-1"></i>Your Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          name="name" 
                          className="w-full bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/10 text-gray-900 dark:text-white px-3 py-2 text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors rounded-none placeholder-gray-400 dark:placeholder-gray-600" 
                          placeholder="Your full name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 dark:text-gray-300 font-bold mb-1 text-[10px] uppercase tracking-widest">
                          <i className="fas fa-mobile-alt text-brand-accent/70 mr-1"></i>Mobile <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="tel" 
                          name="phone" 
                          className="w-full bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/10 text-gray-900 dark:text-white px-3 py-2 text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors rounded-none placeholder-gray-400 dark:placeholder-gray-600" 
                          placeholder="WhatsApp number" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-600 dark:text-gray-300 font-bold mb-1 text-[10px] uppercase tracking-widest">
                        <i className="fas fa-envelope text-brand-accent/70 mr-1"></i>Email Address
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        className="w-full bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/10 text-gray-900 dark:text-white px-3 py-2 text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors rounded-none placeholder-gray-400 dark:placeholder-gray-600" 
                        placeholder="Your email address" 
                        value={formData.email} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-600 dark:text-gray-300 font-bold mb-1 text-[10px] uppercase tracking-widest">
                        <i className="fas fa-comment-alt text-brand-accent/70 mr-1"></i>Message <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        name="message" 
                        rows="3" 
                        className="w-full bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/10 text-gray-900 dark:text-white px-3 py-2 text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors resize-none rounded-none placeholder-gray-400 dark:placeholder-gray-600" 
                        placeholder="Tell us about your property verification requirements..." 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="text-right pt-6 mt-6 border-t border-amber-200 dark:border-white/5">
                    <button 
                      type="submit" 
                      className="w-full md:w-auto inline-flex items-center justify-center bg-brand-accent text-white dark:text-[#0a0f1e] hover:bg-yellow-400 border border-brand-accent px-8 py-3 font-black text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all rounded-none disabled:opacity-70 disabled:cursor-not-allowed" 
                      disabled={loading}
                    >
                      {loading ? (
                        <><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white dark:text-[#0a0f1e]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> SENDING...</>
                      ) : (
                        <><i className="fas fa-rocket mr-3"></i> SEND MESSAGE</>
                      )}
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Map Embedded under form */}
              <div className="p-2 bg-white dark:bg-[#0a0f1e] border-t border-amber-200 dark:border-white/5">
                <iframe
                  title="Gorakhpur Property Check Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113947.25867167732!2d83.29828456208643!3d26.732385108422452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f97fdcc6bfa2!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[30%] contrast-110 opacity-90 transition-opacity hover:opacity-100 rounded-none"
                ></iframe>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);
};

export default Contact;
