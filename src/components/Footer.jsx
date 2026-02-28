import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/gpc-logo.svg';
import { settingsAPI } from '../services/apiService';

const Footer = () => {
  const [settings, setSettings] = useState({
    siteTitle: 'Gorakhpur Property Check',
    contactEmail: 'info@gorakhpurpropertycheck.com',
    contactPhone: '+91 9693420595',
    address: 'Third Floor, Yashodhara Complex, Near PSC Camp, Gorakhpur'
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await settingsAPI.get();
        if (res.success) {
          setSettings(res.data);
        }
      } catch (err) {
        console.error('Failed to fetch footer settings:', err);
      }
    };
    fetchSettings();
  }, []);

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="GPC Logo" height="40" className="me-2" />
            </div>
            <p className="text-light">
              Your trusted partner for property verification and legal documentation in Gorakhpur.
              We ensure secure and transparent property transactions.
            </p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link className="text-light text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-light text-decoration-none" to="/about">About</Link></li>
              <li><Link className="text-light text-decoration-none" to="/services">Services</Link></li>
              <li><Link className="text-light text-decoration-none" to="/contact">Contact</Link></li>
              <li><Link className="text-light text-decoration-none" to="/admin">Admin</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li><span className="text-light">Property Verification</span></li>
              <li><span className="text-light">Legal Documentation</span></li>
              <li><span className="text-light">Title Search</span></li>
              <li><span className="text-light">Property Registration</span></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <div className="text-light">
              <p><i className="fas fa-map-marker-alt me-2"></i>{settings.address}</p>
              <p><i className="fas fa-phone me-2"></i>{settings.contactPhone}</p>
              <p><i className="fas fa-envelope me-2"></i>{settings.contactEmail}</p>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-light mb-0">
              © {new Date().getFullYear()} {settings.siteTitle}. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end justify-content-center">
              <a href="#" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-light"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;