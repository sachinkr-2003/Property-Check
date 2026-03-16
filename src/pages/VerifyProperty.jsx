import React from 'react';
import VerifyPropertyForm from '../form/VerifyPropertyForm';

const VerifyProperty = () => {
  return (
    <div className="verify-property-page" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh'
    }}>
      <style>
        {`
          @keyframes slideUpFromBottom {
            0% {
              opacity: 0;
              transform: translateY(100px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideUpStagger {
            0% {
              opacity: 0;
              transform: translateY(80px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .slide-up {
            animation: slideUpFromBottom 0.8s ease-out;
          }
          .slide-up-stagger {
            animation: slideUpStagger 0.6s ease-out;
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center mb-5 slide-up">
              <div className="badge bg-warning text-dark mb-3 px-3 py-2">
                <i className="fas fa-trophy me-2"></i> Professional Property Verification Service
              </div>
              <h1 className="display-3 fw-bold mb-4 text-white">
                Verify Your <span className="text-warning">Property</span>
              </h1>
              <p className="lead text-white-50 mb-4">
                Get complete property verification with 100% government record accuracy.
                Trusted by 500+ families across Bihar.
              </p>

              {/* Trust Indicators */}
              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <div className="glass-card rounded-4 p-4 h-100 slide-up-stagger" style={{ animationDelay: '0.2s' }}>
                    <div className="text-primary mb-3">
                      <i className="fas fa-bolt" style={{ fontSize: '2.5rem' }}></i>
                    </div>
                    <h5 className="fw-bold mb-2">Quick Response</h5>
                    <p className="text-muted mb-0">Get your verification report within 1-3 days</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="glass-card rounded-4 p-4 h-100 slide-up-stagger" style={{ animationDelay: '0.4s' }}>
                    <div className="text-success mb-3">
                      <i className="fas fa-university" style={{ fontSize: '2.5rem' }}></i>
                    </div>
                    <h5 className="fw-bold mb-2">Government Records</h5>
                    <p className="text-muted mb-0">All information from official sources</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="glass-card rounded-4 p-4 h-100 slide-up-stagger" style={{ animationDelay: '0.6s' }}>
                    <div className="text-warning mb-3">
                      <i className="fas fa-shield-alt" style={{ fontSize: '2.5rem' }}></i>
                    </div>
                    <h5 className="fw-bold mb-2">100% Secure</h5>
                    <p className="text-muted mb-0">Your data is completely protected</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="slide-up-stagger" style={{ animationDelay: '0.8s' }}>
              <VerifyPropertyForm />
            </div>

            {/* Process Steps */}
            <div className="mt-5 slide-up-stagger" style={{ animationDelay: '1s' }}>
              <div className="glass-card rounded-4 p-5">
                <h3 className="text-center mb-4 fw-bold">Our Verification Process</h3>
                <div className="row g-4">
                  <div className="col-md-3 text-center">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                      <span className="fw-bold">1</span>
                    </div>
                    <h6 className="fw-bold">Submit Form</h6>
                    <small className="text-muted">Fill out property details</small>
                  </div>
                  <div className="col-md-3 text-center">
                    <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                      <span className="fw-bold">2</span>
                    </div>
                    <h6 className="fw-bold">Document Review</h6>
                    <small className="text-muted">Expert analysis begins</small>
                  </div>
                  <div className="col-md-3 text-center">
                    <div className="bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                      <span className="fw-bold">3</span>
                    </div>
                    <h6 className="fw-bold">Verification</h6>
                    <small className="text-muted">Government record check</small>
                  </div>
                  <div className="col-md-3 text-center">
                    <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                      <span className="fw-bold">4</span>
                    </div>
                    <h6 className="fw-bold">Report Delivery</h6>
                    <small className="text-muted">Detailed report sent</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyProperty;