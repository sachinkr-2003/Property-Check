import React, { useState, useEffect } from 'react';
import { settingsAPI } from '../../services/apiService';

const SiteSettings = () => {
    const [settings, setSettings] = useState({
        siteTitle: '',
        contactEmail: '',
        contactPhone: '',
        pricing: {
            basic: 0,
            complete: 0,
            premium: 0
        }
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = async () => {
        try {
            const res = await settingsAPI.get();
            if (res.success) setSettings(res.data);
        } catch (err) {
            console.error('Failed to load settings:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            await settingsAPI.update(settings);
            alert('Core system settings updated successfully.');
        } catch (err) {
            alert('Error updating configuration: ' + err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return (
        <div className="d-flex justify-content-center align-items-center py-5">
            <div className="spinner-border text-primary" role="status"></div>
        </div>
    );

    return (
        <div className="fade-in">
            <div className="mb-4">
                <h2 className="fw-bold text-dark">System Configurations</h2>
                <p className="text-muted">Manage global site variables and pricing structures.</p>
            </div>

            <form onSubmit={handleUpdate}>
                <div className="row g-4">
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '25px' }}>
                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-primary text-white rounded-3 p-2 me-3">
                                    <i className="fas fa-satellite-dish"></i>
                                </div>
                                <h5 className="mb-0 fw-bold">Brand Identity & Communication</h5>
                            </div>

                            <div className="mb-4">
                                <label className="form-label small fw-bold text-muted text-uppercase">Organization Title</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg rounded-3 bg-light border-light shadow-xs"
                                    value={settings.siteTitle}
                                    onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="row g-4 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label small fw-bold text-muted text-uppercase">Primary Contact Email</label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg rounded-3 bg-light border-light shadow-xs"
                                        value={settings.contactEmail}
                                        onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label small fw-bold text-muted text-uppercase">Direct Phone Line</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg rounded-3 bg-light border-light shadow-xs"
                                        value={settings.contactPhone}
                                        onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 card border-0 shadow-sm p-4" style={{ borderRadius: '25px', backgroundColor: '#fff9e6' }}>
                            <div className="d-flex">
                                <i className="fas fa-exclamation-triangle text-warning fs-4 me-3"></i>
                                <div>
                                    <h6 className="fw-bold text-dark mb-1">Security Note</h6>
                                    <p className="small text-muted mb-0">Changes here affect the frontend immediately. Ensure all contact details are verified before saving.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '25px' }}>
                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-success text-white rounded-3 p-2 me-3">
                                    <i className="fas fa-tags"></i>
                                </div>
                                <h5 className="mb-0 fw-bold">Dynamic Pricing Model (₹)</h5>
                            </div>

                            {[
                                { id: 'basic', label: 'Tier 1: Basic Verification' },
                                { id: 'complete', label: 'Tier 2: Comprehensive Check' },
                                { id: 'premium', label: 'Tier 3: Elite Business Service' }
                            ].map((pkg) => (
                                <div className="mb-3" key={pkg.id}>
                                    <label className="form-label small fw-bold text-muted text-uppercase">{pkg.label}</label>
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-text border-light bg-white text-muted">₹</span>
                                        <input
                                            type="number"
                                            className="form-control rounded-end-3 bg-light border-light shadow-xs"
                                            value={settings.pricing[pkg.id]}
                                            onChange={(e) => setSettings({
                                                ...settings,
                                                pricing: { ...settings.pricing, [pkg.id]: parseInt(e.target.value) || 0 }
                                            })}
                                            required
                                        />
                                    </div>
                                </div>
                            ))}

                            <div className="mt-4 pt-3 border-top">
                                <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill shadow" disabled={saving}>
                                    {saving ? (
                                        <>Updating System...</>
                                    ) : (
                                        <><i className="fas fa-save me-2"></i>Apply Changes Globally</>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SiteSettings;
