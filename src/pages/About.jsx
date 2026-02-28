import React from 'react';
import aboutImage from '../assets/about.jpeg';

const About = () => {
  return (
    <div className="bg-light min-vh-100">
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
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 order-2 order-lg-1" style={{
              animation: 'slideInLeft 1s ease-out',
              transform: 'translateX(-100px)',
              opacity: 0,
              animationFillMode: 'forwards'
            }}>
              <h1 className="display-4 fw-bold mb-4 fade-in-up">About Gorakhpur Property Check</h1>
              <p className="lead mb-4">Your trusted partner for property verification in Gorakhpur, specially serving families from Bihar</p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge bg-warning text-dark px-3 py-2"><i className="fas fa-trophy me-1"></i> 500+ Properties Verified</span>
                <span className="badge bg-success px-3 py-2"><i className="fas fa-check-circle me-1"></i> 100% Accurate</span>
                <span className="badge bg-info px-3 py-2"><i className="fas fa-bolt me-1"></i> 24hr Response</span>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center" style={{
              animation: 'slideInRight 1.2s ease-out',
              transform: 'translateX(100px)',
              opacity: 0,
              animationFillMode: 'forwards'
            }}>
              <div className="position-relative d-inline-block">
                <img
                  src={aboutImage}
                  alt="Arun Singh"
                  className="img-fluid rounded-circle shadow-lg hover-lift"
                  style={{ width: '280px', height: '280px', objectFit: 'cover' }}
                />
                <div className="position-absolute bottom-0 end-0 bg-success text-white rounded-circle p-2 shadow">
                  <i className="fas fa-check"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container">
          <div className="row text-center g-3">
            <div className="col-6 col-md-3">
              <div className="h4 text-primary mb-1"><i className="fas fa-building me-2"></i>500+</div>
              <small className="text-muted">Properties</small>
            </div>
            <div className="col-6 col-md-3">
              <div className="h4 text-success mb-1"><i className="fas fa-certificate me-2"></i>100%</div>
              <small className="text-muted">Accuracy</small>
            </div>
            <div className="col-6 col-md-3">
              <div className="h4 text-warning mb-1"><i className="fas fa-clock me-2"></i>24hrs</div>
              <small className="text-muted">Response</small>
            </div>
            <div className="col-6 col-md-3">
              <div className="h4 text-info mb-1"><i className="fas fa-wallet me-2"></i>₹3K</div>
              <small className="text-muted">Starting</small>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Story */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0 overflow-hidden">
              <div className="card-header bg-gradient-primary text-white text-center py-4">
                <h2 className="mb-2">Meet Our Founder</h2>
                <div className="badge bg-warning text-dark px-4 py-2 fs-6">
                  <strong>Arun Singh - Property Expert from Gopalganj, Bihar</strong>
                </div>
              </div>
              <div className="card-body p-4 p-md-5">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="alert alert-primary border-0 shadow-sm">
                      <h4 className="alert-heading"><i className="fas fa-hands-helping me-2"></i> Namaste Friends!</h4>
                      <p className="mb-0">
                        My name is <strong>Arun Singh</strong>, and I am from <strong>Gopalganj, Bihar</strong>.
                        I want to share something very important that can save you from major financial losses.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card border-danger border-2 h-100">
                      <div className="card-header bg-danger text-white">
                        <h5 className="mb-0"><i className="fas fa-exclamation-circle me-1"></i> Problems I Witnessed</h5>
                      </div>
                      <div className="card-body">
                        <p className="small mb-3">Bihar families face these challenges in Gorakhpur:</p>
                        <ul className="list-unstyled small">
                          <li className="mb-2"><i className="fas fa-times me-2 text-danger"></i> GDA procedures unknown</li>
                          <li className="mb-2"><i className="fas fa-times me-2 text-danger"></i> Master plan confusion</li>
                          <li className="mb-2"><i className="fas fa-times me-2 text-danger"></i> Khasra verification issues</li>
                          <li className="mb-2"><i className="fas fa-times me-2 text-danger"></i> Wrong circle rate info</li>
                          <li className="mb-2"><i className="fas fa-times me-2 text-danger"></i> Broker exploitation</li>
                          <li className="mb-0"><i className="fas fa-times me-2 text-danger"></i> Legal complications</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card border-success border-2 h-100">
                      <div className="card-header bg-success text-white">
                        <h5 className="mb-0"><i className="fas fa-lightbulb me-1"></i> Our Solution</h5>
                      </div>
                      <div className="card-body">
                        <p className="small mb-3">That's why I created Gorakhpur Property Check:</p>
                        <ul className="list-unstyled small">
                          <li className="mb-2"><i className="fas fa-check me-2 text-success"></i> Complete verification service</li>
                          <li className="mb-2"><i className="fas fa-check me-2 text-success"></i> Government record access</li>
                          <li className="mb-2"><i className="fas fa-check me-2 text-success"></i> Transparent process</li>
                          <li className="mb-2"><i className="fas fa-check me-2 text-success"></i> Affordable pricing</li>
                          <li className="mb-2"><i className="fas fa-check me-2 text-success"></i> Expert guidance</li>
                          <li className="mb-0"><i className="fas fa-check me-2 text-success"></i> Peace of mind</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="bg-warning p-4 rounded-4 text-center">
                      <h5 className="mb-3"><i className="fas fa-bullseye me-1"></i> Our Mission</h5>
                      <p className="mb-0">
                        <em>"To provide complete and accurate property verification so that no family
                          from Bihar faces financial loss while buying land in Gorakhpur."</em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3" style={{
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '2.5rem',
              fontWeight: 'bold'
            }}>What We Offer</h2>
            <p className="lead text-muted">Complete property verification solutions at one place</p>
          </div>
          <div className="row g-4">
            <div className="col-sm-6 col-lg-3">
              <div className="card border-0 shadow-lg h-100 hover-lift text-center" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                transition: 'all 0.3s ease',
                borderRadius: '15px'
              }}>
                <div className="card-body p-4 text-white">
                  <div className="mb-3">
                    <i className="fas fa-file-invoice" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h6 className="card-title fw-bold mb-3">Document Verification</h6>
                  <p className="card-text small">Complete legal status check from government records</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card border-0 shadow-lg h-100 hover-lift text-center" style={{
                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                transition: 'all 0.3s ease',
                borderRadius: '15px'
              }}>
                <div className="card-body p-4 text-white">
                  <div className="mb-3">
                    <i className="fas fa-university" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h6 className="card-title fw-bold mb-3">Government Records</h6>
                  <p className="card-text small">Direct access to official government databases</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card border-0 shadow-lg h-100 hover-lift text-center" style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                transition: 'all 0.3s ease',
                borderRadius: '15px'
              }}>
                <div className="card-body p-4 text-white">
                  <div className="mb-3">
                    <i className="fas fa-eye" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h6 className="card-title fw-bold mb-3">Transparent Process</h6>
                  <p className="card-text small">Clear and honest reporting system</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card border-0 shadow-lg h-100 hover-lift text-center" style={{
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                transition: 'all 0.3s ease',
                borderRadius: '15px'
              }}>
                <div className="card-body p-4 text-white">
                  <div className="mb-3">
                    <i className="fas fa-rupee-sign" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h6 className="card-title fw-bold mb-3">Affordable Pricing</h6>
                  <p className="card-text small">Quality service starting from just ₹3,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="text-gradient mb-3">Why Choose Us?</h2>
          <p className="lead text-muted">Our commitment to excellence</p>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="text-center">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                <i className="fas fa-handshake fs-2"></i>
              </div>
              <h5>Trust & Reliability</h5>
              <p className="text-muted small">Building relationships based on trust and reliable service</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                <i className="fas fa-bullseye fs-2"></i>
              </div>
              <h5>100% Accuracy</h5>
              <p className="text-muted small">Every information verified from official sources</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                <i className="fas fa-headset fs-2"></i>
              </div>
              <h5>Customer First</h5>
              <p className="text-muted small">Your satisfaction is our top priority</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-primary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h3 className="mb-4">Ready to Make a Smart Property Decision?</h3>
              <blockquote className="blockquote mb-4">
                <p className="fs-6 fst-italic">
                  "Don't make property decisions based on emotions. Make them with complete
                  information and confidence. That's what we provide."
                </p>
                <footer className="blockquote-footer text-white-50">
                  <strong>Arun Singh</strong>, Founder
                </footer>
              </blockquote>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button
                  className="btn btn-warning btn-lg px-4 py-3"
                  onClick={() => window.open('tel:+919693420595', '_self')}
                >
                  <i className="fas fa-rocket me-2"></i> Start Verification
                </button>
                <button
                  className="btn btn-outline-light btn-lg px-4 py-3"
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

export default About;