import React from 'react';

const DashboardOverview = ({ inquiries = [], stats = {} }) => {
    const statCards = [
        { label: 'Total Requests', value: inquiries.length, icon: 'fas fa-clipboard-list', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
        { label: 'Pending', value: stats.pendingVerifications || 0, icon: 'fas fa-clock', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
        { label: 'Completed', value: stats.completedVerifications || 0, icon: 'fas fa-check-double', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
        { label: 'Revenue', value: `₹${(stats.monthlyRevenue || 0).toLocaleString()}`, icon: 'fas fa-wallet', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' }
    ];

    return (
        <div className="font-sans animate-[fadeIn_0.3s_ease-out]">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Dashboard Overview</h2>
                    <p className="text-gray-500 text-sm">Welcome back, Admin. Here's what's happening today.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 py-2 text-sm font-bold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-none shadow-sm flex items-center gap-2">
                    <i className="fas fa-calendar-alt text-brand-dark dark:text-brand-accent"></i>
                    {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statCards.map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm p-4 rounded-none flex justify-between items-center">
                        <div>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-0 leading-none">{item.value}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-0 mt-1">{item.label}</p>
                        </div>
                        <div className={`w-10 h-10 flex items-center justify-center rounded-none ${item.bg} dark:bg-gray-700 border ${item.border} dark:border-gray-600`}>
                            <i className={`${item.icon} text-base ${item.color} dark:text-gray-100`}></i>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Recent Activity Table */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-none">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-0 uppercase tracking-widest text-sm">Recent Activity</h5>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2">Client</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2">Service</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2">Status</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inquiries.length > 0 ? inquiries.slice(0, 6).map((inquiry, idx) => {
                                    const name = inquiry.name || (inquiry.user && inquiry.user.name) || 'Anonymous';
                                    const phone = inquiry.phone || (inquiry.user && inquiry.user.phone) || 'N/A';
                                    return (
                                        <tr key={idx} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                            <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white">
                                                <div className="font-bold">{name}</div>
                                                <div className="text-gray-500 text-xs">{phone}</div>
                                            </td>
                                            <td className="px-4 py-3 text-sm font-medium border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                                                {inquiry.serviceType || 'Standard'}
                                            </td>
                                            <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 font-bold uppercase tracking-wider">
                                                {inquiry.status === 'Completed' ? (
                                                    <span className="text-emerald-600 dark:text-emerald-400">Completed</span>
                                                ) : inquiry.status === 'In Progress' ? (
                                                    <span className="text-amber-600 dark:text-amber-400">In Progress</span>
                                                ) : (
                                                    <span className="text-gray-600 dark:text-gray-400">{inquiry.status || 'Pending'}</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-mono">
                                                {new Date(inquiry.createdAt || Date.now()).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    );
                                }) : (
                                    <tr>
                                        <td colSpan="4" className="text-center py-12 text-gray-500 dark:text-gray-400">
                                            <i className="fas fa-inbox text-4xl mb-4 opacity-50 block"></i>
                                            <p className="font-medium">No recent requests found</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Stats Sidebar Panel */}
                <div className="bg-gray-900 overflow-hidden border border-gray-800 rounded-none shadow-sm h-full flex flex-col">
                    <div className="p-6 border-b border-gray-800">
                        <h5 className="font-bold text-white uppercase tracking-widest text-sm mb-0">System Metrics</h5>
                    </div>
                    <div className="p-6 flex-1 text-white">
                        <div className="mb-8">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                <span>Verification Efficiency</span>
                                <span className="text-white">85%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-800 relative rounded-none">
                                <div className="absolute top-0 left-0 h-full bg-brand-accent w-[85%]"></div>
                            </div>
                        </div>
                        
                        <div className="mb-8">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                <span>Client Satisfaction</span>
                                <span className="text-white">98%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-800 relative rounded-none">
                                <div className="absolute top-0 left-0 h-full bg-emerald-500 w-[98%]"></div>
                            </div>
                        </div>

                        <div className="mt-8 p-5 bg-gray-800 border border-gray-700 rounded-none">
                            <i className="fas fa-lightbulb text-brand-accent text-xl mb-3 block"></i>
                            <h6 className="font-bold text-white mb-1 uppercase text-xs tracking-wider">Pro Tip</h6>
                            <p className="text-xs text-gray-400 leading-relaxed m-0">Ensure that service prices in Site Settings always reflect current local market changes for maximum conversion.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardOverview;
