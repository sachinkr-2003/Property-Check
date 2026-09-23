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
            <div className="max-w-3xl mx-auto fade-in">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-gray-900 dark:text-white m-0 text-lg flex items-center gap-2">
                        <div className="bg-brand-accent/20 w-8 h-8 flex items-center justify-center rounded-none text-brand-dark">
                            <i className={`fas ${viewMode === 'add' ? 'fa-user-plus' : 'fa-user-edit'} text-sm`}></i>
                        </div>
                        {viewMode === 'add' ? 'Register New User' : 'Update User Profile'}
                    </h4>
                    <button className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-4 py-1.5 text-sm font-bold transition-colors rounded-none shadow-sm flex items-center gap-2" onClick={() => { setViewMode('list'); setSelectedUser(null); }}>
                        <i className="fas fa-arrow-left"></i> Back to List
                    </button>
                </div>

                <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-none">
                    <div className="p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border"
                                        defaultValue={selectedUser?.name || ''}
                                        placeholder="Enter full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border"
                                        defaultValue={selectedUser?.email || ''}
                                        placeholder="email@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border font-mono"
                                        defaultValue={selectedUser?.phone || ''}
                                        placeholder="10 digit mobile number"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Account Status</label>
                                    <select
                                        name="status"
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border"
                                        defaultValue={selectedUser?.status || 'Active'}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Primary Address</label>
                                    <textarea
                                        name="address"
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border resize-none"
                                        rows="2"
                                        defaultValue={selectedUser?.address || ''}
                                        placeholder="Enter physical address"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-5 pt-4 border-t border-gray-200 dark:border-gray-800">
                                <button type="submit" className="bg-brand-dark hover:bg-black text-white px-6 py-2 text-sm font-bold transition-colors rounded-none flex items-center gap-2" disabled={submitting}>
                                    {submitting ? (
                                        <><i className="fas fa-spinner fa-spin"></i> Processing...</>
                                    ) : (
                                        <><i className="fas fa-save"></i> {viewMode === 'add' ? 'Create User' : 'Save Changes'}</>
                                    )}
                                </button>
                                <button type="button" className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 text-sm font-bold transition-colors rounded-none" onClick={() => { setViewMode('list'); setSelectedUser(null); }}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
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
                <button className="bg-brand-dark hover:bg-black text-white px-6 py-2.5 font-bold transition-colors shadow-sm border border-brand-dark rounded-none" onClick={() => setViewMode('add')}>
                    <i className="fas fa-plus me-2"></i> Add New User
                </button>
            </div>

            <div className="bg-white border border-gray-300 dark:border-gray-700 shadow-sm rounded-none overflow-hidden">
                <div className="card-body p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2">User Identity</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2">Contact Details</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2">Address</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2">Status</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2">Joined Date</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? users.map((user) => (
                                    <tr key={user._id || user.id} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                        <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-brand-dark text-white rounded-none flex items-center justify-center font-bold text-xs shadow-sm">
                                                    {(user.name || 'U').charAt(0).toUpperCase()}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-gray-900 dark:text-gray-100">{user.name || 'Unnamed User'}</span>
                                                    <span className="text-gray-500 text-xs">{user.email || 'No email'}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 font-mono text-gray-600 dark:text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <i className="fas fa-phone-alt text-[10px]"></i> {user.phone}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 max-w-[150px] truncate" title={user.address || 'N/A'}>
                                            {user.address || 'N/A'}
                                        </td>
                                        <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 font-bold uppercase tracking-wider">
                                            <span className={`px-2 py-1 text-[10px] uppercase font-bold tracking-wider border rounded-none flex items-center gap-1 w-max ${user.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-red-50 text-red-600 border-red-200'}`}>
                                                <i className={`fas fa-${user.status === 'Active' ? 'check' : 'times'}`}></i> {user.status || 'Active'}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 text-gray-500 text-xs font-mono">
                                            {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : (user.joined || 'N/A')}
                                        </td>
                                        <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 text-center">
                                            <div className="flex gap-4 justify-center">
                                                <button
                                                    className="text-gray-400 hover:text-brand-dark transition-colors"
                                                    onClick={() => { setSelectedUser(user); setViewMode('edit'); }}
                                                >
                                                    <i className="fas fa-edit text-lg"></i>
                                                </button>
                                                <button
                                                    className="text-red-500 hover:text-red-700 transition-colors"
                                                    onClick={() => handleDelete(user._id || user.id)}
                                                    disabled={loading}
                                                >
                                                    <i className="fas fa-trash-alt text-lg"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-8 border border-gray-300 dark:border-gray-700">
                                            <i className="fas fa-users-slash text-4xl text-gray-300 dark:text-gray-700 mb-3 block"></i>
                                            <p className="text-gray-500 m-0">No users found in the system.</p>
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
