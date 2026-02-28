import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { serviceAPI } from '../services/apiService';

const Services = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await serviceAPI.getAll();
        if (res.success) {
          setServices(res.data);
        }
      } catch (err) {
        console.error('Failed to fetch services:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading Services...</span>
      </div>
    </div>
  );

  return (
    <div className="services-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Our Services
          </h2>
          <p className="lead text-muted">
            Complete property verification solutions at one place
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-6 col-md-6">
              <div className="card h-100 border-0 shadow-lg position-relative overflow-hidden"
                style={{
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  borderRadius: '15px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                  style={{ background: service.gradient }}></div>
                <div className="card-body p-4 position-relative">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3 fs-1 text-primary">
                      <i className={service.icon}></i>
                    </div>
                    <h5 className="card-title mb-0 fw-bold" style={{ color: '#2c3e50' }}>
                      {service.title}
                    </h5>
                  </div>
                  <p className="card-text text-muted mb-4">{service.description}</p>
                  <ul className="list-unstyled">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2 d-flex align-items-center">
                        <i className="fas fa-check me-2 text-success fw-bold"></i>
                        <span className="text-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <div className="card border-0 shadow-lg" style={{
            background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
            borderRadius: '20px'
          }}>
            <div className="card-body p-5 text-white">
              <h3 className="mb-4 fw-bold">Ready to Verify Your Property?</h3>
              <p className="lead mb-4">
                Don't let lack of information cost you lakhs of rupees. Get complete verification today.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <button
                  className="btn btn-warning btn-lg px-5 py-3 fw-bold"
                  onClick={() => navigate('/verify')}
                >
                  <i className="fas fa-rocket me-2"></i> Start Verification
                </button>
                <button
                  className="btn btn-outline-light btn-lg px-5 py-3"
                  onClick={() => window.open('tel:+919693420595', '_self')}
                >
                  <i className="fas fa-phone-alt me-2"></i> Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;