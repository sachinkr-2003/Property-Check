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
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

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

      // Calculate logic
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
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100">
      
      {/* Sidebar - Remains mostly unchanged but assumes component manages its own Tailwind */}
      <div className="flex-shrink-0 z-10">
        <AdminSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onLogout={onLogout}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Navbar */}
        <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900 dark:text-white m-0">
              {activeTab.replace('-', ' ')}
            </h2>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Search Bar - Aesthetic */}
            <div className="hidden md:flex relative">
              <input type="text" placeholder="Search..." className="bg-gray-100 dark:bg-gray-800 border-none text-sm px-4 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-brand-accent rounded-none text-gray-700 dark:text-gray-300 placeholder-gray-400" />
              <button className="absolute right-3 top-2 text-gray-400 hover:text-brand-accent">
                <i className="fas fa-search text-xs"></i>
              </button>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3 border-r border-gray-200 dark:border-gray-800 pr-6">
              <button onClick={loadAllData} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-brand-accent transition-colors" title="Refresh Data">
                <i className={`fas fa-sync-alt ${loading ? 'animate-spin text-brand-accent' : ''}`}></i>
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-brand-accent transition-colors relative" title="Notifications">
                <i className="fas fa-bell"></i>
                <span className="absolute top-1 right-1 w-2 h-2 rounded-none bg-red-500 border border-white dark:border-gray-900"></span>
              </button>
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              >
                <div className="w-8 h-8 bg-brand-accent text-brand-dark flex items-center justify-center font-bold text-sm">
                  A
                </div>
                <div className="hidden md:block">
                  <p className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider m-0 group-hover:text-brand-accent transition-colors">Admin User</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest m-0">Super Admin</p>
                </div>
                <i className={`fas fa-chevron-down text-gray-400 text-xs ml-1 transition-transform duration-200 ${showProfileDropdown ? 'rotate-180' : ''}`}></i>
              </div>

              {/* Profile Menu Popup */}
              {showProfileDropdown && (
                <div className="absolute right-0 top-full mt-4 w-52 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm rounded-none z-50 animate-[fadeIn_0.2s_ease-out]">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest m-0 mb-1">Signed in as</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white m-0 truncate">admin@propertycheck.com</p>
                  </div>
                  <div className="p-2">
                    <button 
                      onClick={() => { setShowProfileDropdown(false); setActiveTab('settings'); }}
                      className="w-full text-left px-3 py-2.5 text-[11px] font-bold tracking-wider uppercase text-gray-700 dark:text-gray-300 hover:bg-brand-accent/10 hover:text-brand-dark transition-all rounded-none flex items-center gap-3"
                    >
                        <i className="fas fa-sliders-h w-4 text-center"></i> Account Settings
                    </button>
                    <button 
                      onClick={() => { setShowProfileDropdown(false); setActiveTab('admin-management'); }}
                      className="w-full text-left px-3 py-2.5 text-[11px] font-bold tracking-wider uppercase text-gray-700 dark:text-gray-300 hover:bg-brand-accent/10 hover:text-brand-dark transition-all rounded-none flex items-center gap-3"
                    >
                        <i className="fas fa-users-cog w-4 text-center"></i> Manage Admins
                    </button>
                    <div className="my-1 border-t border-gray-100 dark:border-gray-800"></div>
                    <button 
                      onClick={() => { setShowProfileDropdown(false); onLogout(); }}
                      className="w-full text-left px-3 py-2.5 text-[11px] font-bold tracking-wider uppercase text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all rounded-none flex items-center gap-3"
                    >
                        <i className="fas fa-power-off w-4 text-center"></i> Secure Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Scrollable Workspace */}
        <div className="flex-1 overflow-y-auto p-8 relative hide-scroll">
          
          {error && (
            <div className="mb-6 p-4 rounded-none bg-red-50 border border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-900/50 dark:text-red-400 flex items-start gap-3">
              <i className="fas fa-exclamation-circle mt-0.5"></i>
              <div>
                <strong className="block font-medium">Data Loading Failed</strong>
                <span className="text-sm">{error}</span>
              </div>
              <button className="ml-auto opacity-70 hover:opacity-100" onClick={() => setError('')}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          )}

          <div className="animate-[fadeIn_0.3s_ease-out]">
            {loading && !error ? (
              <div className="flex flex-col justify-center items-center h-64 text-gray-400 gap-3">
                <svg className="animate-spin h-8 w-8 text-brand-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                <p className="text-sm font-medium tracking-widest uppercase">Loading workspace...</p>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-900 rounded-none shadow-sm border border-gray-200 dark:border-gray-800 p-6 min-h-[calc(100vh-200px)]">
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
              </div>
            )}
          </div>
        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
