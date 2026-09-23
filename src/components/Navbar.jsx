import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/gpc-logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'team', label: 'Team', path: '/team' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 pt-6 px-4 transition-all duration-300">
      <div className="container mx-auto">
        <nav className="relative rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.4)] border border-amber-200 dark:border-white/10 backdrop-blur-xl bg-white dark:bg-[#0a0f1e]/90 px-4 py-2 md:py-3 flex items-center justify-between transition-colors duration-300">
          
          <Link to="/" className="flex items-center no-underline ml-4 md:ml-6">
            <img
              src={logo}
              alt="GPC Logo"
              height="30"
              className="mr-2 object-contain max-w-[80px]"
            />
          </Link>

          <button
            className="md:hidden border-0 bg-transparent text-brand-accent focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <div className={`md:flex items-center flex-grow justify-end md:justify-between ${isMenuOpen ? 'block absolute top-full left-4 right-4 bg-white dark:bg-[#0a0f1e]/95 backdrop-blur-xl shadow-2xl border border-amber-200 dark:border-white/10 rounded-xl p-4 mt-2' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 my-0 list-none pl-0 text-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item flex items-center justify-center">
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-2 py-1 no-underline font-semibold text-base tracking-wide transition-colors duration-300 ${isActive ? 'text-brand-accent' : 'text-black dark:text-white hover:text-brand-accent'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center ml-auto gap-4">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="w-9 h-9 rounded-full flex items-center justify-center bg-amber-100 dark:bg-white/5 border border-amber-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-brand-accent hover:border-brand-accent/50 hover:scale-110 transition-all duration-300"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 4.22a1 1 0 011.415 0l.708.708a1 1 0 01-1.414 1.414l-.708-.708a1 1 0 010-1.414zm3.78 3.78a1 1 0 010 2h-1a1 1 0 110-2h1zm-4.22 4.22a1 1 0 010 1.415l-.708.708a1 1 0 01-1.414-1.414l.708-.708a1 1 0 011.414 0zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-4.22a1 1 0 01-1.415 0l-.708-.708a1 1 0 011.414-1.414l.708.708a1 1 0 010 1.414zM4 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-4.22 4.22a1 1 0 010-1.415l.708-.708a1 1 0 011.414 1.414l-.708.708a1 1 0 01-1.414 0zM10 5a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd" /></svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                )}
              </button>
              <Link to="/verify" className="bg-brand-accent text-white dark:text-[#0a0f1e] hover:bg-yellow-400 transition-all duration-300 font-black text-xs uppercase tracking-widest px-5 py-2.5 text-center rounded-full shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                Verify Now
              </Link>
            </div>
          </div>

        </nav>
      </div>
    </div>
  );
};

export default Navbar;
