import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authAPI, adminAPI } from '../services/apiService';
import Swal from 'sweetalert2';

const AdminLogin = ({ onLogin }) => {
  const [tab, setTab] = useState('login');
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ username: '', password: '', confirmPassword: '', role: 'Admin' });
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
        confirmButtonColor: '#667eea'
      }).then(() => onLogin());
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'Login Failed', text: err.message || 'Invalid credentials', confirmButtonColor: '#667eea' });
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      return Swal.fire({ icon: 'warning', title: 'Password Mismatch', text: 'Passwords do not match!', confirmButtonColor: '#667eea' });
    }
    if (registerData.password.length < 6) {
      return Swal.fire({ icon: 'warning', title: 'Weak Password', text: 'Password must be at least 6 characters', confirmButtonColor: '#667eea' });
    }
    setLoading(true);
    try {
      await adminAPI.createAdmin({ username: registerData.username, password: registerData.password, role: registerData.role });
      Swal.fire({
        icon: 'success',
        title: 'Admin Registered! 🎉',
        html: `<p>Account <strong>${registerData.username}</strong> created successfully!</p><p>You can now login.</p>`,
        confirmButtonColor: '#667eea'
      });
      setRegisterData({ username: '', password: '', confirmPassword: '', role: 'Admin' });
      setTab('login');
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'Registration Failed', text: err.message || 'Could not create admin', confirmButtonColor: '#667eea' });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = { borderRadius: '0 15px 15px 0', background: '#f8f9fa', fontSize: '1rem', padding: '12px 15px', border: 'none' };
  const iconStyle = { background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)', borderRadius: '15px 0 0 15px', width: '50px', justifyContent: 'center', border: 'none' };

  return (
    <div className="d-flex align-items-center justify-content-center position-fixed w-100 h-100" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
      top: 0, left: 0, zIndex: 9999, overflowY: 'auto'
    }}>
      {/* Floating bg shapes */}
      <div className="position-absolute" style={{ top: '10%', left: '10%', width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', animation: 'bounce 6s ease-in-out infinite', zIndex: 1 }}></div>
      <div className="position-absolute" style={{ bottom: '15%', right: '15%', width: '80px', height: '80px', background: 'rgba(255,255,255,0.08)', borderRadius: '30%', animation: 'bounce 8s ease-in-out infinite reverse', zIndex: 1 }}></div>

      <div className="card border-0 shadow-lg position-relative" style={{
        width: '100%', maxWidth: '460px', margin: '20px',
        borderRadius: '25px', background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(20px)', zIndex: 2, animation: 'slideUp 0.8s ease-out'
      }}>
        <div className="card-body p-4">
          {/* Header */}
          <div className="text-center mb-3">
            <div className="d-inline-flex align-items-center justify-content-center rounded-circle position-relative mb-2" style={{
              width: '70px', height: '70px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              boxShadow: '0 15px 35px rgba(102,126,234,0.4)',
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              <i className="fas fa-shield-alt text-white" style={{ fontSize: '2rem' }}></i>
              <div className="position-absolute" style={{ top: '-5px', right: '-5px', width: '20px', height: '20px', background: '#28a745', borderRadius: '50%', border: '2px solid white' }}></div>
            </div>
            <h1 className="fw-bold mb-0" style={{ color: '#2c3e50', fontSize: '1.5rem' }}>Admin Portal</h1>
            <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>Gorakhpur Property Check</p>
            <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #667eea, #764ba2)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>

          {/* Tabs */}
          <div className="d-flex mb-4 rounded-pill overflow-hidden" style={{ background: '#f0f0f0', padding: '4px' }}>
            {['login', 'register'].map(t => (
              <button key={t} onClick={() => setTab(t)} className="btn flex-fill fw-semibold" style={{
                borderRadius: '50px', border: 'none', padding: '10px',
                background: tab === t ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'transparent',
                color: tab === t ? '#fff' : '#666',
                transition: 'all 0.3s ease', fontSize: '0.95rem'
              }}>
                <i className={`fas ${t === 'login' ? 'fa-sign-in-alt' : 'fa-user-plus'} me-2`}></i>
                {t === 'login' ? 'Login' : 'Register'}
              </button>
            ))}
          </div>

          {/* Login Form */}
          {tab === 'login' && (
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label fw-semibold mb-1" style={{ color: '#2c3e50', fontSize: '0.9rem' }}>Username</label>
                <div className="input-group input-group-lg">
                  <span className="input-group-text" style={iconStyle}><i className="fas fa-user" style={{ color: '#667eea' }}></i></span>
                  <input type="text" className="form-control shadow-sm" value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    required placeholder="Enter username" style={inputStyle} />
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold mb-1" style={{ color: '#2c3e50', fontSize: '0.9rem' }}>Password</label>
                <div className="input-group input-group-lg">
                  <span className="input-group-text" style={iconStyle}><i className="fas fa-lock" style={{ color: '#667eea' }}></i></span>
                  <input type="password" className="form-control shadow-sm" value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    required placeholder="Enter password" style={inputStyle} />
                </div>
              </div>
              <button type="submit" className="btn btn-lg w-100 text-white fw-bold" disabled={loading} style={{
                borderRadius: '15px', background: 'linear-gradient(135deg, #667eea, #764ba2)',
                border: 'none', padding: '14px', fontSize: '1.1rem',
                boxShadow: '0 8px 25px rgba(102,126,234,0.4)'
              }}>
                {loading ? <><span className="spinner-border spinner-border-sm me-2"></span>Signing In...</> : <><i className="fas fa-sign-in-alt me-2"></i>Sign In to Dashboard</>}
              </button>
              <div className="text-center mt-3">
                <small className="text-muted"><i className="fas fa-info-circle me-1"></i>Default: <strong>admin</strong> / <strong>admin123</strong></small>
              </div>
            </form>
          )}

          {/* Register Form */}
          {tab === 'register' && (
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label fw-semibold mb-1" style={{ color: '#2c3e50', fontSize: '0.9rem' }}>Username</label>
                <div className="input-group input-group-lg">
                  <span className="input-group-text" style={iconStyle}><i className="fas fa-user" style={{ color: '#667eea' }}></i></span>
                  <input type="text" className="form-control shadow-sm" value={registerData.username}
                    onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                    required placeholder="Choose a username" style={inputStyle} />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold mb-1" style={{ color: '#2c3e50', fontSize: '0.9rem' }}>Role</label>
                <div className="input-group input-group-lg">
                  <span className="input-group-text" style={iconStyle}><i className="fas fa-user-tag" style={{ color: '#667eea' }}></i></span>
                  <select className="form-select shadow-sm" value={registerData.role}
                    onChange={(e) => setRegisterData({ ...registerData, role: e.target.value })}
                    style={{ ...inputStyle, borderRadius: '0 15px 15px 0' }}>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Super Admin">Super Admin</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold mb-1" style={{ color: '#2c3e50', fontSize: '0.9rem' }}>Password</label>
                <div className="input-group input-group-lg">
                  <span className="input-group-text" style={iconStyle}><i className="fas fa-lock" style={{ color: '#667eea' }}></i></span>
                  <input type="password" className="form-control shadow-sm" value={registerData.password}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                    required placeholder="Min 6 characters" style={inputStyle} />
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold mb-1" style={{ color: '#2c3e50', fontSize: '0.9rem' }}>Confirm Password</label>
                <div className="input-group input-group-lg">
                  <span className="input-group-text" style={iconStyle}><i className="fas fa-lock" style={{ color: '#667eea' }}></i></span>
                  <input type="password" className="form-control shadow-sm" value={registerData.confirmPassword}
                    onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                    required placeholder="Repeat password" style={inputStyle} />
                </div>
              </div>
              <button type="submit" className="btn btn-lg w-100 text-white fw-bold" disabled={loading} style={{
                borderRadius: '15px', background: 'linear-gradient(135deg, #667eea, #764ba2)',
                border: 'none', padding: '14px', fontSize: '1.1rem',
                boxShadow: '0 8px 25px rgba(102,126,234,0.4)'
              }}>
                {loading ? <><span className="spinner-border spinner-border-sm me-2"></span>Creating...</> : <><i className="fas fa-user-plus me-2"></i>Create Admin Account</>}
              </button>
            </form>
          )}

          {/* Footer */}
          <div className="text-center mt-4 pt-3" style={{ borderTop: '1px solid #e9ecef' }}>
            <small className="text-muted d-block mb-2"><i className="fas fa-shield-check me-1" style={{ color: '#28a745' }}></i>Secure Admin Access • Protected System</small>
            <Link to="/" className="btn btn-outline-secondary btn-sm" style={{ borderRadius: '20px', padding: '8px 20px', fontSize: '0.85rem' }}>
              <i className="fas fa-home me-2"></i>Back to Home
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }
        @keyframes slideUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
      `}</style>
    </div>
  );
};

export default AdminLogin;
