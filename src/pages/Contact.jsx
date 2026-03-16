import React, { useState, useEffect } from 'react';
import { settingsAPI } from '../services/apiService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [settings, setSettings] = useState({
    contactEmail: 'info@gorakhpurpropertycheck.com',
    contactPhone: '+91 9693420595',
    address: 'Third Floor, Yashodhara Complex, Near PSC Camp, Gorakhpur',
    whatsappNumber: '919693420595'
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await settingsAPI.get();
        if (res.success) {
          setSettings(res.data);
        }
      } catch (err) {
        console.error('Failed to fetch contact settings:', err);
      }
    };
    fetchSettings();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', minHeight: '100vh' }}>
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
          .classical-bg {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          }
          .form-control:focus {
            border-color: #667eea !important;
            box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25) !important;
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
                  <i className="fas fa-phone-alt me-2"></i> Get In Touch With Us
                </span>
              </div>
              <h1 className="display-3 fw-bold mb-4">
                Contact <span className="text-warning">Our Experts</span>
              </h1>
              <p className="lead mb-4 text-white-50">
                Ready to verify your property? Get in touch with our experienced team
                for professional property verification services in Gorakhpur.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-4 fade-in-up">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-user-tie text-white" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <h4 className="fw-bold mb-1">Arun Singh</h4>
                  <p className="text-muted mb-0">Founder & Property Verification Expert</p>
                  <div className="mt-2">
                    <span className="badge bg-success px-2 py-1">5+ Years Experience</span>
                  </div>
                </div>

                <div className="contact-info">
                  <div className="d-flex align-items-center mb-4 p-3 bg-light rounded">
                    <div className="bg-primary rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fas fa-phone-alt text-white"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block fw-semibold">Phone Number</small>
                      <strong className="text-dark">{settings.contactPhone}</strong>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-4 p-3 bg-light rounded">
                    <div className="bg-success rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block fw-semibold">Email Address</small>
                      <strong className="text-dark">{settings.contactEmail}</strong>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4 p-3 bg-light rounded">
                    <div className="bg-warning rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fas fa-map-marker-alt text-dark"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block fw-semibold">Office Address</small>
                      <strong className="text-dark">{settings.address}</strong>
                    </div>
                  </div>

                  <div className="d-flex align-items-center p-3 bg-light rounded">
                    <div className="bg-info rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fas fa-clock text-white"></i>
                    </div>
                    <div>
                      <small className="text-muted d-block fw-semibold">Working Hours</small>
                      <strong className="text-dark">Mon - Sat: 9:00 AM - 6:00 PM</strong>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="mt-4 d-grid gap-2">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => window.open(`tel:${settings.contactPhone.replace(/\s/g, '')}`, '_self')}
                  >
                    <i className="fas fa-phone-alt me-2"></i> Call Now
                  </button>
                  <button
                    className="btn btn-success btn-lg"
                    onClick={() => window.open(`https://wa.me/${settings.whatsappNumber}?text=Hi, I want to verify my property in Gorakhpur`, '_blank')}
                  >
                    <i className="fab fa-whatsapp me-2"></i> WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="card border-0 shadow-lg">
              <div className="card-header classical-bg text-white text-center py-4">
                <h3 className="mb-2 fw-bold"><i className="fas fa-edit me-2"></i> Send Us a Message</h3>
                <p className="mb-0 text-white-50">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark">
                        <i className="fas fa-user me-2"></i> Your Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '10px', border: '2px solid #e9ecef' }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark">
                        <i className="fas fa-mobile-alt me-2"></i> Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control form-control-lg"
                        placeholder="Your WhatsApp number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '10px', border: '2px solid #e9ecef' }}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold text-dark">
                        <i className="fas fa-envelope me-2"></i> Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Your email address (optional)"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ borderRadius: '10px', border: '2px solid #e9ecef' }}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold text-dark">
                        <i className="fas fa-comment-alt me-2"></i> Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name="message"
                        className="form-control"
                        rows="6"
                        placeholder="Tell us about your property verification requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '10px', border: '2px solid #e9ecef' }}
                      ></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-lg px-5 py-3 fw-bold text-white"
                        style={{
                          borderRadius: '25px',
                          background: 'linear-gradient(45deg, #667eea, #764ba2)',
                          border: 'none'
                        }}
                      >
                        <i className="fas fa-rocket me-2"></i> Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-lg classical-bg text-white">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h3 className="fw-bold mb-3">Why Choose Gorakhpur Property Check?</h3>
                  <p className="lead text-white-50 mb-0">Trusted by 500+ families across Bihar for property verification</p>
                </div>
                <div className="row g-4">
                  <div className="col-md-3 col-sm-6 text-center">
                    <div className="mb-3">
                      <div className="bg-warning bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                        <i className="fas fa-shield-alt" style={{ fontSize: '2rem' }}></i>
                      </div>
                    </div>
                    <h5 className="text-warning fw-bold mb-2">Trusted Service</h5>
                    <p className="small text-white-50 mb-0">Specially designed for Bihar residents</p>
                  </div>
                  <div className="col-md-3 col-sm-6 text-center">
                    <div className="mb-3">
                      <div className="bg-warning bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                        <i className="fas fa-user-graduate" style={{ fontSize: '2rem' }}></i>
                      </div>
                    </div>
                    <h5 className="text-warning fw-bold mb-2">Expert Guidance</h5>
                    <p className="small text-white-50 mb-0">Complete knowledge of local procedures</p>
                  </div>
                  <div className="col-md-3 col-sm-6 text-center">
                    <div className="mb-3">
                      <div className="bg-warning bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                        <i className="fas fa-bolt" style={{ fontSize: '2rem' }}></i>
                      </div>
                    </div>
                    <h5 className="text-warning fw-bold mb-2">Quick Response</h5>
                    <p className="small text-white-50 mb-0">Fast turnaround within 24-48 hours</p>
                  </div>
                  <div className="col-md-3 col-sm-6 text-center">
                    <div className="mb-3">
                      <div className="bg-warning bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                        <i className="fas fa-eye" style={{ fontSize: '2rem' }}></i>
                      </div>
                    </div>
                    <h5 className="text-warning fw-bold mb-2">Transparent Process</h5>
                    <p className="small text-white-50 mb-0">All information from government records</p>
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

export default Contact;