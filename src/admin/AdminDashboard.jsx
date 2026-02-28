import React, { useState, useEffect } from 'react';
import { adminAPI, propertyAPI, userAPI, testimonialAPI } from '../services/apiService';
import AdminSidebar from './components/AdminSidebar';
import DashboardOverview from './components/DashboardOverview';
import PropertyRequests from './components/PropertyRequests';
import UserManagement from './components/UserManagement';
import AdminManagement from './components/AdminManagement';
import Reports from './components/Reports';
import SiteSettings from './components/SiteSettings';
import ServiceManagement from './components/ServiceManagement';
import TestimonialManagement from './components/TestimonialManagement';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // State for different views
  const [viewMode, setViewMode] = useState('list');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  // Data
  const [inquiries, setInquiries] = useState([]);
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [dashboardStats, setDashboardStats] = useState({
    pendingVerifications: 0,
    completedVerifications: 0,
    monthlyRevenue: 0
  });

  useEffect(() => {
    loadAllData();
  }, []);

  // Reset view state when switching tabs
  useEffect(() => {
    setViewMode('list');
    setSelectedRequest(null);
    setSelectedUser(null);
    setSelectedAdmin(null);
    setError('');
  }, [activeTab]);

  const loadAllData = async () => {
    setLoading(true);
    try {
      const [requestsRes, usersRes, adminsRes, testimonialsRes] = await Promise.all([
        propertyAPI.getAll(),
        userAPI.getAll(),
        adminAPI.getAllAdmins(),
        testimonialAPI.adminGetAll()
      ]);

      setInquiries(requestsRes.data || []);
      setUsers(usersRes.data || []);
      setAdmins(adminsRes.data || []);
      setTestimonials(testimonialsRes.data || []);

      console.log('Dashboard Data Loaded:', {
        inquiries: requestsRes.data,
        users: usersRes.data,
        admins: adminsRes.data
      });

      // Calculate dummy/real stats
      setDashboardStats({
        pendingVerifications: (requestsRes.data || []).filter(r => r.status !== 'Completed').length,
        completedVerifications: (requestsRes.data || []).filter(r => r.status === 'Completed').length,
        monthlyRevenue: 450000 // Mock or calculate
      });
    } catch (err) {
      console.error('Failed to load dashboard data:', err);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const exportToExcel = () => {
    alert('Exporting to Excel...');
  };

  const exportToPDF = () => {
    alert('Exporting to PDF...');
  };

  return (
    <div className="d-flex admin-layout" style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <style>
        {`
          .fade-in {
            animation: fadeIn 0.5s ease-in;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .admin-content-card {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
            border: 1px solid rgba(255, 255, 255, 0.18);
            padding: 30px;
            min-height: calc(100vh - 80px);
          }
          main {
            background-image: radial-gradient(#667eea15 1px, transparent 1px);
            background-size: 20px 20px;
          }
        `}
      </style>

      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={onLogout}
      />

      <main className="flex-grow-1 p-3 p-md-4" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        {error && (
          <div className="alert alert-danger alert-dismissible fade show rounded-4 shadow-sm border-0 mb-4 px-4 py-3 d-flex align-items-center" role="alert">
            <i className="fas fa-exclamation-triangle me-3 fs-4"></i>
            <div>
              <strong className="d-block">Data Loading Failed</strong>
              <small>{error}</small>
            </div>
            <button type="button" className="btn-close" onClick={() => setError('')}></button>
          </div>
        )}
        <div className="admin-content-card fade-in">
          {loading && (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
              <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {!loading && (
            <>
              {activeTab === 'dashboard' && (
                <DashboardOverview inquiries={inquiries} stats={dashboardStats} />
              )}

              {activeTab === 'property-requests' && (
                <PropertyRequests
                  inquiries={inquiries}
                  viewMode={viewMode}
                  setViewMode={setViewMode}
                  selectedRequest={selectedRequest}
                  setSelectedRequest={setSelectedRequest}
                  setInquiries={setInquiries}
                />
              )}

              {activeTab === 'services' && (
                <ServiceManagement />
              )}

              {activeTab === 'testimonials' && (
                <TestimonialManagement
                  testimonials={testimonials}
                  setTestimonials={setTestimonials}
                />
              )}

              {activeTab === 'users' && (
                <UserManagement
                  users={users}
                  viewMode={viewMode}
                  setViewMode={setViewMode}
                  selectedUser={selectedUser}
                  setSelectedUser={setSelectedUser}
                  setUsers={setUsers}
                />
              )}

              {activeTab === 'admin-management' && (
                <AdminManagement
                  admins={admins}
                  viewMode={viewMode}
                  setViewMode={setViewMode}
                  selectedAdmin={selectedAdmin}
                  setSelectedAdmin={setSelectedAdmin}
                  setAdmins={setAdmins}
                />
              )}

              {activeTab === 'reports' && (
                <Reports
                  exportToExcel={exportToExcel}
                  exportToPDF={exportToPDF}
                />
              )}

              {activeTab === 'settings' && (
                <SiteSettings />
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;