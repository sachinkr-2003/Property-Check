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
            <div className="max-w-3xl mx-auto fade-in">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-gray-900 dark:text-white m-0 text-lg flex items-center gap-2">
                        <div className="bg-brand-accent/20 w-8 h-8 flex items-center justify-center rounded-none text-brand-dark">
                            <i className="fas fa-folder-plus text-sm"></i>
                        </div>
                        Create New Business Lead
                    </h4>
                    <button className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-4 py-1.5 text-sm font-bold transition-colors rounded-none shadow-sm flex items-center gap-2" onClick={() => setViewMode('list')}>
                        <i className="fas fa-arrow-left"></i> Back to List
                    </button>
                </div>
                
                <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-none">
                    <div className="p-4">
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Client Full Name</label>
                                    <input type="text" name="name" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border" placeholder="e.g. John Doe" required />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Contact Number</label>
                                    <input type="tel" name="phone" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border font-mono" placeholder="+91 00000 00000" required />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Service Category</label>
                                    <select name="serviceType" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border" required>
                                        <option value="Basic">Basic Verification</option>
                                        <option value="Complete">Complete Verification</option>
                                        <option value="Premium">Premium Service</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Initial Status</label>
                                    <select name="status" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border" required>
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Property Specification / Address</label>
                                    <textarea name="propertyAddress" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border resize-none" rows="2" placeholder="Full address and property details..." required></textarea>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-5 pt-4 border-t border-gray-200 dark:border-gray-800">
                                <button type="submit" className="bg-brand-dark hover:bg-black text-white px-6 py-2 text-sm font-bold transition-colors rounded-none flex items-center gap-2">
                                    <i className="fas fa-check-square"></i> Generate Request
                                </button>
                                <button type="button" className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 text-sm font-bold transition-colors rounded-none" onClick={() => setViewMode('list')}>
                                    Discard
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    if (viewMode === 'view' && selectedRequest) {
        return (
            <div className="fade-in max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold text-gray-900 dark:text-white m-0 text-xl flex items-center gap-3">
                        <div className="bg-brand-accent/20 w-8 h-8 flex items-center justify-center rounded-none text-brand-dark">
                            <i className="fas fa-id-card"></i>
                        </div>
                        Request Dossier: #{selectedRequest.id || 'N/A'}
                    </h4>
                    <button className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-4 py-2 font-bold transition-colors rounded-none shadow-sm flex items-center gap-2" onClick={() => { setViewMode('list'); setSelectedRequest(null); }}>
                        <i className="fas fa-arrow-left"></i> Back to List
                    </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-none p-6">
                            <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white mb-1">Property Information</h5>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest m-0">Comprehensive verification details</p>
                                </div>
                                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-none border ${selectedRequest.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                                    selectedRequest.status === 'In Progress' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                                        'bg-gray-50 text-gray-600 border-gray-200'
                                    }`}>
                                    {selectedRequest.status}
                                </span>
                            </div>
                            
                            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-none mb-6">
                                <h6 className="font-bold text-gray-600 dark:text-gray-400 text-xs uppercase tracking-widest mb-2">Location / Address</h6>
                                <p className="mb-0 text-lg font-medium text-gray-900 dark:text-white">{selectedRequest.property || selectedRequest.address}</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-none">
                                    <small className="text-gray-500 uppercase tracking-widest font-bold block mb-1 text-[10px]">Service Type</small>
                                    <span className="font-bold text-sm text-gray-900 dark:text-white">{selectedRequest.serviceType || 'Standard Verification'}</span>
                                </div>
                                <div className="p-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-none">
                                    <small className="text-gray-500 uppercase tracking-widest font-bold block mb-1 text-[10px]">Request Date</small>
                                    <span className="font-bold text-sm text-gray-900 dark:text-white font-mono">{selectedRequest.date || new Date().toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-none p-6">
                            <h5 className="font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">Internal Progress Notes</h5>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 border-l-4 border-brand-accent rounded-none">
                                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">Awaiting document submission from Bihar Land Records department.</p>
                                <small className="text-brand-dark dark:text-brand-accent font-bold uppercase tracking-widest text-[9px]">Admin Update • Just now</small>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-none p-6 h-full">
                            <h5 className="font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">Client Portfolio</h5>
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 mx-auto bg-brand-dark text-white rounded-none flex items-center justify-center font-bold text-3xl mb-4 shadow-sm">
                                    {selectedRequest.name ? selectedRequest.name.charAt(0).toUpperCase() : 'U'}
                                </div>
                                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{selectedRequest.name}</h5>
                                <p className="text-gray-500 font-mono text-sm m-0">{selectedRequest.phone}</p>
                            </div>
                            
                            <div className="flex flex-col gap-3">
                                <button className="w-full bg-brand-dark hover:bg-black text-white px-4 py-3 font-bold transition-colors border border-brand-dark rounded-none flex items-center justify-center gap-2" onClick={() => setViewMode('edit')}>
                                    <i className="fas fa-edit"></i> Modify Request
                                </button>
                                <button
                                    className={`w-full px-4 py-3 font-bold transition-colors border rounded-none flex items-center justify-center gap-2 ${selectedRequest.status === 'Completed' ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' : 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100'}`}
                                    onClick={() => handleUpdateStatus(selectedRequest._id || selectedRequest.id, 'Completed')}
                                    disabled={loading || selectedRequest.status === 'Completed'}
                                >
                                    <i className="fas fa-check-double"></i> {selectedRequest.status === 'Completed' ? 'Already Resolved' : 'Mark as Resolved'}
                                </button>
                                <button
                                    className="w-full mt-4 bg-white hover:bg-red-50 text-red-500 border border-red-200 px-4 py-2 text-xs uppercase tracking-widest font-bold transition-colors rounded-none flex items-center justify-center gap-2"
                                    onClick={() => handleDelete(selectedRequest._id || selectedRequest.id)}
                                    disabled={loading}
                                >
                                    <i className="fas fa-trash-alt"></i> Remove Lead
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
                <button className="bg-brand-dark hover:bg-black text-white px-6 py-2.5 font-bold transition-colors shadow-sm border border-brand-dark rounded-none" onClick={() => setViewMode('add')}>
                    <i className="fas fa-plus me-2"></i> Add New Lead
                </button>
            </div>

            <div className="bg-white border border-gray-300 dark:border-gray-700 shadow-sm rounded-none overflow-hidden">
                <div className="card-body p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2">Dossier ID</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2">Client Information</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2">Property Location</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2">Category</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2">Current Status</th>
                                    <th className="px-4 py-3 text-xs font-bold text-gray-900 dark:text-gray-200 uppercase flex-1 border border-gray-300 dark:border-gray-700 border-b-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {inquiries.length > 0 ? inquiries.map((inquiry, idx) => {
                                    const name = inquiry.name || (inquiry.user && inquiry.user.name) || 'Anonymous';
                                    const phone = inquiry.phone || (inquiry.user && inquiry.user.phone) || 'N/A';
                                    const email = inquiry.email || (inquiry.user && inquiry.user.email) || 'N/A';

                                    return (
                                        <tr key={inquiry._id || idx} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                            <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700">
                                                <div className="font-bold text-gray-900 dark:text-gray-100 flex flex-col">
                                                    <span>{name}</span>
                                                    <span className="text-gray-500 font-normal">#{((inquiry._id || inquiry.id) || '').slice(-6).toUpperCase()}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 font-mono text-gray-600 dark:text-gray-400">
                                                <div>{phone}</div>
                                                <div className="text-xs">{email}</div>
                                            </td>
                                            <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 max-w-[200px] truncate" title={inquiry.property || inquiry.propertyAddress || 'N/A'}>
                                                {inquiry.property || inquiry.propertyAddress || 'N/A'}
                                            </td>
                                            <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                                                {inquiry.serviceType || 'Public Inquiry'}
                                            </td>
                                            <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 font-bold uppercase tracking-wider">
                                                {inquiry.status === 'Completed' ? (
                                                    <span className="text-emerald-600 dark:text-emerald-400">Completed</span>
                                                ) : inquiry.status === 'In Progress' ? (
                                                    <span className="text-amber-600 dark:text-amber-400">In Progress</span>
                                                ) : inquiry.status === 'Cancelled' ? (
                                                    <span className="text-red-500">Cancelled</span>
                                                ) : (
                                                    <span className="text-gray-600 dark:text-gray-400">{inquiry.status || 'Pending'}</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 text-center">
                                                <div className="flex gap-4 justify-center">
                                                    <button
                                                        className="text-brand-accent hover:text-brand-dark transition-colors"
                                                        onClick={() => {
                                                            setSelectedRequest(inquiry);
                                                            setViewMode('view');
                                                        }}
                                                    >
                                                        <i className="fas fa-eye text-lg"></i>
                                                    </button>
                                                    <button
                                                        className="text-red-500 hover:text-red-700 transition-colors"
                                                        onClick={() => handleDelete(inquiry._id || inquiry.id)}
                                                        disabled={loading}
                                                    >
                                                        <i className="fas fa-trash text-lg"></i>
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
