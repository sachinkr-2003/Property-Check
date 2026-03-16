import React from 'react';

const TargetAudience = () => {
  return (
    <div className="target-audience-section py-5" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3 text-white">
            Specially for Bihar Families
          </h2>
          <p className="lead text-white-50">
            We understand the challenges faced by Bihar residents when buying property in Gorakhpur
          </p>
        </div>

        <div className="row g-4">
          {/* Problems Section */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg h-100" style={{ borderRadius: '15px' }}>
              <div className="card-header bg-danger text-white text-center py-3">
                <h4 className="mb-0"><i className="fas fa-exclamation-circle me-2"></i> Common Problems</h4>
              </div>
              <div className="card-body p-4">
                <p className="text-muted mb-3">
                  Bihar families often face these challenges in Gorakhpur:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-start">
                    <i className="fas fa-times-circle text-danger me-3 mt-1"></i>
                    <div>
                      <strong>G.D.A. Procedures Unknown</strong>
                      <p className="mb-0 small text-muted">Lack of knowledge about GDA acquisition and master plan</p>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="fas fa-times-circle text-danger me-3 mt-1"></i>
                    <div>
                      <strong>Khasra Verification Issues</strong>
                      <p className="mb-0 small text-muted">Difficulty in verifying land records and documentation</p>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="fas fa-times-circle text-danger me-3 mt-1"></i>
                    <div>
                      <strong>Wrong Circle Rate Information</strong>
                      <p className="mb-0 small text-muted">Getting misled about actual property rates</p>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="fas fa-times-circle text-danger me-3 mt-1"></i>
                    <div>
                      <strong>Broker Exploitation</strong>
                      <p className="mb-0 small text-muted">Being taken advantage of due to lack of local knowledge</p>
                    </div>
                  </li>
                  <li className="mb-0 d-flex align-items-start">
                    <i className="fas fa-times-circle text-danger me-3 mt-1"></i>
                    <div>
                      <strong>Legal Complications</strong>
                      <p className="mb-0 small text-muted">Unknown disputes and legal issues with properties</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg h-100" style={{ borderRadius: '15px' }}>
              <div className="card-header bg-success text-white text-center py-3">
                <h4 className="mb-0"><i className="fas fa-check-circle me-2"></i> Our Solutions</h4>
              </div>
              <div className="card-body p-4">
                <p className="text-muted mb-3">
                  That's why we created Gorakhpur Property Check:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-start">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <div>
                      <strong>Complete Verification Service</strong>
                      <p className="mb-0 small text-muted">End-to-end property verification from government records</p>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <div>
                      <strong>Government Record Access</strong>
                      <p className="mb-0 small text-muted">Direct access to official databases and records</p>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <div>
                      <strong>Transparent Process</strong>
                      <p className="mb-0 small text-muted">Clear reporting with no hidden information</p>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <div>
                      <strong>Affordable Pricing</strong>
                      <p className="mb-0 small text-muted">Quality service at reasonable rates starting ₹3,000</p>
                    </div>
                  </li>
                  <li className="mb-0 d-flex align-items-start">
                    <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                    <div>
                      <strong>Expert Guidance</strong>
                      <p className="mb-0 small text-muted">Professional advice throughout the process</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="row mt-5">
          <div className="col-lg-10 mx-auto">
            <div className="card border-0 shadow-lg" style={{
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.95)'
            }}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-4 fw-bold" style={{ color: '#2c3e50' }}>
                  <i className="fas fa-bullseye text-primary me-2"></i> Our Mission
                </h3>
                <blockquote className="blockquote mb-4">
                  <p className="fs-5 fst-italic text-muted">
                    "To provide complete and accurate property verification so that no family
                    from Bihar faces financial loss while buying land in Gorakhpur."
                  </p>
                  <footer className="blockquote-footer mt-3">
                    <strong>Arun Singh</strong>, Founder - Gorakhpur Property Check
                  </footer>
                </blockquote>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <button className="btn btn-primary btn-lg px-4 py-3" style={{
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    border: 'none'
                  }}>
                    <i className="fas fa-rocket me-2"></i> Start Verification
                  </button>
                  <button className="btn btn-outline-primary btn-lg px-4 py-3">
                    <i className="fas fa-phone-alt me-2"></i> Call Expert
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

export default TargetAudience;