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
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold text-dark">Manage Services</h2>
                <button className="btn btn-primary px-4 rounded-pill" onClick={() => { resetForm(); setShowModal(true); }}>
                    <i className="fas fa-plus me-2"></i> Add New Service
                </button>
            </div>

            <div className="row g-4">
                {services.map(service => (
                    <div className="col-md-6 col-lg-4" key={service._id}>
                        <div className="card border-0 shadow-sm h-100 overflow-hidden" style={{ borderRadius: '20px' }}>
                            <div style={{ background: service.gradient, height: '8px' }}></div>
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="bg-light p-3 rounded-3">
                                        <i className={`${service.icon} text-primary fs-4`}></i>
                                    </div>
                                    <div className="dropdown">
                                        <button className="btn btn-link link-dark text-decoration-none p-0" data-bs-toggle="dropdown">
                                            <i className="fas fa-ellipsis-v"></i>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                                            <li><button className="dropdown-item" onClick={() => openEdit(service)}><i className="fas fa-edit me-2"></i> Edit</button></li>
                                            <li><button className="dropdown-item text-danger" onClick={() => deleteService(service._id)}><i className="fas fa-trash me-2"></i> Delete</button></li>
                                        </ul>
                                    </div>
                                </div>
                                <h5 className="fw-bold">{service.title}</h5>
                                <p className="text-muted small mb-3">{service.description}</p>
                                <div className="d-flex flex-wrap gap-1 mb-3">
                                    {service.features.map((f, i) => (
                                        <span key={i} className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1" style={{ fontSize: '10px' }}>{f}</span>
                                    ))}
                                </div>
                                <div className="mt-auto d-flex justify-content-between align-items-center">
                                    <small className="text-muted">Order: {service.order}</small>
                                    <span className={`badge ${service.isActive ? 'bg-success' : 'bg-secondary'}`}>{service.isActive ? 'Active' : 'Inactive'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Simple Modal Overlay */}
            {showModal && (
                <div className="modal-backdrop fade show" style={{ zIndex: 1050 }}>
                    <div className="modal fade show d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '25px' }}>
                                <div className="modal-header border-0 pb-0">
                                    <h5 className="fw-bold">{editMode ? 'Edit Service' : 'Add New Service'}</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="modal-body p-4">
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold">Service Title</label>
                                            <input type="text" className="form-control rounded-3" value={currentService.title} onChange={e => setCurrentService({ ...currentService, title: e.target.value })} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold">Description</label>
                                            <textarea className="form-control rounded-3" rows="3" value={currentService.description} onChange={e => setCurrentService({ ...currentService, description: e.target.value })} required></textarea>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label small fw-bold">Icon (FontAwesome)</label>
                                                <input type="text" className="form-control rounded-3" value={currentService.icon} onChange={e => setCurrentService({ ...currentService, icon: e.target.value })} placeholder="fas fa-home" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label small fw-bold">Display Order</label>
                                                <input type="number" className="form-control rounded-3" value={currentService.order} onChange={e => setCurrentService({ ...currentService, order: e.target.value })} required />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold">Features (comma separated)</label>
                                            <input type="text" className="form-control rounded-3" value={currentService.features} onChange={e => setCurrentService({ ...currentService, features: e.target.value })} placeholder="Feature 1, Feature 2" required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold">Gradient Background (CSS)</label>
                                            <input type="text" className="form-control rounded-3" value={currentService.gradient} onChange={e => setCurrentService({ ...currentService, gradient: e.target.value })} required />
                                        </div>
                                    </div>
                                    <div className="modal-footer border-0 pt-0">
                                        <button type="button" className="btn btn-light px-4 rounded-pill" onClick={() => setShowModal(false)}>Cancel</button>
                                        <button type="submit" className="btn btn-primary px-4 rounded-pill">Save Changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceManagement;
