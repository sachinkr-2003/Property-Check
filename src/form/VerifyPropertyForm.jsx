import React, { useState, useEffect } from 'react';
import { propertyAPI, settingsAPI } from '../services/apiService';

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

      // Show success message
      alert(`Request submitted successfully! Request ID: #${response.data._id}`);
    } catch (err) {
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
    <div className="glass-card rounded-4 p-4 p-md-5">
      <div className="text-center mb-4">
        <h3 className="fw-bold mb-2">Get Property Verification</h3>
        <p className="text-muted">Fill the form below to start your property verification process</p>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {success && (
        <div className="alert alert-success" role="alert">
          Request submitted successfully! We will contact you within 24 hours.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Your Name *</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email (optional)"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Your Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your current address"
            />
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold">Property Address *</label>
            <textarea
              name="propertyAddress"
              className="form-control"
              rows="3"
              value={formData.propertyAddress}
              onChange={handleChange}
              required
              placeholder="Enter complete property address in Gorakhpur"
            ></textarea>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Property Type *</label>
            <select
              name="propertyType"
              className="form-select"
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Agricultural">Agricultural</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Service Type *</label>
            <select
              name="serviceType"
              className="form-select"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <option value="Basic">Basic Verification - ₹{pricing.basic.toLocaleString()}</option>
              <option value="Complete">Complete Verification - ₹{pricing.complete.toLocaleString()}</option>
              <option value="Premium">Premium Service - ₹{pricing.premium.toLocaleString()}</option>
            </select>
          </div>

          <div className="col-12">
            <div className="bg-light p-3 rounded">
              <h6 className="fw-bold mb-2">Selected Service: {formData.serviceType}</h6>
              <p className="mb-1"><strong>Amount: ₹{getServicePrice(formData.serviceType).toLocaleString()}</strong></p>
              <small className="text-muted">
                {formData.serviceType === 'Basic' && 'Basic document verification and legal status check'}
                {formData.serviceType === 'Complete' && 'Complete verification with detailed report and recommendations'}
                {formData.serviceType === 'Premium' && 'Premium service with site visit and comprehensive analysis'}
              </small>
            </div>
          </div>

          <div className="col-12">
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane me-2"></i>
                    Submit Verification Request
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="text-center mt-4">
        <small className="text-muted">
          <i className="fas fa-shield-check me-1"></i>
          Your information is secure and will only be used for property verification
        </small>
      </div>
    </div>
  );
};

export default VerifyPropertyForm;