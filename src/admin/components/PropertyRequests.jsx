import React, { useState } from 'react';
import { propertyAPI } from '../../services/apiService';

const PropertyRequests = ({ inquiries, viewMode, setViewMode, selectedRequest, setSelectedRequest, setInquiries }) => {
    const [loading, setLoading] = useState(false);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to remove this lead?')) return;

        setLoading(true);
        try {
            await propertyAPI.delete(id);
            setInquiries(inquiries.filter(item => (item._id || item.id) !== id));
            setViewMode('list');
            setSelectedRequest(null);
            alert('Lead removed successfully');
        } catch (err) {
            console.error('Failed to delete lead:', err);
            alert('Failed to remove lead');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateStatus = async (id, status) => {
        setLoading(true);
        try {
            await propertyAPI.update(id, { status });
            setInquiries(inquiries.map(item =>
                (item._id || item.id) === id ? { ...item, status } : item
            ));
            if (selectedRequest) {
                setSelectedRequest({ ...selectedRequest, status });
            }
            alert(`Status updated to ${status}`);
        } catch (err) {
            console.error('Failed to update status:', err);
            alert('Failed to update status');
        } finally {
            setLoading(false);
        }
    };
    if (viewMode === 'add') {
        return (
            <div className="row justify-content-center fade-in">
                <div className="col-lg-10">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="fw-bold"><i className="fas fa-folder-plus me-2 text-primary"></i> Create New Business Lead</h4>
                        <button className="btn btn-outline-secondary rounded-pill px-4" onClick={() => setViewMode('list')}>
                            <i className="fas fa-arrow-left me-2"></i>Back to List
                        </button>
                    </div>
                    <div className="card border-0 shadow-lg" style={{ borderRadius: '25px' }}>
                        <div className="card-body p-4 p-md-5">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                propertyAPI.create({
                                    name: formData.get('name'),
                                    phone: formData.get('phone'),
                                    propertyAddress: formData.get('propertyAddress'),
                                    propertyType: 'Residential',
                                    serviceType: formData.get('serviceType'),
                                    status: formData.get('status')
                                }).then(res => {
                                    setInquiries([res.data, ...inquiries]);
                                    setViewMode('list');
                                    alert('Lead created successfully');
                                }).catch(err => {
                                    console.error('Create error:', err);
                                    alert('Error: ' + (err.message || 'Server error'));
                                });
                            }}>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label className="form-label small fw-bold text-muted text-uppercase">Client Full Name</label>
                                        <input type="text" name="name" className="form-control form-control-lg rounded-3 border-light shadow-sm bg-light" placeholder="e.g. John Doe" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label small fw-bold text-muted text-uppercase">Contact Number</label>
                                        <input type="tel" name="phone" className="form-control form-control-lg rounded-3 border-light shadow-sm bg-light" placeholder="+91 00000 00000" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label small fw-bold text-muted text-uppercase">Service Category</label>
                                        <select name="serviceType" className="form-select form-select-lg rounded-3 border-light shadow-sm bg-light" required>
                                            <option value="Basic">Basic Verification</option>
                                            <option value="Complete">Complete Verification</option>
                                            <option value="Premium">Premium Service</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label small fw-bold text-muted text-uppercase">Initial Status</label>
                                        <select name="status" className="form-select form-select-lg rounded-3 border-light shadow-sm bg-light" required>
                                            <option value="Pending">Pending</option>
                                            <option value="In Progress">In Progress</option>
                                            <option value="Completed">Completed</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label small fw-bold text-muted text-uppercase">Property Specification / Address</label>
                                        <textarea name="propertyAddress" className="form-control form-control-lg rounded-3 border-light shadow-sm bg-light" rows="4" placeholder="Full address and property details..." required></textarea>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 mt-5">
                                    <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5 shadow">
                                        <i className="fas fa-check-circle me-2"></i>Generate Request
                                    </button>
                                    <button type="button" className="btn btn-light btn-lg rounded-pill px-5" onClick={() => setViewMode('list')}>
                                        Discard
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (viewMode === 'view' && selectedRequest) {
        return (
            <div className="fade-in">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold"><i className="fas fa-id-card me-2 text-primary"></i> Request Dossier: #{selectedRequest.id || 'N/A'}</h4>
                    <button className="btn btn-outline-secondary rounded-pill px-4" onClick={() => { setViewMode('list'); setSelectedRequest(null); }}>
                        <i className="fas fa-arrow-left me-2"></i>Back to List
                    </button>
                </div>
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm p-4 mb-4" style={{ borderRadius: '25px' }}>
                            <div className="d-flex justify-content-between align-items-start mb-4">
                                <div>
                                    <h5 className="fw-bold text-primary mb-1">Property Information</h5>
                                    <p className="text-muted small">Comprehensive verification details for this site.</p>
                                </div>
                                <span className={`badge rounded-pill px-4 py-2 ${selectedRequest.status === 'Completed' ? 'bg-success-subtle text-success' :
                                    selectedRequest.status === 'In Progress' ? 'bg-warning-subtle text-warning' :
                                        'bg-secondary-subtle text-secondary'
                                    }`} style={{ fontSize: '13px' }}>
                                    {selectedRequest.status}
                                </span>
                            </div>
                            <div className="bg-light p-4 rounded-4 mb-4">
                                <h6 className="fw-bold text-dark small text-uppercase mb-2">Location / Address</h6>
                                <p className="mb-0 fs-5 fw-medium text-dark">{selectedRequest.property || selectedRequest.address}</p>
                            </div>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="p-3 border rounded-4 border-light-subtle">
                                        <small className="text-muted text-uppercase fw-bold d-block mb-1">Service Type</small>
                                        <span className="fw-bold">{selectedRequest.serviceType || 'Standard Verification'}</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 border rounded-4 border-light-subtle">
                                        <small className="text-muted text-uppercase fw-bold d-block mb-1">Request Date</small>
                                        <span className="fw-bold">{selectedRequest.date || new Date().toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '25px' }}>
                            <h5 className="fw-bold mb-4">Internal Progress Notes</h5>
                            <div className="p-4 bg-light-subtle border-start border-4 border-primary rounded-end-4 mb-3">
                                <p className="mb-0 text-muted">Awaiting document submission from Bihar Land Records department.</p>
                                <small className="text-primary mt-2 d-block fw-bold">Admin Update • Just now</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-sm p-4 h-100" style={{ borderRadius: '25px' }}>
                            <h5 className="fw-bold mb-4">Client Portfolio</h5>
                            <div className="text-center mb-4">
                                <div className="bg-primary-subtle text-primary rounded-circle d-inline-flex align-items-center justify-content-center fw-bold mb-3" style={{ width: '80px', height: '80px', fontSize: '28px' }}>
                                    {selectedRequest.name ? selectedRequest.name.charAt(0) : 'U'}
                                </div>
                                <h5 className="fw-bold mb-1">{selectedRequest.name}</h5>
                                <p className="text-muted small">{selectedRequest.phone}</p>
                            </div>
                            <hr className="my-4 opacity-10" />
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary rounded-pill py-3 fw-bold shadow-sm" onClick={() => setViewMode('edit')}>
                                    <i className="fas fa-edit me-2"></i>Modify Request
                                </button>
                                <button
                                    className="btn btn-outline-success rounded-pill py-3 fw-bold"
                                    onClick={() => handleUpdateStatus(selectedRequest._id || selectedRequest.id, 'Completed')}
                                    disabled={loading || selectedRequest.status === 'Completed'}
                                >
                                    <i className="fas fa-check-double me-2"></i>{selectedRequest.status === 'Completed' ? 'Already Resolved' : 'Mark as Resolved'}
                                </button>
                                <button
                                    className="btn btn-outline-danger border-0 rounded-pill mt-3 py-2 small fw-bold"
                                    onClick={() => handleDelete(selectedRequest._id || selectedRequest.id)}
                                    disabled={loading}
                                >
                                    <i className="fas fa-trash-alt me-2"></i>Remove Lead
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fade-in">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
                <div>
                    <h2 className="fw-bold text-dark mb-1">Business Management</h2>
                    <p className="text-muted mb-0">Track and manage all property verification dossiers.</p>
                </div>
                <button className="btn btn-primary btn-lg px-4 rounded-pill shadow-sm" onClick={() => setViewMode('add')}>
                    <i className="fas fa-plus-circle me-2"></i>Add New Lead
                </button>
            </div>

            <div className="card shadow-sm border-0 overflow-hidden" style={{ borderRadius: '25px' }}>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead>
                                <tr className="bg-light">
                                    <th className="px-4 py-3 border-0 small text-uppercase text-muted fw-bold">Dossier ID</th>
                                    <th className="py-3 border-0 small text-uppercase text-muted fw-bold">Client Information</th>
                                    <th className="py-3 border-0 small text-uppercase text-muted fw-bold">Property Location</th>
                                    <th className="py-3 border-0 small text-uppercase text-muted fw-bold">Category</th>
                                    <th className="py-3 border-0 small text-uppercase text-muted fw-bold">Current Status</th>
                                    <th className="px-4 py-3 border-0"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {inquiries.length > 0 ? inquiries.map((inquiry, idx) => {
                                    const name = inquiry.name || (inquiry.user && inquiry.user.name) || 'Anonymous';
                                    const phone = inquiry.phone || (inquiry.user && inquiry.user.phone) || 'N/A';
                                    const email = inquiry.email || (inquiry.user && inquiry.user.email) || 'N/A';

                                    return (
                                        <tr key={inquiry._id || idx} className="align-middle">
                                            <td className="ps-4">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar me-3 bg-gradient-brand text-white rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '40px', height: '40px', background: 'linear-gradient(45deg, #1e3c72, #2a5298)' }}>
                                                        {name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <div className="fw-bold text-dark">{name}</div>
                                                        <small className="text-muted"><i className="far fa-envelope me-1"></i>{email}</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="fw-medium text-dark"><i className="fas fa-phone-alt me-2 text-muted small"></i>{phone}</div>
                                            </td>
                                            <td>
                                                <div
                                                    className="text-truncate text-muted small"
                                                    style={{ maxWidth: '200px' }}
                                                    title={inquiry.property || inquiry.propertyAddress || 'N/A'}
                                                >
                                                    <i className="fas fa-map-marker-alt me-1"></i>
                                                    {inquiry.property || inquiry.propertyAddress || 'N/A'}
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-light text-dark border fw-medium px-3 py-2 rounded-pill">
                                                    {inquiry.serviceType || 'Public Inquiry'}
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`badge rounded-pill px-3 py-2 ${inquiry.status === 'Completed' ? 'bg-success-subtle text-success' :
                                                    inquiry.status === 'In Progress' ? 'bg-primary-subtle text-primary' :
                                                        inquiry.status === 'Cancelled' ? 'bg-danger-subtle text-danger' :
                                                            'bg-warning-subtle text-warning'
                                                    }`}>
                                                    <i className={`fas fa-${inquiry.status === 'Completed' ? 'check-circle' :
                                                        inquiry.status === 'In Progress' ? 'spinner fa-spin' :
                                                            inquiry.status === 'Cancelled' ? 'times-circle' :
                                                                'clock'
                                                        } me-1`}></i>
                                                    {inquiry.status || 'Pending'}
                                                </span>
                                            </td>
                                            <td className="pe-4 text-end">
                                                <div className="d-flex gap-2 justify-content-end">
                                                    <button
                                                        className="btn btn-icon btn-light rounded-circle shadow-sm"
                                                        onClick={() => {
                                                            setSelectedRequest(inquiry);
                                                            setViewMode('view');
                                                        }}
                                                    >
                                                        <i className="fas fa-eye text-primary"></i>
                                                    </button>
                                                    <button
                                                        className="btn btn-icon btn-light rounded-circle shadow-sm"
                                                        onClick={() => handleDelete(inquiry._id || inquiry.id)}
                                                        disabled={loading}
                                                    >
                                                        <i className="fas fa-trash text-danger"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                }) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-5">
                                            <div className="py-4">
                                                <i className="fas fa-folder-open fs-1 text-muted opacity-25 mb-3"></i>
                                                <p className="text-muted">No business leads found yet.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyRequests;
