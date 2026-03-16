import React, { useState } from 'react';
import { adminAPI } from '../../services/apiService';

const AdminManagement = ({ admins, setAdmins, viewMode, setViewMode, selectedAdmin, setSelectedAdmin }) => {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData(e.target);
        const adminData = Object.fromEntries(formData.entries());

        try {
            if (viewMode === 'edit' && selectedAdmin) {
                const res = await adminAPI.updateAdmin(selectedAdmin._id || selectedAdmin.id, adminData);
                setAdmins(admins.map(a => (a._id || a.id) === (selectedAdmin._id || selectedAdmin.id) ? res.data : a));
                alert('Admin updated successfully');
            } else {
                const res = await adminAPI.createAdmin(adminData);
                setAdmins([res.data, ...admins]);
                alert('Admin created successfully');
            }
            setViewMode('list');
            setSelectedAdmin(null);
        } catch (err) {
            console.error('Operation failed:', err);
            alert(err.message || 'Operation failed');
        } finally {
            setSubmitting(false);
        }
    };

    if (viewMode === 'add' || (viewMode === 'edit' && selectedAdmin)) {
        return (
            <div className="fade-in">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold">
                        <i className={`fas ${viewMode === 'add' ? 'fa-user-shield' : 'fa-user-cog'} me-2 text-primary`}></i>
                        {viewMode === 'add' ? 'Add New System Admin' : 'Edit Admin Profile'}
                    </h4>
                    <button className="btn btn-outline-secondary rounded-pill px-4" onClick={() => { setViewMode('list'); setSelectedAdmin(null); }}>
                        <i className="fas fa-arrow-left me-2"></i>Back to List
                    </button>
                </div>

                <div className="card border-0 shadow-lg p-4 p-md-5" style={{ borderRadius: '25px' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <label className="form-label small fw-bold text-muted text-uppercase">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control form-control-lg rounded-3 border-light shadow-sm bg-light"
                                    defaultValue={selectedAdmin?.username || ''}
                                    placeholder="Enter username"
                                    required
                                />
                            </div>
                            {viewMode === 'add' && (
                                <div className="col-md-6">
                                    <label className="form-label small fw-bold text-muted text-uppercase">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control form-control-lg rounded-3 border-light shadow-sm bg-light"
                                        placeholder="Min. 6 characters"
                                        required
                                    />
                                </div>
                            )}
                            <div className="col-md-6">
                                <label className="form-label small fw-bold text-muted text-uppercase">Security Role</label>
                                <select
                                    name="role"
                                    className="form-select form-select-lg rounded-3 border-light shadow-sm bg-light"
                                    defaultValue={selectedAdmin?.role || 'Admin'}
                                    required
                                >
                                    <option value="Admin">Admin</option>
                                    <option value="Super Admin">Super Admin</option>
                                    <option value="Manager">Manager</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small fw-bold text-muted text-uppercase">Status</label>
                                <select
                                    name="status"
                                    className="form-select form-select-lg rounded-3 border-light shadow-sm bg-light"
                                    defaultValue={selectedAdmin?.status || 'Active'}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-5 d-flex gap-3">
                            <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5 shadow" disabled={submitting}>
                                {submitting ? (
                                    <><span className="spinner-border spinner-border-sm me-2"></span>Processing...</>
                                ) : (
                                    <><i className="fas fa-save me-2"></i>{viewMode === 'add' ? 'Register Admin' : 'Update Admin'}</>
                                )}
                            </button>
                            <button type="button" className="btn btn-light btn-lg rounded-pill px-5" onClick={() => { setViewMode('list'); setSelectedAdmin(null); }}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="fade-in">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold text-dark mb-1">Admin Management</h2>
                    <p className="text-muted mb-0">Manage system administrators and security privileges.</p>
                </div>
                <button className="btn btn-primary btn-lg px-4 rounded-pill shadow-sm" onClick={() => setViewMode('add')}>
                    <i className="fas fa-plus me-2"></i>New Admin
                </button>
            </div>

            <div className="card shadow-sm border-0 overflow-hidden" style={{ borderRadius: '25px' }}>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead>
                                <tr className="bg-light">
                                    <th className="px-4 py-3 border-0 small text-uppercase text-muted fw-bold">Admin Identity</th>
                                    <th className="py-3 border-0 small text-uppercase text-muted fw-bold">Role</th>
                                    <th className="py-3 border-0 small text-uppercase text-muted fw-bold">Status</th>
                                    <th className="py-3 border-0 small text-uppercase text-muted fw-bold">Last Login</th>
                                    <th className="px-4 py-3 border-0 text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {admins.map(admin => (
                                    <tr key={admin._id || admin.id}>
                                        <td className="ps-4">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-3 bg-dark text-white rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '40px', height: '40px' }}>
                                                    {admin.username.charAt(0).toUpperCase()}
                                                </div>
                                                <div className="fw-bold text-dark">{admin.username}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`badge ${admin.role === 'Super Admin' ? 'bg-danger-subtle text-danger' : 'bg-info-subtle text-info'} rounded-pill px-3 py-2 fw-medium`}>
                                                {admin.role}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`badge rounded-pill px-3 py-2 ${admin.status === 'Active' ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'}`}>
                                                <i className={`fas fa-${admin.status === 'Active' ? 'check-circle' : 'times-circle'} me-1`}></i>
                                                {admin.status}
                                            </span>
                                        </td>
                                        <td className="text-muted small">
                                            {admin.lastLogin ? new Date(admin.lastLogin).toLocaleString() : 'Never'}
                                        </td>
                                        <td className="pe-4 text-end">
                                            <button
                                                className="btn btn-icon btn-light rounded-circle shadow-sm"
                                                onClick={() => { setSelectedAdmin(admin); setViewMode('edit'); }}
                                            >
                                                <i className="fas fa-edit text-primary"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminManagement;
