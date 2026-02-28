import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if admin is authenticated
    const token = localStorage.getItem('adminToken');
    const authStatus = localStorage.getItem('adminAuthenticated');
    return token && authStatus === 'true';
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('adminAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
    // Navigate back to home page after logout
    navigate('/');
  };

  return (
    <div className="admin-panel">
      {!isAuthenticated ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <AdminDashboard onLogout={handleLogout} />
      )}
    </div>
  );
};

export default AdminPanel;