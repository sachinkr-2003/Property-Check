import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { testimonialAPI } from '../services/apiService';
import Hero from '../home/Hero';
import Services from '../home/Services';
import WhyChooseUs from '../home/WhyChooseUs';
import TargetAudience from '../home/TargetAudience';

const Home = () => {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await testimonialAPI.getAll();
        if (res.success) {
          setTestimonials(res.data);
        }
      } catch (err) {
        console.error('Failed to fetch testimonials:', err);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <TargetAudience />

      {/* Testimonials Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitFillColor: 'transparent'
          }}>What Our Clients Say</h2>
          <p className="lead text-muted">Real stories from satisfied customers</p>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex mb-3 text-warning">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="mb-3">"{testimonial.text}"</p>
                  <div className="d-flex align-items-center">
                    <img src={testimonial.image} className="rounded-circle me-3" width="50" height="50" alt="Client" />
                    <div>
                      <h6 className="mb-0">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.location}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-primary text-white py-5" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">Ready to Secure Your Property Investment?</h2>
              <p className="lead mb-4">
                Join 500+ satisfied customers who made smart property decisions with our verification service
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link
                  to="/verify"
                  className="btn btn-warning btn-lg px-5 py-3 shadow-lg fw-bold"
                >
                  <i className="fas fa-rocket me-2"></i> Get Instant Quote
                </Link>
                <button
                  className="btn btn-outline-light btn-lg px-5 py-3"
                  onClick={() => window.open('tel:+919693420595', '_self')}
                >
                  <i className="fas fa-phone-alt me-2"></i> Call Expert
                </button>
                <button
                  className="btn btn-outline-light btn-lg px-5 py-3"
                  onClick={() => window.open('https://wa.me/919693420595?text=Hi, I want to verify my property in Gorakhpur', '_blank')}
                >
                  <i className="fab fa-whatsapp me-2"></i> WhatsApp Us
                </button>
              </div>
              <div className="mt-4">
                <small className="text-white-50">
                  <i className="fas fa-rupee-sign me-1"></i> Money Back Guarantee |
                  <i className="fas fa-headset ms-3 me-1"></i> 24/7 Support |
                  <i className="fas fa-bolt ms-3 me-1"></i> Quick Response
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;