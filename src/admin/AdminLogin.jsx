import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authAPI } from '../services/apiService';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authAPI.login(credentials);

      // Store token and admin data
      localStorage.setItem('adminToken', response.token);
      localStorage.setItem('adminData', JSON.stringify(response.admin));

      // Call parent login handler
      onLogin();
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center position-fixed w-100 h-100" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      {/* Animated Background Elements */}
      <div className="position-absolute" style={{
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        animation: 'float 20s ease-in-out infinite',
        zIndex: 1
      }}></div>

      {/* Floating Shapes */}
      <div className="position-absolute" style={{
        top: '10%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '50%',
        animation: 'bounce 6s ease-in-out infinite',
        zIndex: 1
      }}></div>
      <div className="position-absolute" style={{
        bottom: '15%',
        right: '15%',
        width: '80px',
        height: '80px',
        background: 'rgba(255,255,255,0.08)',
        borderRadius: '30%',
        animation: 'bounce 8s ease-in-out infinite reverse',
        zIndex: 1
      }}></div>

      {/* Main Login Card */}
      <div className="card border-0 shadow-lg position-relative" style={{
        width: '100%',
        maxWidth: '450px',
        margin: '20px',
        borderRadius: '25px',
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 2,
        animation: 'slideUp 0.8s ease-out'
      }}>
        <div className="card-body p-3">
          {/* Header Section */}
          <div className="text-center mb-3">
            <div className="mb-2">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle position-relative" style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                <i className="fas fa-shield-alt text-white" style={{ fontSize: '2rem' }}></i>
                <div className="position-absolute" style={{
                  top: '-5px',
                  right: '-5px',
                  width: '20px',
                  height: '20px',
                  background: '#28a745',
                  borderRadius: '50%',
                  border: '2px solid white',
                  animation: 'ping 2s ease-in-out infinite'
                }}></div>
              </div>
            </div>
            <h1 className="fw-bold mb-1" style={{
              color: '#2c3e50',
              fontSize: '1.5rem',
              letterSpacing: '-0.5px'
            }}>Admin Portal</h1>
            <p className="text-muted mb-2" style={{ fontSize: '1rem' }}>Gorakhpur Property Check</p>
            <div style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              margin: '0 auto',
              borderRadius: '2px',
              animation: 'shimmer 2s ease-in-out infinite'
            }}></div>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold mb-1" style={{ color: '#2c3e50', fontSize: '0.9rem' }}>Username</label>
              <div className="input-group input-group-lg">
                <span className="input-group-text border-0" style={{
                  background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                  borderRadius: '15px 0 0 15px',
                  width: '55px',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-user" style={{ color: '#667eea' }}></i>
                </span>
                <input
                  type="text"
                  className="form-control border-0 shadow-sm"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  required
                  placeholder="Enter your username"
                  style={{
                    borderRadius: '0 15px 15px 0',
                    background: '#f8f9fa',
                    fontSize: '1.1rem',
                    padding: '12px 15px',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.background = '#fff';
                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.background = '#f8f9fa';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold mb-1" style={{ color: '#2c3e50', fontSize: '0.9rem' }}>Password</label>
              <div className="input-group input-group-lg">
                <span className="input-group-text border-0" style={{
                  background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                  borderRadius: '15px 0 0 15px',
                  width: '55px',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-lock" style={{ color: '#667eea' }}></i>
                </span>
                <input
                  type="password"
                  className="form-control border-0 shadow-sm"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  required
                  placeholder="Enter your password"
                  style={{
                    borderRadius: '0 15px 15px 0',
                    background: '#f8f9fa',
                    fontSize: '1.1rem',
                    padding: '12px 15px',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.background = '#fff';
                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.background = '#f8f9fa';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-lg w-100 text-white fw-bold shadow-lg position-relative overflow-hidden"
              disabled={loading}
              style={{
                borderRadius: '15px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                border: 'none',
                padding: '15px',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                }
              }}
            >
              <span>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Signing In...
                  </>
                ) : (
                  <>
                    <i className="fas fa-sign-in-alt me-2"></i>
                    Sign In to Dashboard
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-4 pt-3" style={{ borderTop: '1px solid #e9ecef' }}>
            <small className="text-muted d-flex align-items-center justify-content-center mb-3">
              <i className="fas fa-shield-check me-2" style={{ color: '#28a745' }}></i>
              Secure Admin Access • Protected System
            </small>

            {/* Back to Home Link */}
            <Link
              to="/"
              className="btn btn-outline-secondary btn-sm"
              style={{
                borderRadius: '20px',
                padding: '8px 20px',
                fontSize: '0.85rem',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
            >
              <i className="fas fa-home me-2"></i>
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 576px) {
          .card-body { padding: 2rem !important; }
          h1 { font-size: 1.5rem !important; }
          .input-group-lg .form-control { font-size: 1rem !important; }
          .btn-lg { font-size: 1rem !important; padding: 12px !important; }
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;