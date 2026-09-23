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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h2 className="font-bold text-gray-900 dark:text-white m-0 text-2xl">Impact & Reviews</h2>
                    <p className="text-gray-500 m-0 mt-1">Manage how clients perceive your property verification services.</p>
                </div>
                <button className="bg-brand-dark hover:bg-black text-white px-6 py-2.5 font-bold transition-colors shadow-sm border border-brand-dark rounded-none flex items-center gap-2" onClick={() => { resetForm(); setShowModal(true); }}>
                    <i className="fas fa-plus"></i> Add Success Story
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {testimonials.length > 0 ? testimonials.map(testimonial => (
                    <div className={`bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-none h-full flex flex-col p-5 hover:border-brand-accent transition-all ${!testimonial.isActive ? 'opacity-60 grayscale' : ''}`} key={testimonial._id}>
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex text-brand-accent gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className={`${i < testimonial.rating ? 'fas' : 'far'} fa-star text-sm`}></i>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <button className="text-gray-400 hover:text-brand-dark transition-colors p-1" onClick={() => openEdit(testimonial)}>
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button className={`transition-colors p-1 ${testimonial.isActive ? 'text-emerald-500 hover:text-emerald-700' : 'text-gray-400 hover:text-gray-600'}`} onClick={() => toggleStatus(testimonial)}>
                                    <i className={`fas fa-${testimonial.isActive ? 'eye' : 'eye-slash'}`}></i>
                                </button>
                                <button className="text-red-400 hover:text-red-600 transition-colors p-1" onClick={() => deleteTestimonial(testimonial._id)}>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        <div className="mb-4 flex-1">
                            <p className="text-gray-700 dark:text-gray-300 text-sm italic m-0 leading-relaxed font-medium">
                                "{testimonial.text}"
                            </p>
                        </div>
                        <div className="flex items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                            <div className="relative">
                                <img src={testimonial.image} className="w-10 h-10 object-cover rounded-none border border-gray-200" alt="Client" />
                                <span className={`absolute -bottom-1 -right-1 w-3 h-3 border border-white rounded-none ${testimonial.isActive ? 'bg-emerald-500' : 'bg-gray-400'}`}></span>
                            </div>
                            <div className="ml-3">
                                <h6 className="font-bold text-gray-900 dark:text-white m-0 text-sm">{testimonial.name}</h6>
                                <small className="text-gray-500 uppercase font-bold text-[10px] tracking-wide block">
                                    <i className="fas fa-map-marker-alt mr-1"></i>{testimonial.location}
                                </small>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="col-span-1 border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center text-gray-500 rounded-none md:col-span-2 xl:col-span-3">
                        <i className="fas fa-quote-left text-3xl mb-3 opacity-50"></i>
                        <h5 className="font-bold text-gray-900 dark:text-white mb-2">No Reviews Recorded</h5>
                        <p className="m-0 mb-4 max-w-sm mx-auto text-sm">Your service stories are powerful. Add your first client testimonial to build trust with new users.</p>
                        <button className="border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white px-5 py-2 font-bold transition-colors rounded-none text-sm" onClick={() => { resetForm(); setShowModal(true); }}>
                            Create First Review
                        </button>
                    </div>
                )}
            </div>

            {showModal && (
                <div className="fixed inset-0 z-[1050] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
                    <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-xl rounded-none w-full max-w-2xl transform transition-transform">
                        <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                            <h5 className="font-bold text-gray-900 dark:text-white m-0 flex items-center gap-2">
                                <i className={`fas ${editMode ? 'fa-pen-nib' : 'fa-certificate'} text-brand-dark`}></i>
                                {editMode ? 'Refine Experience' : 'Authorize New Feedback'}
                            </h5>
                            <button type="button" className="text-gray-500 hover:text-gray-900 transition-colors" onClick={() => setShowModal(false)}>
                                <i className="fas fa-times text-xl"></i>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Client Identity</label>
                                        <input type="text" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border" value={currentTestimonial.name} onChange={e => setCurrentTestimonial({ ...currentTestimonial, name: e.target.value })} placeholder="Client Name" required />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Geographic Origin</label>
                                        <input type="text" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border" value={currentTestimonial.location} onChange={e => setCurrentTestimonial({ ...currentTestimonial, location: e.target.value })} placeholder="City/State" required />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Feedback Narrative</label>
                                        <textarea className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border resize-none" rows="2" value={currentTestimonial.text} onChange={e => setCurrentTestimonial({ ...currentTestimonial, text: e.target.value })} placeholder="What did the client say?" required></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Star Rating</label>
                                        <div className="flex gap-2 p-2 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-none w-max">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <i
                                                    key={star}
                                                    className={`fa-star cursor-pointer ${star <= currentTestimonial.rating ? 'fas text-brand-accent' : 'far text-gray-400'}`}
                                                    onClick={() => setCurrentTestimonial({ ...currentTestimonial, rating: star })}
                                                ></i>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Production Status</label>
                                        <select
                                            className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2 text-sm border"
                                            value={currentTestimonial.isActive}
                                            onChange={e => setCurrentTestimonial({ ...currentTestimonial, isActive: e.target.value === 'true' })}
                                        >
                                            <option value="true">Live on Production</option>
                                            <option value="false">Staged (Hidden)</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Profile Image URL</label>
                                        <div className="flex border border-gray-300 dark:border-gray-700">
                                            <span className="bg-gray-100 dark:bg-gray-800 px-4 flex items-center justify-center border-r border-gray-300 dark:border-gray-700">
                                                <i className="fas fa-link text-gray-500 text-xs"></i>
                                            </span>
                                            <input type="text" className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-none focus:outline-none p-2 text-sm border-0" value={currentTestimonial.image} onChange={e => setCurrentTestimonial({ ...currentTestimonial, image: e.target.value })} required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 p-4 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                <button type="button" className="bg-white hover:bg-gray-100 text-gray-700 px-6 py-2 text-sm font-bold transition-colors border border-gray-300 rounded-none" onClick={() => setShowModal(false)}>
                                    Discard
                                </button>
                                <button type="submit" className="bg-brand-dark hover:bg-black text-white px-7 py-2 text-sm font-bold transition-colors border border-brand-dark rounded-none" disabled={submitting}>
                                    {submitting ? 'Syncing...' : editMode ? 'Update Highlight' : 'Publish Highlight'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestimonialManagement;
