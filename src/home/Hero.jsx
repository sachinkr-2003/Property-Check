import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { settingsAPI } from '../services/apiService';

const Hero = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('+91 9693420595');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await settingsAPI.get();
        if (res.success) {
          setPhone(res.data.contactPhone);
        }
      } catch (err) {
        console.error('Failed to fetch settings:', err);
      }
    };
    fetchSettings();
  }, []);

  return (
    <div className="hero-section py-5 position-relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '90vh'
    }}>
      <style>
        {`
          @keyframes slideInLeft {
            0% {
              transform: translateX(-100px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes slideInRight {
            0% {
              transform: translateX(100px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .hover-lift:hover {
            transform: translateY(-10px) !important;
            box-shadow: 0 15px 35px rgba(0,0,0,0.2) !important;
          }
        `}
      </style>

      <div className="container">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-6 hero-content">
            <div className="badge bg-warning text-dark mb-3 px-3 py-2" style={{
              animation: 'slideInLeft 1s ease-out',
              transform: 'translateX(-100px)',
              opacity: 0,
              animationFillMode: 'forwards'
            }}>
              <i className="fas fa-trophy me-2"></i> #1 Property Verification Service in Gorakhpur
            </div>

            <h1 className="display-3 fw-bold mb-4 text-white" style={{
              animation: 'slideInLeft 1.2s ease-out',
              transform: 'translateX(-100px)',
              opacity: 0,
              animationFillMode: 'forwards'
            }}>
              Secure Your <span className="text-warning">Property Investment</span>
            </h1>

            <p className="lead mb-4 text-white-50" style={{
              animation: 'slideInLeft 1.4s ease-out',
              transform: 'translateX(-100px)',
              opacity: 0,
              animationFillMode: 'forwards'
            }}>
              Professional property verification with 100% government record accuracy.
              Trusted by 500+ Bihar families for Gorakhpur property purchases.
            </p>

            <div className="d-flex align-items-center mb-4" style={{
              animation: 'slideInLeft 1.6s ease-out',
              transform: 'translateX(-100px)',
              opacity: 0,
              animationFillMode: 'forwards'
            }}>
              <div className="d-flex me-4">
                <img src="https://randomuser.me/api/portraits/men/1.jpg" className="rounded-circle me-1" width="30" height="30" alt="User" />
                <img src="https://randomuser.me/api/portraits/women/2.jpg" className="rounded-circle me-1" width="30" height="30" alt="User" />
                <img src="https://randomuser.me/api/portraits/men/3.jpg" className="rounded-circle me-1" width="30" height="30" alt="User" />
                <div className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center fw-bold" style={{ width: '30px', height: '30px', fontSize: '12px' }}>
                  +500
                </div>
              </div>
              <small className="text-white-50">Trusted by families from Bihar</small>
            </div>

            <div className="d-flex gap-3 flex-wrap" style={{
              animation: 'slideInLeft 1.8s ease-out',
              transform: 'translateX(-100px)',
              opacity: 0,
              animationFillMode: 'forwards'
            }}>
              <button
                className="btn btn-warning btn-lg shadow-custom px-4 py-3"
                onClick={() => navigate('/verify')}
              >
                <i className="fas fa-rocket me-2"></i> Start Verification Now
              </button>
              <button
                className="btn btn-outline-light btn-lg px-4 py-3"
                onClick={() => window.open(`tel:${phone.replace(/\s/g, '')}`, '_self')}
              >
                <i className="fas fa-phone-alt me-2"></i> Call Expert
              </button>
            </div>
          </div>

          <div className="col-lg-6 text-center position-relative" style={{
            animation: 'slideInRight 1.5s ease-out',
            transform: 'translateX(100px)',
            opacity: 0,
            animationFillMode: 'forwards'
          }}>
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Property Verification"
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxHeight: '450px', objectFit: 'cover' }}
              />
              <div className="position-absolute top-0 end-0 bg-success text-white rounded-3 p-3 m-3 shadow">
                <div className="fw-bold"><i className="fas fa-check-circle me-1"></i> Verified</div>
                <small>Government Records</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;