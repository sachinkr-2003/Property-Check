import React, { useState } from 'react';
import { userAPI } from '../../services/apiService';

const UserManagement = ({ users, setUsers, viewMode, setViewMode, selectedUser, setSelectedUser }) => {
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;

        setLoading(true);
        try {
            await userAPI.delete(id);
            setUsers(users.filter(u => (u._id || u.id) !== id));
            alert('User deleted successfully');
        } catch (err) {
            console.error('Delete failed:', err);
            alert('Failed to delete user');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());

        try {
            if (viewMode === 'edit' && selectedUser) {
                const res = await userAPI.update(selectedUser._id || selectedUser.id, userData);
                setUsers(users.map(u => (u._id || u.id) === (selectedUser._id || selectedUser.id) ? res.data : u));
                alert('User updated successfully');
            } else {
                const res = await userAPI.create(userData);
                setUsers([res.data, ...users]);
                alert('User created successfully');
            }
            setViewMode('list');
            setSelectedUser(null);
        } catch (err) {
            console.error('Operation failed:', err);
            alert(err.message || 'Operation failed');
        } finally {
            setSubmitting(false);
        }
    };

    if (viewMode === 'add' || (viewMode === 'edit' && selectedUser)) {
        return (
            <div className="fade-in">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold">
                        <i className={`fas ${viewMode === 'add' ? 'fa-user-plus' : 'fa-user-edit'} me-2 text-primary`}></i>
                        {viewMode === 'add' ? 'Register New User' : 'Update User Profile'}
                    </h4>
                    <button className="btn btn-outline-secondary rounded-pill px-4" onClick={() => { setViewMode('list'); setSelectedUser(null); }}>
                        <i className="fas fa-arrow-left me-2"></i>Back to List
                    </button>
                </div>

                <div className="card border-0 shadow-lg p-4 p-md-5" style={{ borderRadius: '25px' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <label className="form-label small fw-bold text-muted text-uppercase">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control form-control-lg rounded-3 border-light shadow-sm bg-light"
                                    defaultValue={selectedUser?.name || ''}
                                    placeholder="Enter full name"
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small fw-bold text-muted text-uppercase">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control form-control-lg rounded-3 border-light shadow-sm bg-light"
                                    defaultValue={selectedUser?.email || ''}
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small fw-bold text-muted text-uppercase">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control form-control-lg rounded-3 border-light shadow-sm bg-light"
                                    defaultValue={selectedUser?.phone || ''}
                                    placeholder="10 digit mobile number"
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small fw-bold text-muted text-uppercase">Account Status</label>
                                <select
                                    name="status"
                                    className="form-select form-select-lg rounded-3 border-light shadow-sm bg-light"
                                    defaultValue={selectedUser?.status || 'Active'}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <label className="form-label small fw-bold text-muted text-uppercase">Primary Address</label>
                                <textarea
                                    name="address"
                                    className="form-control form-control-lg rounded-3 border-light shadow-sm bg-light"
                                    rows="3"
                                    defaultValue={selectedUser?.address || ''}
                                    placeholder="Enter physical address"
                                ></textarea>
                            </div>
                        </div>
                        <div className="mt-5 d-flex gap-3">
                            <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5 shadow" disabled={submitting}>
                                {submitting ? (
                                    <><span className="spinner-border spinner-border-sm me-2"></span>Processing...</>
                                ) : (
                                    <><i className="fas fa-save me-2"></i>{viewMode === 'add' ? 'Create User' : 'Save Changes'}</>
                                )}
                            </button>
                            <button type="button" className="btn btn-light btn-lg rounded-pill px-5" onClick={() => { setViewMode('list'); setSelectedUser(null); }}>
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
                    <h2 className="fw-bold text-dark mb-1">User Management</h2>
                    <p className="text-muted mb-0">Manage authorized users and their profile data.</p>
                </div>
                <button className="btn btn-primary btn-lg px-4 rounded-pill shadow-sm" onClick={() => setViewMode('add')}>
                    <i className="fas fa-user-plus me-2"></i>Add New User
                </button>
            </div>

            <div className="card shadow-sm border-0 overflow-hidden" style={{ borderRadius: '25px' }}>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead>
                                <tr className="bg-light">
                                    <th className="px-4 py-3 border-0 small text-uppercase text-muted fw-bold">User Identity</th>
                                    <th className="py-3 border-0 small text-uppercase text-muted fw-bold">Contact Details</th>
                                    <th className="py-3 border-0 small text-uppercase text-muted fw-bold">Address</th>
                                    <th className="py-3 border-0 small text-uppercase text-muted fw-bold">Status</th>
                                    <th className="py-3 border-0 small text-uppercase text-muted fw-bold">Joined Date</th>
                                    <th className="px-4 py-3 border-0 text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? users.map((user) => (
                                    <tr key={user._id || user.id}>
                                        <td className="ps-4">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-3 bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '40px', height: '40px' }}>
                                                    {(user.name || 'U').charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <div className="fw-bold text-dark">{user.name || 'Unnamed User'}</div>
                                                    <small className="text-muted">{user.email || 'No email'}</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="fw-medium text-dark"><i className="fas fa-phone-alt me-2 text-muted small"></i>{user.phone}</div>
                                        </td>
                                        <td>
                                            <div className="text-truncate text-muted small" style={{ maxWidth: '150px' }} title={user.address || 'N/A'}>
                                                {user.address || 'N/A'}
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`badge rounded-pill px-3 py-2 ${user.status === 'Active' ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}>
                                                <i className={`fas fa-${user.status === 'Active' ? 'check-circle' : 'times-circle'} me-1`}></i>
                                                {user.status || 'Active'}
                                            </span>
                                        </td>
                                        <td className="text-muted small">
                                            {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : (user.joined || 'N/A')}
                                        </td>
                                        <td className="pe-4 text-end">
                                            <div className="d-flex gap-2 justify-content-end">
                                                <button
                                                    className="btn btn-icon btn-light rounded-circle shadow-sm"
                                                    onClick={() => { setSelectedUser(user); setViewMode('edit'); }}
                                                >
                                                    <i className="fas fa-edit text-primary"></i>
                                                </button>
                                                <button
                                                    className="btn btn-icon btn-light rounded-circle shadow-sm"
                                                    onClick={() => handleDelete(user._id || user.id)}
                                                    disabled={loading}
                                                >
                                                    <i className="fas fa-trash text-danger"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-5">
                                            <div className="py-4">
                                                <i className="fas fa-users-slash fs-1 text-muted opacity-25 mb-3"></i>
                                                <p className="text-muted">No users found in the system.</p>
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

export default UserManagement;
