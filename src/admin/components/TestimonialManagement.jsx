import React, { useState } from 'react';
import { testimonialAPI } from '../../services/apiService';

const TestimonialManagement = ({ testimonials, setTestimonials }) => {
    const [submitting, setSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState({
        name: '',
        location: '',
        text: '',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        isActive: true
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            if (editMode) {
                const res = await testimonialAPI.update(currentTestimonial._id, currentTestimonial);
                setTestimonials(testimonials.map(t => t._id === currentTestimonial._id ? res.data : t));
                alert('Experience updated successfully');
            } else {
                const res = await testimonialAPI.create(currentTestimonial);
                setTestimonials([res.data, ...testimonials]);
                alert('Experience added successfully');
            }
            setShowModal(false);
            resetForm();
        } catch (err) {
            alert('Operation failed. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const deleteTestimonial = async (id) => {
        if (window.confirm('Are you sure you want to remove this client feedback?')) {
            try {
                await testimonialAPI.delete(id);
                setTestimonials(testimonials.filter(t => t._id !== id));
            } catch (err) {
                alert('Removal failed');
            }
        }
    };

    const toggleStatus = async (testimonial) => {
        try {
            const newStatus = !testimonial.isActive;
            const res = await testimonialAPI.update(testimonial._id, { isActive: newStatus });
            setTestimonials(testimonials.map(t =>
                t._id === testimonial._id ? { ...t, isActive: newStatus } : t
            ));
        } catch (err) {
            alert('Visibility toggle failed');
        }
    };

    const resetForm = () => {
        setCurrentTestimonial({
            name: '',
            location: '',
            text: '',
            rating: 5,
            image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 50)}.jpg`,
            isActive: true
        });
        setEditMode(false);
    };

    const openEdit = (testimonial) => {
        setCurrentTestimonial({ ...testimonial });
        setEditMode(true);
        setShowModal(true);
    };

    return (
        <div className="fade-in">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
                <div>
                    <h2 className="fw-bold text-dark mb-1">Impact & Reviews</h2>
                    <p className="text-muted mb-0">Manage how clients perceive your property verification services.</p>
                </div>
                <button className="btn btn-primary btn-lg px-4 rounded-pill shadow-sm" onClick={() => { resetForm(); setShowModal(true); }}>
                    <i className="fas fa-plus-circle me-2"></i>Add Success Story
                </button>
            </div>

            <div className="row g-4">
                {testimonials.length > 0 ? testimonials.map(testimonial => (
                    <div className="col-md-6 col-lg-4" key={testimonial._id}>
                        <div className={`card border-0 shadow-sm h-100 p-4 transition-hover ${!testimonial.isActive ? 'grayscale' : ''}`}
                            style={{
                                borderRadius: '25px',
                                background: '#ffffff',
                                border: '1px solid #f1f1f1',
                                opacity: testimonial.isActive ? 1 : 0.7
                            }}>
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div className="d-flex text-warning">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className={`${i < testimonial.rating ? 'fas' : 'far'} fa-star pe-1`} style={{ fontSize: '13px' }}></i>
                                    ))}
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-link link-dark text-decoration-none p-0" data-bs-toggle="dropdown">
                                        <i className="fas fa-ellipsis-h text-muted"></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end shadow border-0 rounded-4 py-2 mt-2">
                                        <li><button className="dropdown-item py-2 px-4" onClick={() => openEdit(testimonial)}><i className="fas fa-magic me-3 text-primary"></i> Edit Review</button></li>
                                        <li><button className="dropdown-item py-2 px-4" onClick={() => toggleStatus(testimonial)}><i className={`fas fa-${testimonial.isActive ? 'eye-slash' : 'eye'} me-3 text-warning`}></i> {testimonial.isActive ? 'Hide Visibility' : 'Make Public'}</button></li>
                                        <li><hr className="dropdown-divider opacity-10" /></li>
                                        <li><button className="dropdown-item py-2 px-4 text-danger" onClick={() => deleteTestimonial(testimonial._id)}><i className="fas fa-trash-alt me-3"></i> Permanent Delete</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-dark-emphasis italic mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.6', fontWeight: '500' }}>
                                    "{testimonial.text}"
                                </p>
                            </div>
                            <div className="d-flex align-items-center mt-auto pt-3 border-top border-light-subtle">
                                <div className="position-relative">
                                    <img src={testimonial.image} className="rounded-circle shadow-sm border border-2 border-white" width="55" height="55" alt="Client" style={{ objectFit: 'cover' }} />
                                    <span className={`position-absolute bottom-0 end-0 border border-white border-2 rounded-circle ${testimonial.isActive ? 'bg-success' : 'bg-secondary'}`} style={{ width: '12px', height: '12px' }}></span>
                                </div>
                                <div className="ms-3">
                                    <h6 className="fw-bold text-dark mb-0">{testimonial.name}</h6>
                                    <small className="text-muted d-block text-uppercase fw-bold" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>
                                        <i className="fas fa-map-marker-alt me-1"></i>{testimonial.location}
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="col-12 text-center py-5 bg-white rounded-5 shadow-sm border border-dashed">
                        <i className="fas fa-quote-left fs-1 text-muted opacity-25 mb-3"></i>
                        <h5 className="text-dark fw-bold">No Reviews Recorded</h5>
                        <p className="text-muted mx-auto" style={{ maxWidth: '400px' }}>Your service stories are powerful. Add your first client testimonial to build trust with new users.</p>
                        <button className="btn btn-outline-primary rounded-pill px-4 mt-2" onClick={() => { resetForm(); setShowModal(true); }}>
                            Create First Review
                        </button>
                    </div>
                )}
            </div>

            {showModal && (
                <div className="modal-backdrop fade show" style={{ zIndex: 1050, backgroundColor: 'rgba(25, 28, 31, 0.4)', backdropFilter: 'blur(8px)' }}>
                    <div className="modal fade show d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content border-0 shadow-2xl overflow-hidden" style={{ borderRadius: '30px' }}>
                                <div className="modal-header border-0 bg-light p-4">
                                    <h5 className="fw-bold mb-0 text-dark">
                                        <i className={`fas ${editMode ? 'fa-pen-nib' : 'fa-certificate'} me-2 text-primary`}></i>
                                        {editMode ? 'Refine Experience' : 'Authorize New Feedback'}
                                    </h5>
                                    <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="modal-body p-4 bg-white">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label small fw-bold text-muted text-uppercase">Client Identity</label>
                                                <input type="text" className="form-control form-control-lg rounded-3 border-light-subtle bg-light" value={currentTestimonial.name} onChange={e => setCurrentTestimonial({ ...currentTestimonial, name: e.target.value })} placeholder="Client Name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label small fw-bold text-muted text-uppercase">Geographic Origin</label>
                                                <input type="text" className="form-control form-control-lg rounded-3 border-light-subtle bg-light" value={currentTestimonial.location} onChange={e => setCurrentTestimonial({ ...currentTestimonial, location: e.target.value })} placeholder="City/State" required />
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label small fw-bold text-muted text-uppercase">Feedback Narrative</label>
                                                <textarea className="form-control form-control-lg rounded-3 border-light-subtle bg-light" rows="4" value={currentTestimonial.text} onChange={e => setCurrentTestimonial({ ...currentTestimonial, text: e.target.value })} placeholder="What did the client say?" required></textarea>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label small fw-bold text-muted text-uppercase">Star Rating</label>
                                                <div className="d-flex align-items-center bg-light rounded-3 p-2 border border-light-subtle">
                                                    {[1, 2, 3, 4, 5].map(star => (
                                                        <i
                                                            key={star}
                                                            className={`fa-star cursor-pointer px-1 ${star <= currentTestimonial.rating ? 'fas text-warning' : 'far text-muted'}`}
                                                            style={{ fontSize: '1.2rem' }}
                                                            onClick={() => setCurrentTestimonial({ ...currentTestimonial, rating: star })}
                                                        ></i>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label small fw-bold text-muted text-uppercase">Production Status</label>
                                                <select
                                                    className="form-select form-select-lg rounded-3 border-light-subtle bg-light"
                                                    value={currentTestimonial.isActive}
                                                    onChange={e => setCurrentTestimonial({ ...currentTestimonial, isActive: e.target.value === 'true' })}
                                                >
                                                    <option value="true">Live on Production</option>
                                                    <option value="false">Staged (Hidden)</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label small fw-bold text-muted text-uppercase">Profile Image URL</label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-light border-light-subtle rounded-start-3"><i className="fas fa-link text-muted"></i></span>
                                                    <input type="text" className="form-control form-control-lg rounded-end-3 border-light-subtle bg-light" value={currentTestimonial.image} onChange={e => setCurrentTestimonial({ ...currentTestimonial, image: e.target.value })} required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer border-0 p-4 bg-light">
                                        <button type="button" className="btn btn-link text-dark text-decoration-none fw-bold me-auto rounded-pill" onClick={() => setShowModal(false)}>Cancel Changes</button>
                                        <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5 shadow-sm" disabled={submitting}>
                                            {submitting ? 'Syncing...' : editMode ? 'Update Highlight' : 'Publish Highlight'}
                                        </button>
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

export default TestimonialManagement;
