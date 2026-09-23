import React, { useState, useEffect } from 'react';
import { serviceAPI } from '../../services/apiService';

const ServiceManagement = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [currentService, setCurrentService] = useState({
        title: '',
        description: '',
        icon: 'fas fa-home',
        features: '',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        order: 0
    });

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        setLoading(true);
        try {
            const res = await serviceAPI.getAll();
            if (res.success) setServices(res.data);
        } catch (err) {
            console.error('Failed to load services:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            ...currentService,
            features: typeof currentService.features === 'string'
                ? currentService.features.split(',').map(f => f.trim())
                : currentService.features
        };

        try {
            if (editMode) {
                await serviceAPI.update(currentService._id, data);
            } else {
                await serviceAPI.create(data);
            }
            loadServices();
            setShowModal(false);
            resetForm();
        } catch (err) {
            alert('Operation failed');
        }
    };

    const deleteService = async (id) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            try {
                await serviceAPI.delete(id);
                loadServices();
            } catch (err) {
                alert('Delete failed');
            }
        }
    };

    const resetForm = () => {
        setCurrentService({
            title: '',
            description: '',
            icon: 'fas fa-home',
            features: '',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            order: 0
        });
        setEditMode(false);
    };

    const openEdit = (service) => {
        setCurrentService({
            ...service,
            features: service.features.join(', ')
        });
        setEditMode(true);
        setShowModal(true);
    };

    return (
        <div className="fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h2 className="font-bold text-gray-900 dark:text-white m-0 text-2xl">Manage Services</h2>
                    <p className="text-gray-500 m-0 mt-1">Configure and organize standard offerings.</p>
                </div>
                <button className="bg-brand-dark hover:bg-black text-white px-6 py-2.5 font-bold transition-colors shadow-sm border border-brand-dark rounded-none flex items-center gap-2" onClick={() => { resetForm(); setShowModal(true); }}>
                    <i className="fas fa-plus"></i> Add New Service
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {services.length > 0 ? services.map(service => (
                    <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-none h-full flex flex-col hover:border-brand-accent transition-colors" key={service._id}>
                        <div style={{ background: service.gradient, height: '4px' }} className="w-full"></div>
                        <div className="p-5 flex-1 flex flex-col cursor-pointer" onClick={() => openEdit(service)}>
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-gray-50 dark:bg-gray-800 w-12 h-12 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-none">
                                    <i className={`${service.icon} text-brand-dark dark:text-white text-xl`}></i>
                                </div>
                                <div className="flex gap-2">
                                    <button className="text-gray-400 hover:text-brand-dark transition-colors p-1" onClick={(e) => { e.stopPropagation(); openEdit(service); }}>
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button className="text-red-400 hover:text-red-600 transition-colors p-1" onClick={(e) => { e.stopPropagation(); deleteService(service._id); }}>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                            <h5 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">{service.title}</h5>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{service.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {service.features && service.features.map((f, i) => (
                                    <span key={i} className="bg-brand-accent/10 border border-brand-accent/20 text-brand-dark dark:text-brand-accent px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded-none">{f}</span>
                                ))}
                            </div>
                            <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                                <small className="text-gray-500 font-mono text-xs">ORDER: [{service.order}]</small>
                                <span className={`px-2 py-1 text-[10px] uppercase font-bold tracking-wider border rounded-none ${service.isActive ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                                    {service.isActive ? 'Online' : 'Offline'}
                                </span>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="col-span-1 border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center text-gray-500 rounded-none md:col-span-2 xl:col-span-3">
                        <i className="fas fa-concierge-bell text-3xl mb-3 opacity-50"></i>
                        <p className="m-0 font-medium">No services have been configured yet.</p>
                    </div>
                )}
            </div>

            {/* Square Built Modal Overlay */}
            {showModal && (
                <div className="fixed inset-0 z-[1050] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
                    <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-xl rounded-none w-full max-w-2xl transform transition-transform">
                        <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                            <h5 className="font-bold text-gray-900 dark:text-white m-0">{editMode ? 'Modify Service Details' : 'Initialize New Service'}</h5>
                            <button type="button" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" onClick={() => setShowModal(false)}>
                                <i className="fas fa-times text-xl"></i>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Service Title</label>
                                        <input type="text" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border font-medium" value={currentService.title} onChange={e => setCurrentService({ ...currentService, title: e.target.value })} required />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Description</label>
                                        <textarea className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border resize-none" rows="2" value={currentService.description} onChange={e => setCurrentService({ ...currentService, description: e.target.value })} required></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Icon (FontAwesome)</label>
                                        <input type="text" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border font-mono" value={currentService.icon} onChange={e => setCurrentService({ ...currentService, icon: e.target.value })} placeholder="fas fa-home" required />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Display Order</label>
                                        <input type="number" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border font-mono" value={currentService.order} onChange={e => setCurrentService({ ...currentService, order: e.target.value })} required />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Features (Comma Separated)</label>
                                        <input type="text" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border" value={currentService.features} onChange={e => setCurrentService({ ...currentService, features: e.target.value })} placeholder="Feature 1, Feature 2" required />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Gradient Background (CSS)</label>
                                        <input type="text" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border font-mono text-gray-500" value={currentService.gradient} onChange={e => setCurrentService({ ...currentService, gradient: e.target.value })} required />
                                        <div className="mt-2 h-2 w-full rounded-none" style={{ background: currentService.gradient }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 p-4 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                <button type="button" className="bg-white hover:bg-gray-100 text-gray-700 px-6 py-2 text-sm font-bold transition-colors border border-gray-300 rounded-none" onClick={() => setShowModal(false)}>
                                    Discard
                                </button>
                                <button type="submit" className="bg-brand-dark hover:bg-black text-white px-7 py-2 text-sm font-bold transition-colors border border-brand-dark rounded-none">
                                    Commit Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceManagement;
