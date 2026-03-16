import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Government Verified',
      description: 'All information verified from official government records',
      color: '#667eea'
    },
    {
      icon: 'fas fa-check-circle',
      title: '100% Accurate',
      description: 'Comprehensive verification with detailed reporting',
      color: '#43e97b'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Quick Response',
      description: 'Get your verification report within 24-48 hours',
      color: '#f093fb'
    },
    {
      icon: 'fas fa-eye',
      title: 'Transparent Process',
      description: 'Clear and honest reporting system with no hidden charges',
      color: '#4facfe'
    },
    {
      icon: 'fas fa-user-graduate',
      title: 'Expert Guidance',
      description: 'Professional advice from property verification experts',
      color: '#764ba2'
    },
    {
      icon: 'fas fa-wallet',
      title: 'Affordable Pricing',
      description: 'Quality service starting from just ₹3,000',
      color: '#38f9d7'
    }
  ];

  return (
    <div className="why-choose-us-section py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Why Choose Us?
          </h2>
          <p className="lead text-muted">
            Our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm text-center"
                style={{
                  transition: 'all 0.3s ease',
                  borderRadius: '15px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
                }}>
                <div className="card-body p-4">
                  <div className="mb-3">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: '70px',
                        height: '70px',
                        backgroundColor: feature.color + '20',
                        fontSize: '2rem',
                        color: feature.color
                      }}>
                      <i className={feature.icon}></i>
                    </div>
                  </div>
                  <h5 className="card-title fw-bold mb-3" style={{ color: '#2c3e50' }}>
                    {feature.title}
                  </h5>
                  <p className="card-text text-muted">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="row mt-5 text-center">
          <div className="col-12">
            <div className="card border-0 shadow-lg" style={{
              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              borderRadius: '20px'
            }}>
              <div className="card-body p-5">
                <h3 className="mb-4 fw-bold text-dark">Our Track Record</h3>
                <div className="row g-4">
                  <div className="col-md-3 col-6">
                    <div className="stat-item">
                      <div className="h2 text-primary fw-bold mb-1">500+</div>
                      <p className="mb-0 text-muted">Properties Verified</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="stat-item">
                      <div className="h2 text-success fw-bold mb-1">100%</div>
                      <p className="mb-0 text-muted">Accurate Reports</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="stat-item">
                      <div className="h2 text-warning fw-bold mb-1">24hrs</div>
                      <p className="mb-0 text-muted">Quick Response</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="stat-item">
                      <div className="h2 text-info fw-bold mb-1">₹3K</div>
                      <p className="mb-0 text-muted">Starting Price</p>
                    </div>
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

export default WhyChooseUs;