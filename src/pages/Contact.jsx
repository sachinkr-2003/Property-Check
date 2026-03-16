import React, { useState, useEffect } from 'react';
import { settingsAPI, propertyAPI } from '../services/apiService';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [settings, setSettings] = useState({
    contactEmail: 'info@gorakhpurpropertycheck.com',
    contactPhone: '+91 9693420595',
    address: 'Third Floor, Yashodhara Complex, Near PSC Camp, Gorakhpur',
    whatsappNumber: '919693420595'
  });
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    settingsAPI.get().then(res => { if (res.success) setSettings(res.data); }).catch(() => {});
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');
    setSubmitSuccess(false);
    try {
      await propertyAPI.createContact(formData);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      setSubmitError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', minHeight: '100vh' }}>
      <style>{`
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(50px); } 100% { opacity: 1; transform: translateY(0); } }
        .fade-in-up { animation: fadeInUp 0.8s ease-out; }
        .classical-bg { background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); }
        .form-control:focus { border-color: #667eea !important; box-shadow: 0 0 0 0.2rem rgba(102,126,234,0.25) !important; }
      `}</style>

      <div className="classical-bg text-white py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center fade-in-up">
              <span className="badge bg-warning text-dark px-3 py-2 fs-6 mb-3"><i className="fas fa-phone-alt me-2"></i> Get In Touch With Us</span>
              <h1 className="display-3 fw-bold mb-4">Contact <span className="text-warning">Our Experts</span></h1>
              <p className="lead mb-4 text-white-50">Ready to verify your property? Get in touch with our experienced team for professional property verification services in Gorakhpur.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 fade-in-up">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-user-tie text-white" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <h4 className="fw-bold mb-1">Arun Singh</h4>
                  <p className="text-muted mb-0">Founder & Property Verification Expert</p>
                  <span className="badge bg-success px-2 py-1 mt-2">5+ Years Experience</span>
                </div>
                <div className="contact-info">
                  {[
                    { bg: 'primary', icon: 'fa-phone-alt', label: 'Phone Number', value: settings.contactPhone },
                    { bg: 'success', icon: 'fa-envelope', label: 'Email Address', value: settings.contactEmail },
                    { bg: 'warning', icon: 'fa-map-marker-alt', label: 'Office Address', value: settings.address },
                    { bg: 'info', icon: 'fa-clock', label: 'Working Hours', value: 'Mon - Sat: 9:00 AM - 6:00 PM' }
                  ].map((item, i) => (
                    <div key={i} className="d-flex align-items-center mb-3 p-3 bg-light rounded">
                      <div className={`bg-${item.bg} rounded-circle p-2 me-3 d-flex align-items-center justify-content-center`} style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                        <i className={`fas ${item.icon} text-white`}></i>
                      </div>
                      <div><small className="text-muted d-block fw-semibold">{item.label}</small><strong className="text-dark">{item.value}</strong></div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 d-grid gap-2">
                  <button className="btn btn-primary btn-lg" onClick={() => window.open(`tel:${settings.contactPhone.replace(/\s/g, '')}`, '_self')}>
                    <i className="fas fa-phone-alt me-2"></i> Call Now
                  </button>
                  <button className="btn btn-success btn-lg" onClick={() => window.open(`https://wa.me/${settings.whatsappNumber}?text=Hi, I want to verify my property in Gorakhpur`, '_blank')}>
                    <i className="fab fa-whatsapp me-2"></i> WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="card border-0 shadow-lg">
              <div className="card-header classical-bg text-white text-center py-4">
                <h3 className="mb-2 fw-bold"><i className="fas fa-edit me-2"></i> Send Us a Message</h3>
                <p className="mb-0 text-white-50">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>
              <div className="card-body p-5">
                {submitSuccess && <div className="alert alert-success"><i className="fas fa-check-circle me-2"></i>Message sent successfully! We will contact you within 24 hours.</div>}
                {submitError && <div className="alert alert-danger"><i className="fas fa-exclamation-circle me-2"></i>{submitError}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark"><i className="fas fa-user me-2"></i>Your Name <span className="text-danger">*</span></label>
                      <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required style={{ borderRadius: '10px', border: '2px solid #e9ecef' }} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark"><i className="fas fa-mobile-alt me-2"></i>Phone Number <span className="text-danger">*</span></label>
                      <input type="tel" name="phone" className="form-control form-control-lg" placeholder="Your WhatsApp number" value={formData.phone} onChange={handleChange} required style={{ borderRadius: '10px', border: '2px solid #e9ecef' }} />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold text-dark"><i className="fas fa-envelope me-2"></i>Email Address</label>
                      <input type="email" name="email" className="form-control form-control-lg" placeholder="Your email address (optional)" value={formData.email} onChange={handleChange} style={{ borderRadius: '10px', border: '2px solid #e9ecef' }} />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold text-dark"><i className="fas fa-comment-alt me-2"></i>Message <span className="text-danger">*</span></label>
                      <textarea name="message" className="form-control" rows="6" placeholder="Tell us about your property verification requirements..." value={formData.message} onChange={handleChange} required style={{ borderRadius: '10px', border: '2px solid #e9ecef' }}></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-lg px-5 py-3 fw-bold text-white" disabled={loading} style={{ borderRadius: '25px', background: 'linear-gradient(45deg, #667eea, #764ba2)', border: 'none' }}>
                        {loading ? <><span className="spinner-border spinner-border-sm me-2"></span>Sending...</> : <><i className="fas fa-rocket me-2"></i>Send Message</>}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
