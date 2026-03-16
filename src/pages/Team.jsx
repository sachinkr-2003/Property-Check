import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import aboutImage from '../assets/about.jpeg';

const Team = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  const teamMembers = [
    {
      name: 'Arun Singh',
      role: 'Founder & CEO',
      image: aboutImage,
      description: 'Visionary leader with over 3+ years of expertise in real estate verification and legal compliance. Specializes in property due diligence, title verification, and ensuring transparent property transactions across Gorakhpur region.',
      expertise: ['Property Law', 'Due Diligence', 'Risk Assessment'],
      linkedin: '#',
      email: 'arun@gorakhpurpropertycheck.com'
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Legal Advisor',
      image: 'https://via.placeholder.com/400x450/2c3e50/ffffff?text=Priya+Sharma',
      description: 'Accomplished legal professional with LLM in Property Law. Brings 8+ years of experience in property documentation, title deed verification, and legal advisory services. Expert in handling complex property disputes and registration matters.',
      expertise: ['Property Documentation', 'Title Verification', 'Legal Compliance'],
      linkedin: '#',
      email: 'priya@gorakhpurpropertycheck.com'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Chief Property Consultant',
      image: 'https://via.placeholder.com/400x450/34495e/ffffff?text=Rajesh+Kumar',
      description: 'Certified property valuation expert with 10+ years in real estate consulting. Specializes in property assessment, market analysis, and verification of land records. Known for meticulous attention to detail in property inspections.',
      expertise: ['Property Valuation', 'Market Analysis', 'Land Records'],
      linkedin: '#',
      email: 'rajesh@gorakhpurpropertycheck.com'
    }
  ];

  if (loading) return <Loader />;

  return (
    <div className="team-page" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', minHeight: '100vh' }}>
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
          .team-card {
            transition: all 0.4s ease;
          }
          .team-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
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
                  <i className="fas fa-users me-2"></i> Meet Our Professionals
                </span>
              </div>
              <h1 className="display-3 fw-bold mb-4">
                Our <span className="text-warning">Expert</span> Team
              </h1>
              <p className="lead mb-4 text-white-50">
                Dedicated professionals committed to ensuring secure and transparent property transactions
              </p>
              <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                <div className="d-flex align-items-center">
                  <span className="text-warning me-2">✓</span>
                  <span>3+ Years Combined Experience</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="text-warning me-2">✓</span>
                  <span>Certified Professionals</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="text-warning me-2">✓</span>
                  <span>100% Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="container py-5">
        <div className="row g-4 mb-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6 fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card team-card h-100 border-0 shadow-lg">
                <div className="position-relative overflow-hidden">
                  <img src={member.image} className="card-img-top" alt={member.name} 
                       style={{ height: '350px', objectFit: 'cover' }} />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-warning text-dark px-3 py-2 shadow">
                      <i className="fas fa-star me-1"></i>Expert
                    </span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-1 text-center text-dark">{member.name}</h4>
                  <p className="text-warning fw-semibold text-center mb-3" style={{ fontSize: '1.1rem' }}>{member.role}</p>
                  <p className="text-muted small mb-3" style={{ lineHeight: '1.7', textAlign: 'justify' }}>{member.description}</p>
                  
                  <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="badge bg-dark px-3 py-2">{skill}</span>
                    ))}
                  </div>

                  <div className="d-flex justify-content-center gap-3 mt-3 pt-3 border-top">
                    <a href={member.linkedin} className="btn btn-sm btn-outline-dark rounded-circle" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href={`mailto:${member.email}`} className="btn btn-sm btn-outline-dark rounded-circle" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="row g-4 mb-5">
          <div className="col-md-3 col-6">
            <div className="card border-0 shadow text-center p-4 h-100">
              <h2 className="fw-bold text-primary mb-2">3+</h2>
              <p className="text-muted mb-0">Years Experience</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card border-0 shadow text-center p-4 h-100">
              <h2 className="fw-bold text-success mb-2">800+</h2>
              <p className="text-muted mb-0">Properties Verified</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card border-0 shadow text-center p-4 h-100">
              <h2 className="fw-bold text-warning mb-2">100%</h2>
              <p className="text-muted mb-0">Client Satisfaction</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card border-0 shadow text-center p-4 h-100">
              <h2 className="fw-bold text-info mb-2">24/7</h2>
              <p className="text-muted mb-0">Support Available</p>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="row mt-5">
          <div className="col-lg-10 mx-auto">
            <div className="card border-0 shadow-lg classical-bg text-white">
              <div className="card-body p-5">
                <div className="text-center mb-5">
                  <h3 className="fw-bold mb-3">Why Choose Our Team?</h3>
                  <p className="lead text-white-50 mb-0">Professional property verification services with complete transparency</p>
                </div>
                <div className="row g-4">
                  <div className="col-md-4 text-center">
                    <div className="mb-3">
                      <div className="bg-warning bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                        <i className="fas fa-certificate" style={{ fontSize: '2.5rem' }}></i>
                      </div>
                    </div>
                    <h5 className="text-warning fw-bold mb-2">Certified Professionals</h5>
                    <p className="text-white-50 small">All team members hold relevant certifications and licenses in their respective fields</p>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="mb-3">
                      <div className="bg-warning bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                        <i className="fas fa-shield-alt" style={{ fontSize: '2.5rem' }}></i>
                      </div>
                    </div>
                    <h5 className="text-warning fw-bold mb-2">Trusted Expertise</h5>
                    <p className="text-white-50 small">Combined experience of 30+ years in property verification and legal services</p>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="mb-3">
                      <div className="bg-warning bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                        <i className="fas fa-handshake" style={{ fontSize: '2.5rem' }}></i>
                      </div>
                    </div>
                    <h5 className="text-warning fw-bold mb-2">Client-Focused</h5>
                    <p className="text-white-50 small">Dedicated to providing transparent, reliable, and efficient property solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 shadow-lg classical-bg text-white">
              <div className="card-body p-5 text-center">
                <h3 className="fw-bold mb-3">Ready to Work With Us?</h3>
                <p className="mb-4 text-white-50">Get in touch with our expert team for all your property verification needs</p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <a href="/contact" className="btn btn-warning btn-lg px-5 fw-bold">
                    <i className="fas fa-phone me-2"></i>Contact Us
                  </a>
                  <a href="/verify" className="btn btn-outline-light btn-lg px-5 fw-bold">
                    <i className="fas fa-check-circle me-2"></i>Verify Property
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
