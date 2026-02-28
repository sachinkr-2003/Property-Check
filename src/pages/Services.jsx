import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🏛️',
      title: 'Complete Property Verification',
      description: 'Comprehensive property document verification and legal status check from official government records with detailed analysis.',
      features: ['Document authenticity verification', 'Legal status confirmation', 'Ownership history analysis', 'Encumbrance certificate check'],
      price: '₹5,000',
      duration: '2-3 Days'
    },
    {
      icon: '📋',
      title: 'Khasra-Khata Verification',
      description: 'Complete information extraction from revenue records including Khasra, Khata, survey numbers, and land classification details.',
      features: ['Khasra number verification', 'Khata number validation', 'Land survey records', 'Classification details'],
      price: '₹3,000',
      duration: '1-2 Days'
    },
    {
      icon: '🗺️',
      title: 'Master Plan Verification',
      description: 'Land status verification in GDA/Development Authority master plan to ensure compliance with approved development regulations.',
      features: ['Master plan status check', 'Development permissions', 'Zoning compliance', 'Future planning insights'],
      price: '₹4,000',
      duration: '2-3 Days'
    },
    {
      icon: '💼',
      title: 'Premium Due Diligence',
      description: 'Complete property due diligence including market analysis, legal verification, and investment advisory services.',
      features: ['Market rate analysis', 'Legal compliance check', 'Investment advisory', 'Risk assessment report'],
      price: '₹8,000',
      duration: '3-5 Days'
    }
  ];

  return (
    <div className="services-page" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', minHeight: '100vh' }}>
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in-up {
            animation: fadeInUp 0.8s ease-out;
          }
          .service-card {
            transition: all 0.4s ease;
            border: 1px solid rgba(0,0,0,0.08);
          }
          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
          }
          .classical-bg {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          }
        `}
      </style>
      
      {/* Hero Section */}
      <div className="classical-bg text-white py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center fade-in-up">
              <div className="mb-4">
                <span className="badge bg-warning text-dark px-3 py-2 fs-6 mb-3">
                  🏆 Professional Property Services
                </span>
              </div>
              <h1 className="display-3 fw-bold mb-4">
                Our <span className="text-warning">Expert</span> Services
              </h1>
              <p className="lead mb-4 text-white-50">
                Comprehensive property verification services backed by government records,
                designed specifically for Bihar residents investing in Gorakhpur properties.
              </p>
              <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                <div className="d-flex align-items-center">
                  <span className="text-warning me-2">✓</span>
                  <span>Government Verified</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="text-warning me-2">✓</span>
                  <span>500+ Satisfied Clients</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="text-warning me-2">✓</span>
                  <span>Quick Turnaround</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container py-5">
        <div className="row g-4 mb-5">
          {services.map((service, index) => (
            <div key={index} className="col-lg-6 col-md-6 fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="card service-card h-100 border-0 shadow-sm bg-white">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="me-3">
                      <div className="bg-light rounded-circle p-3 d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                        <span style={{fontSize: '1.5rem'}}>{service.icon}</span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="card-title fw-bold mb-2 text-dark">{service.title}</h5>
                      <div className="d-flex gap-3 mb-3">
                        <span className="badge bg-success px-2 py-1">{service.price}</span>
                        <span className="badge bg-info px-2 py-1">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted mb-4 lh-base">{service.description}</p>
                  <div className="mb-4">
                    <h6 className="fw-semibold mb-3 text-dark">Service Includes:</h6>
                    <ul className="list-unstyled">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="mb-2 d-flex align-items-start">
                          <span className="text-success me-2 mt-1">✓</span>
                          <span className="text-dark">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-outline-primary px-4 py-2 fw-semibold">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg classical-bg text-white">
              <div className="card-body p-5">
                <div className="text-center mb-5">
                  <h3 className="fw-bold mb-3">Why Choose Gorakhpur Property Check?</h3>
                  <p className="lead text-white-50 mb-0">
                    Professional property verification services with complete transparency
                  </p>
                </div>
                
                <div className="row g-4 mb-5">
                  <div className="col-md-3 col-sm-6 text-center">
                    <div className="mb-3">
                      <div className="bg-warning bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '70px', height: '70px'}}>
                        <span style={{fontSize: '2rem'}}>🔍</span>
                      </div>
                    </div>
                    <h5 className="text-warning fw-bold mb-2">Transparent Process</h5>
                    <p className="small text-white-50 mb-0">All information sourced from official government records</p>
                  </div>
                  <div className="col-md-3 col-sm-6 text-center">
                    <div className="mb-3">
                      <div className="bg-warning bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '70px', height: '70px'}}>
                        <span style={{fontSize: '2rem'}}>⚡</span>
                      </div>
                    </div>
                    <h5 className="text-warning fw-bold mb-2">Quick Delivery</h5>
                    <p className="small text-white-50 mb-0">Fast turnaround time with detailed reports</p>
                  </div>
                  <div className="col-md-3 col-sm-6 text-center">
                    <div className="mb-3">
                      <div className="bg-warning bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '70px', height: '70px'}}>
                        <span style={{fontSize: '2rem'}}>🛡️</span>
                      </div>
                    </div>
                    <h5 className="text-warning fw-bold mb-2">100% Accurate</h5>
                    <p className="small text-white-50 mb-0">Government verified information with accuracy guarantee</p>
                  </div>
                  <div className="col-md-3 col-sm-6 text-center">
                    <div className="mb-3">
                      <div className="bg-warning bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '70px', height: '70px'}}>
                        <span style={{fontSize: '2rem'}}>💰</span>
                      </div>
                    </div>
                    <h5 className="text-warning fw-bold mb-2">Fair Pricing</h5>
                    <p className="small text-white-50 mb-0">Protect your investment with minimal verification cost</p>
                  </div>
                </div>
                
                <div className="text-center border-top border-secondary pt-4">
                  <blockquote className="blockquote mb-4">
                    <p className="fs-5 fst-italic text-white-50 mb-0">
                      "Smart property investment starts with proper verification. Don't let emotions override facts."
                    </p>
                  </blockquote>
                  <button 
                    className="btn btn-warning btn-lg px-5 py-3 fw-bold text-dark"
                    onClick={() => window.open('tel:+919693420595', '_self')}
                  >
                    Start Verification Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;