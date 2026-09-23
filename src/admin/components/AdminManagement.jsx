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
            <div className="max-w-3xl mx-auto fade-in">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-gray-900 dark:text-white m-0 text-lg flex items-center gap-2">
                        <div className="bg-brand-accent/20 w-8 h-8 flex items-center justify-center rounded-none text-brand-dark">
                            <i className={`fas ${viewMode === 'add' ? 'fa-user-shield' : 'fa-user-cog'} text-sm`}></i>
                        </div>
                        {viewMode === 'add' ? 'Add New System Admin' : 'Edit Admin Profile'}
                    </h4>
                    <button className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-4 py-1.5 text-sm font-bold transition-colors rounded-none shadow-sm flex items-center gap-2" onClick={() => { setViewMode('list'); setSelectedAdmin(null); }}>
                        <i className="fas fa-arrow-left"></i> Back to List
                    </button>
                </div>

                <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-none">
                    <div className="p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border font-medium"
                                        defaultValue={selectedAdmin?.username || ''}
                                        placeholder="Enter username"
                                        required
                                    />
                                </div>
                                {viewMode === 'add' && (
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border font-mono"
                                            placeholder="Min. 6 characters"
                                            required
                                        />
                                    </div>
                                )}
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Security Role</label>
                                    <select
                                        name="role"
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border"
                                        defaultValue={selectedAdmin?.role || 'Admin'}
                                        required
                                    >
                                        <option value="Admin">Admin</option>
                                        <option value="Super Admin">Super Admin</option>
                                        <option value="Manager">Manager</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Status</label>
                                    <select
                                        name="status"
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border"
                                        defaultValue={selectedAdmin?.status || 'Active'}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-5 pt-4 border-t border-gray-200 dark:border-gray-800">
                                <button type="submit" className="bg-brand-dark hover:bg-black text-white px-6 py-2 text-sm font-bold transition-colors rounded-none flex items-center gap-2" disabled={submitting}>
                                    {submitting ? (
                                        <><i className="fas fa-spinner fa-spin"></i> Processing...</>
                                    ) : (
                                        <><i className="fas fa-save"></i> {viewMode === 'add' ? 'Register Admin' : 'Update Admin'}</>
                                    )}
                                </button>
                                <button type="button" className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 text-sm font-bold transition-colors rounded-none" onClick={() => { setViewMode('list'); setSelectedAdmin(null); }}>
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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h2 className="font-bold text-gray-900 dark:text-white m-0 text-2xl">Admin Management</h2>
                    <p className="text-gray-500 m-0 mt-1">Manage system administrators and security privileges.</p>
                </div>
                <button className="bg-brand-dark hover:bg-black text-white px-6 py-2.5 font-bold transition-colors shadow-sm border border-brand-dark rounded-none flex items-center gap-2" onClick={() => setViewMode('add')}>
                    <i className="fas fa-plus"></i> New Admin
                </button>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-none overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                                <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase border border-gray-300 dark:border-gray-700 border-b-2">Admin Identity</th>
                                <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase border border-gray-300 dark:border-gray-700 border-b-2">Role</th>
                                <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase border border-gray-300 dark:border-gray-700 border-b-2">Status</th>
                                <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase border border-gray-300 dark:border-gray-700 border-b-2">Last Login</th>
                                <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase border border-gray-300 dark:border-gray-700 border-b-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map(admin => (
                                <tr key={admin._id || admin.id} className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 flex items-center justify-center font-bold text-xs rounded-none">
                                                {admin.username.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="font-bold text-gray-900 dark:text-gray-100">{admin.username}</div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                        <span className={`px-2 py-1 text-[10px] uppercase font-bold tracking-wider border rounded-none ${admin.role === 'Super Admin' ? 'bg-red-50 text-red-600 border-red-200' : 'bg-blue-50 text-blue-600 border-blue-200'}`}>
                                            {admin.role}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                        <span className={`px-2 py-1 text-[10px] uppercase font-bold tracking-wider border rounded-none flex items-center gap-1 w-max ${admin.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                                            <i className={`fas fa-${admin.status === 'Active' ? 'check' : 'times'}`}></i> {admin.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300 dark:border-gray-700 text-gray-500 text-xs font-mono">
                                        {admin.lastLogin ? new Date(admin.lastLogin).toLocaleString() : 'Never'}
                                    </td>
                                    <td className="px-4 py-3 border border-gray-300 dark:border-gray-700 text-center">
                                        <button className="text-gray-400 hover:text-brand-dark transition-colors px-2" onClick={() => { setSelectedAdmin(admin); setViewMode('edit'); }}>
                                            <i className="fas fa-edit"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminManagement;
