import React, { useState, useEffect } from 'react';
import { propertyAPI, settingsAPI } from '../services/apiService';
import Swal from 'sweetalert2';

const VerifyPropertyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyAddress: '',
    propertyType: 'Residential',
    serviceType: 'Basic'
  });

  const [pricing, setPricing] = useState({
    basic: 3000,
    complete: 5000,
    premium: 8000
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await settingsAPI.get();
        if (res.success) {
          setPricing(res.data.pricing);
        }
      } catch (err) {
        console.error('Failed to fetch pricing settings:', err);
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await propertyAPI.create(formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        propertyAddress: '',
        propertyType: 'Residential',
        serviceType: 'Basic'
      });

      Swal.fire({
        icon: 'success',
        title: 'Request Submitted! 🎉',
        html: `
          <div class="text-left">
            <p>Dear <strong>${formData.name}</strong>, your property verification request has been received!</p>
            <div class="bg-gray-50 border-l-4 border-brand-dark p-4 my-4">
              <p class="m-1"><b>Request ID:</b> #${response.data._id}</p>
              <p class="m-1"><b>Service:</b> ${formData.serviceType}</p>
              <p class="m-1"><b>Amount:</b> ₹${getServicePrice(formData.serviceType).toLocaleString()}</p>
            </div>
            <p>Our team will contact you within <strong>24 hours</strong>.</p>
          </div>
        `,
        confirmButtonText: 'Okay, Got it!',
        confirmButtonColor: '#667eea',
        showClass: { popup: 'animate__animated animate__fadeInDown' },
        hideClass: { popup: 'animate__animated animate__fadeOutUp' }
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed!',
        text: err.message || 'Failed to submit request. Please try again.',
        confirmButtonColor: '#667eea'
      });
      setError(err.message || 'Failed to submit request');
    } finally {
      setLoading(false);
    }
  };

  const getServicePrice = (serviceType) => {
    const prices = {
      'Basic': pricing.basic,
      'Complete': pricing.complete,
      'Premium': pricing.premium
    };
    return prices[serviceType] || 0;
  };

  return (
    <div className="bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 relative overflow-hidden rounded-none">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="text-center mb-6 pb-6 border-b border-amber-200 dark:border-white/10 relative z-10">
        <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">Get Property Verification</h3>
        <p className="text-brand-dark dark:text-brand-accent text-[10px] font-bold tracking-[0.15em] uppercase">Fill the form below to start verification</p>
      </div>

      {error && (
        <div className="bg-red-950/40 border border-red-900/50 text-red-500 p-3 mb-5 relative z-10 font-bold text-xs uppercase tracking-widest text-center rounded-none">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-950/40 border border-green-900/50 text-green-400 p-3 mb-5 relative z-10 font-bold text-xs uppercase tracking-widest text-center rounded-none">
          Request submitted successfully! We will contact you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-bold mb-1 text-[10px] uppercase tracking-widest">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="w-full bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/10 text-gray-900 dark:text-white px-3 py-2 text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors rounded-none placeholder-gray-400 dark:placeholder-gray-600"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-bold mb-1 text-[10px] uppercase tracking-widest">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/10 text-gray-900 dark:text-white px-3 py-2 text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors rounded-none placeholder-gray-400 dark:placeholder-gray-600"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-bold mb-1 text-[10px] uppercase tracking-widest">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/10 text-gray-900 dark:text-white px-3 py-2 text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors rounded-none placeholder-gray-400 dark:placeholder-gray-600"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email (optional)"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-bold mb-1 text-[10px] uppercase tracking-widest">
              Your Address
            </label>
            <input
              type="text"
              name="address"
              className="w-full bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/10 text-gray-900 dark:text-white px-3 py-2 text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors rounded-none placeholder-gray-400 dark:placeholder-gray-600"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your current address"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-600 dark:text-gray-300 font-bold mb-1 text-[10px] uppercase tracking-widest">
            Property Address <span className="text-red-500">*</span>
          </label>
          <textarea
            name="propertyAddress"
            className="w-full bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/10 text-gray-900 dark:text-white px-3 py-2 text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors resize-none rounded-none placeholder-gray-400 dark:placeholder-gray-600"
            rows="2"
            value={formData.propertyAddress}
            onChange={handleChange}
            required
            placeholder="Enter complete property address in Gorakhpur"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-bold mb-1 text-[10px] uppercase tracking-widest">
              Property Type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="propertyType"
                className="w-full bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/10 text-gray-900 dark:text-white px-3 py-2 text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors appearance-none rounded-none"
                value={formData.propertyType}
                onChange={handleChange}
                required
              >
                <option value="Residential" className="bg-white dark:bg-[#0a0f1e] text-gray-900 dark:text-white">Residential</option>
                <option value="Commercial" className="bg-white dark:bg-[#0a0f1e] text-gray-900 dark:text-white">Commercial</option>
                <option value="Agricultural" className="bg-white dark:bg-[#0a0f1e] text-gray-900 dark:text-white">Agricultural</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-accent">
                <i className="fas fa-chevron-down text-[10px]"></i>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-bold mb-1 text-[10px] uppercase tracking-widest">
              Service Type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="serviceType"
                className="w-full bg-white dark:bg-[#0a0f1e] border border-amber-200 dark:border-white/10 text-gray-900 dark:text-white px-3 py-2 text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors appearance-none rounded-none"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="Basic" className="bg-white dark:bg-[#0a0f1e] text-gray-900 dark:text-white">Basic Verification - ₹{pricing.basic.toLocaleString()}</option>
                <option value="Complete" className="bg-white dark:bg-[#0a0f1e] text-gray-900 dark:text-white">Complete Verification - ₹{pricing.complete.toLocaleString()}</option>
                <option value="Premium" className="bg-white dark:bg-[#0a0f1e] text-gray-900 dark:text-white">Premium Service - ₹{pricing.premium.toLocaleString()}</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-accent">
                <i className="fas fa-chevron-down text-[10px]"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-[#0a192f] border border-amber-200 dark:border-white/5 p-4 mt-4 rounded-none">
          <div className="flex justify-between items-center mb-1">
            <h6 className="font-bold text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-widest">Selected: {formData.serviceType}</h6>
            <p className="font-black text-brand-accent text-lg m-0">₹{getServicePrice(formData.serviceType).toLocaleString()}</p>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 m-0 border-t border-amber-200 dark:border-white/5 pt-2 mt-2">
            {formData.serviceType === 'Basic' && 'Basic document verification and legal status check.'}
            {formData.serviceType === 'Complete' && 'Complete verification with detailed report and recommendations.'}
            {formData.serviceType === 'Premium' && 'Premium service with site visit and comprehensive analysis.'}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-amber-200 dark:border-white/5">
          <button
            type="submit"
            className="w-full bg-brand-accent text-gray-900 hover:bg-yellow-400 border border-brand-accent px-6 py-3 font-black text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all rounded-none flex justify-center items-center gap-2 disabled:opacity-70"
            disabled={loading}
          >
            {loading ? (
              <><svg className="animate-spin h-4 w-4 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> SUBMITTING...</>
            ) : (
              <><i className="fas fa-check-circle"></i> SUBMIT REQUEST</>
            )}
          </button>
        </div>
      </form>

      <div className="text-center mt-4 relative z-10">
        <small className="text-gray-500 font-semibold text-[9px] uppercase tracking-widest flex items-center justify-center gap-1.5">
          <i className="fas fa-lock text-brand-accent/50 text-[10px]"></i>
          Secure & Confidential Property Verification
        </small>
      </div>
    </div>
  );
};

export default VerifyPropertyForm;
