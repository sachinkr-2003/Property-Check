import React from 'react';

const AdminSidebar = ({ activeTab, setActiveTab, onLogout, onClose }) => {
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
        <div className="w-64 shrink-0 bg-brand-dark border-r border-gray-800 flex flex-col h-screen sticky top-0 text-gray-300 font-sans shadow-lg">
            <div className="py-4 px-6 border-b border-gray-800 text-center flex-shrink-0 bg-black/20 flex items-center justify-between md:block relative">
                <div className="flex-1 flex flex-col items-center">
                    <div className="w-10 h-10 bg-white rounded-none mx-auto flex items-center justify-center mb-2 shadow-sm">
                        <i className="fas fa-shield-alt text-brand-dark text-lg"></i>
                    </div>
                    <h1 className="text-white font-bold tracking-widest text-[14px] m-0 uppercase flex-1">GPC Admin</h1>
                </div>
                {onClose && (
                    <button 
                        onClick={onClose} 
                        className="md:hidden text-gray-400 hover:text-white absolute right-4 top-4 p-2 transition-colors"
                    >
                        <i className="fas fa-times text-lg"></i>
                    </button>
                )}
            </div>

            <nav className="flex-1 overflow-y-auto hide-scroll py-3">
                {menuItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center px-6 py-[14px] text-[15px] tracking-wide font-medium transition-colors border-l-[3px] rounded-none ${
                            activeTab === item.id 
                            ? 'bg-black/30 border-brand-accent text-white' 
                            : 'border-transparent hover:bg-white/5 hover:text-white'
                        }`}
                    >
                        <i className={`${item.icon} w-8 text-left text-base opacity-90`}></i>
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="p-3 border-t border-gray-800 flex-shrink-0 bg-black/10">
                <button
                    onClick={onLogout}
                    className="w-full flex items-center px-5 py-3 text-[15px] font-bold text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors rounded-none"
                >
                    <i className="fas fa-sign-out-alt w-8 text-left text-base opacity-90"></i>
                    <span>Sign Out</span>
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
