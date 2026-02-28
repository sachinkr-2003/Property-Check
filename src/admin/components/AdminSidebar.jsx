import React from 'react';

const AdminSidebar = ({ activeTab, setActiveTab, onLogout }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
        { id: 'property-requests', label: 'Property Requests', icon: 'fas fa-file-contract' },
        { id: 'services', label: 'Manage Services', icon: 'fas fa-concierge-bell' },
        { id: 'testimonials', label: 'Testimonials', icon: 'fas fa-comments' },
        { id: 'users', label: 'User Management', icon: 'fas fa-users' },
        { id: 'admin-management', label: 'Admin Management', icon: 'fas fa-user-shield' },
        { id: 'reports', label: 'Reports', icon: 'fas fa-chart-bar' },
        { id: 'settings', label: 'Site Settings', icon: 'fas fa-cog' }
    ];

    return (
        <div className="admin-sidebar shadow-lg" style={{
            width: '280px',
            background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
            minHeight: '100vh',
            borderRight: '1px solid rgba(255,255,255,0.1)',
            position: 'sticky',
            top: 0
        }}>
            <style>
                {`
                    .nav-item-premium {
                        transition: all 0.3s ease;
                        border-radius: 12px;
                        margin: 4px 15px;
                        padding: 12px 18px;
                        color: rgba(255,255,255,0.7);
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        border: none;
                        background: transparent;
                        width: calc(100% - 30px);
                    }
                    .nav-item-premium:hover {
                        background: rgba(255,255,255,0.05);
                        color: #fff;
                        transform: translateX(5px);
                    }
                    .nav-item-premium.active {
                        background: linear-gradient(45deg, #667eea, #764ba2);
                        color: #fff;
                        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
                    }
                    .admin-logo-box {
                        padding: 30px 20px;
                        margin-bottom: 20px;
                        border-bottom: 1px solid rgba(255,255,255,0.05);
                    }
                `}
            </style>

            <div className="admin-logo-box text-center">
                <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style={{ width: '45px', height: '45px' }}>
                    <i className="fas fa-shield-alt text-dark fs-5"></i>
                </div>
                <h5 className="mb-0 fw-bold text-white tracking-wider">GPC ADMIN</h5>
                <small className="text-muted text-uppercase" style={{ fontSize: '10px', letterSpacing: '1px' }}>Management Suite</small>
            </div>

            <div className="nav flex-column mt-2">
                {menuItems.map(item => (
                    <button
                        key={item.id}
                        className={`nav-item-premium ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(item.id)}
                    >
                        <i className={`${item.icon} me-3`} style={{ width: '20px' }}></i>
                        <span className="fw-medium">{item.label}</span>
                    </button>
                ))}

                <div className="mt-auto pb-4">
                    <hr className="mx-4 my-4 opacity-10" />
                    <button
                        className="nav-item-premium text-danger hover-bg-danger mt-auto"
                        onClick={onLogout}
                        style={{ border: 'none' }}
                    >
                        <i className="fas fa-sign-out-alt me-3" style={{ width: '20px' }}></i>
                        <span className="fw-medium">Sign Out</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;
