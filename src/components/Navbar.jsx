import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/gpc-logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'team', label: 'Team', path: '/team' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="navbar navbar-expand-lg shadow-sm sticky-top" style={{
      background: '#000000',
      padding: '8px 0'
    }}>
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none">
          <div className="d-flex align-items-center">
            <img
              src={logo}
              alt="GPC Logo"
              height="40"
              className="me-2"
              style={{
                objectFit: 'contain',
                maxWidth: '100px'
              }}
            />
          </div>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '8px'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item mx-1">
                <NavLink
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 text-decoration-none ${isActive ? 'text-white fw-bold active' : 'text-white'}`
                  }
                  style={{
                    fontSize: '0.95rem',
                  }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center">
            <Link to="/verify" className="btn btn-warning btn-sm px-4 fw-bold shadow-sm rounded-pill">
              Verify Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;