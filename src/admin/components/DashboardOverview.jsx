import React from 'react';

const DashboardOverview = ({ inquiries = [], stats = {} }) => {
    return (
        <div className="fade-in">
            <div className="d-flex justify-content-between align-items-end mb-4">
                <div>
                    <h2 className="fw-bold text-dark mb-1">Dashboard Overview</h2>
                    <p className="text-muted mb-0">Welcome back, Admin. Here's what's happening today.</p>
                </div>
                <div className="bg-white px-3 py-2 rounded-3 shadow-sm border small fw-bold text-muted">
                    <i className="fas fa-calendar-alt me-2 text-primary"></i>
                    {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
            </div>

            <div className="row g-4 mb-5">
                {[
                    { label: 'Total Requests', value: inquiries.length, icon: 'fas fa-clipboard-list', color: '#667eea', trend: '+12%' },
                    { label: 'Pending', value: stats.pendingVerifications || 0, icon: 'fas fa-clock', color: '#f39c12', trend: '-2%' },
                    { label: 'Completed', value: stats.completedVerifications || 0, icon: 'fas fa-check-double', color: '#27ae60', trend: '+5%' },
                    { label: 'Revenue', value: `₹${(stats.monthlyRevenue || 0).toLocaleString()}`, icon: 'fas fa-wallet', color: '#3498db', trend: '+8%' }
                ].map((item, idx) => (
                    <div className="col-md-3" key={idx}>
                        <div className="card border-0 shadow-sm p-3 h-100" style={{ borderRadius: '20px' }}>
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: `${item.color}15`, color: item.color }}>
                                    <i className={`${item.icon} fs-5`}></i>
                                </div>
                                <span className={`badge rounded-pill ${item.trend.startsWith('+') ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`} style={{ fontSize: '11px' }}>
                                    {item.trend} <i className={`fas fa-caret-${item.trend.startsWith('+') ? 'up' : 'down'} ms-1`}></i>
                                </span>
                            </div>
                            <h3 className="fw-bold mb-0">{item.value}</h3>
                            <small className="text-muted fw-medium">{item.label}</small>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm overflow-hidden" style={{ borderRadius: '25px' }}>
                        <div className="card-header bg-white py-4 px-4 border-0 d-flex justify-content-between align-items-center">
                            <h5 className="mb-0 fw-bold text-dark">Recent Activity</h5>
                            <button className="btn btn-light btn-sm rounded-pill px-3">View All</button>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th className="px-4 py-3 border-0 small text-uppercase text-muted fw-bold">Client</th>
                                            <th className="py-3 border-0 small text-uppercase text-muted fw-bold">Service</th>
                                            <th className="py-3 border-0 small text-uppercase text-muted fw-bold">Status</th>
                                            <th className="py-3 border-0 small text-uppercase text-muted fw-bold">Date</th>
                                            <th className="px-4 py-3 border-0"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {inquiries.length > 0 ? inquiries.slice(0, 6).map((inquiry, idx) => {
                                            const name = inquiry.name || (inquiry.user && inquiry.user.name) || 'Anonymous';
                                            const phone = inquiry.phone || (inquiry.user && inquiry.user.phone) || 'N/A';
                                            return (
                                                <tr key={idx}>
                                                    <td className="px-4 py-4">
                                                        <div className="d-flex align-items-center">
                                                            <div className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold me-3" style={{ width: '40px', height: '40px', fontSize: '14px' }}>
                                                                {name.charAt(0)}
                                                            </div>
                                                            <div>
                                                                <div className="fw-bold text-dark">{name}</div>
                                                                <small className="text-muted">{phone}</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="py-4">
                                                        <span className="text-dark fw-medium small">{inquiry.serviceType || 'Standard'}</span>
                                                    </td>
                                                    <td className="py-4">
                                                        <span className={`badge rounded-pill px-3 py-2 ${inquiry.status === 'Completed' ? 'bg-success-subtle text-success' :
                                                            inquiry.status === 'In Progress' ? 'bg-warning-subtle text-warning' :
                                                                'bg-secondary-subtle text-secondary'
                                                            }`} style={{ fontSize: '11px' }}>
                                                            {inquiry.status || 'Pending'}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 text-muted small">{new Date(inquiry.createdAt || Date.now()).toLocaleDateString()}</td>
                                                    <td className="px-4 py-4 text-end">
                                                        <button className="btn btn-link link-primary p-0"><i className="fas fa-chevron-right"></i></button>
                                                    </td>
                                                </tr>
                                            );
                                        }) : (
                                            <tr>
                                                <td colSpan="5" className="text-center py-5 text-muted">
                                                    <i className="fas fa-inbox fs-1 mb-3 opacity-25"></i>
                                                    <h5>No recent requests found</h5>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '25px', background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }}>
                        <div className="card-body p-4 text-white">
                            <h5 className="fw-bold mb-4">Quick Stats</h5>
                            <div className="mb-4">
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span>Verification Efficiency</span>
                                    <span>85%</span>
                                </div>
                                <div className="progress" style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="d-flex justify-content-between mb-2 small">
                                    <span>Client Satisfaction</span>
                                    <span>98%</span>
                                </div>
                                <div className="progress" style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '98%' }}></div>
                                </div>
                            </div>
                            <div className="mt-5 p-4 rounded-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <i className="fas fa-lightbulb text-warning mb-3 fs-4"></i>
                                <h6 className="fw-bold">Pro Tip:</h6>
                                <p className="small mb-0 opacity-75">Update service prices in Site Settings to reflect market changes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
