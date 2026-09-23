import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authAPI } from '../services/apiService';
import Swal from 'sweetalert2';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await authAPI.login(credentials);
      localStorage.setItem('adminToken', response.token);
      localStorage.setItem('adminData', JSON.stringify(response.admin));
      Swal.fire({
        icon: 'success',
        title: `Welcome back! 👋`,
        text: `Logged in as ${response.admin.username}`,
        timer: 1500,
        showConfirmButton: false,
        confirmButtonColor: '#f59e0b',
        background: '#ffffff',
        color: '#1a202c'
      }).then(() => onLogin());
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'Login Failed', text: err.message || 'Invalid credentials', confirmButtonColor: '#f59e0b' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white dark:bg-gray-900 font-sans">
      
      {/* Left Column - Image (Hidden on mobile) */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gray-900 h-full">
        <div className="absolute inset-0 bg-brand-dark/40 z-10 mix-blend-multiply"></div>
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
          alt="Luxury Real Estate" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-12 z-20">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl max-w-md">
            <h2 className="text-2xl font-bold text-white mb-2">Gorakhpur Property Check</h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              Secure administrative portal for managing property verification requests, user accounts, and comprehensive status updates.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 relative">
        <div className="w-full max-w-sm">
          
          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 text-brand-dark dark:text-white mb-6 border border-gray-200 dark:border-gray-700">
              <i className="fas fa-lock text-lg"></i>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">Welcome back</h1>
            <p className="text-gray-500 dark:text-gray-400">Please enter your admin credentials to sign in.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Username</label>
              <input 
                type="text" 
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required 
                className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors shadow-sm"
                placeholder="e.g. admin" 
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold">Password</label>
              </div>
              <input 
                type="password" 
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required 
                className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors shadow-sm"
                placeholder="••••••••" 
              />
            </div>
            
            <div className="pt-2">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-brand-dark dark:bg-brand-accent hover:bg-black dark:hover:bg-yellow-500 text-white dark:text-gray-900 font-bold rounded-lg py-3.5 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {loading ? (
                  <><svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Authenticating...</>
                ) : (
                  'Sign In'
                )}
              </button>
            </div>
          </form>

          {/* Footer Info */}
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <span className="block mb-2">Default credentials: <b>admin</b> / <b>admin123</b></span>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
            <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <i className="fas fa-arrow-left"></i> Back to Homepage
            </Link>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default AdminLogin;
