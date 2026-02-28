import React, { useState, useEffect } from 'react';
import { settingsAPI } from '../services/apiService';

const Pricing = () => {
  const [pricing, setPricing] = useState({
    basic: 3000,
    complete: 5000,
    premium: 8000
  });
  const [phone, setPhone] = useState('+91 9693420595');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await settingsAPI.get();
        if (res.success) {
          setPricing(res.data.pricing);
          setPhone(res.data.contactPhone);
        }
      } catch (err) {
        console.error('Failed to fetch pricing:', err);
      }
    };
    fetchSettings();
  }, []);

  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <div className="container">
        <h1 className="display-4 fw-bold text-center mb-5 text-gradient">Pricing Plans</h1>

        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <p className="lead">
              Protect your investment with our comprehensive property verification services.
              Choose the plan that best suits your needs.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-4">
            <div className="card pricing-card h-100 shadow-custom text-center">
              <div className="card-body p-4">
                <h5 className="card-title">Basic Verification</h5>
                <h3 className="text-primary fw-bold mb-4">₹{pricing.basic.toLocaleString()}</h3>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Khasra-Khata Check</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Basic Document Verification</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Ownership Status</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Report within 3 days</li>
                </ul>
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() => window.open(`tel:${phone.replace(/\s/g, '')}`, '_self')}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card pricing-card featured h-100 shadow-custom text-center">
              <div className="card-body p-4">
                <h5 className="card-title">Complete Verification</h5>
                <h3 className="text-primary fw-bold mb-4">₹{pricing.complete.toLocaleString()}</h3>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i> All Basic features</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i> GDA Master Plan Check</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Circle Rate Information</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Land Demarcation Details</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Report within 2 days</li>
                </ul>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => window.open(`tel:${phone.replace(/\s/g, '')}`, '_self')}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card pricing-card h-100 shadow-custom text-center">
              <div className="card-body p-4">
                <h5 className="card-title">Premium Service</h5>
                <h3 className="text-primary fw-bold mb-4">₹{pricing.premium.toLocaleString()}</h3>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i> All Complete features</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Physical Site Visit</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Legal Consultation</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Market Analysis Report</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Same day report</li>
                </ul>
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() => window.open(`tel:${phone.replace(/\s/g, '')}`, '_self')}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="card bg-warning shadow-custom">
              <div className="card-body p-4 text-center">
                <h4 className="mb-3">Special Offer for Bihar Residents</h4>
                <p className="mb-3">
                  Get 20% discount on any verification package. We understand the challenges
                  faced by people from Bihar when buying property in Gorakhpur.
                </p>
                <p className="mb-0">
                  <strong>Use Code: BIHAR20</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;