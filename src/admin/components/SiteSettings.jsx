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
        <div className="flex justify-center items-center h-64">
             <i className="fas fa-spinner fa-spin text-brand-dark text-3xl"></i>
        </div>
    );

    return (
        <div className="fade-in">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="font-bold text-gray-900 dark:text-white m-0 text-2xl flex items-center gap-3">
                        <i className="fas fa-cogs text-brand-dark"></i> System Configurations
                    </h2>
                    <p className="text-gray-500 m-0 mt-1">Manage global site variables and pricing structures.</p>
                </div>
            </div>

            <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-none">
                            <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex items-center gap-3">
                                <div className="bg-brand-dark text-white p-2 rounded-none flex items-center justify-center">
                                    <i className="fas fa-satellite-dish text-xs"></i>
                                </div>
                                <h6 className="font-bold text-gray-900 dark:text-white m-0 text-sm uppercase tracking-widest">Brand Identity & Communication</h6>
                            </div>
                            
                            <div className="p-6">
                                <div className="mb-5">
                                    <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Organization Title</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2.5 text-sm border font-medium"
                                        value={settings.siteTitle}
                                        onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Primary Contact Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2.5 text-sm border"
                                            value={settings.contactEmail}
                                            onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">Direct Phone Line</label>
                                        <input
                                            type="text"
                                            className="w-full bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-none focus:ring-brand-accent focus:border-brand-accent p-2.5 text-sm border font-mono"
                                            value={settings.contactPhone}
                                            onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#fffcf0] dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-700/50 shadow-sm rounded-none p-5 flex gap-4">
                            <i className="fas fa-exclamation-triangle text-amber-500 text-xl mt-0.5"></i>
                            <div>
                                <h6 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-sm uppercase tracking-widest">Security Note</h6>
                                <p className="text-gray-600 dark:text-gray-400 text-xs m-0 leading-relaxed">Changes here affect the frontend immediately. Ensure all contact details are verified before saving. Modifying these records directly impacts public communication channels.</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-none h-full flex flex-col">
                            <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex items-center gap-3">
                                <div className="bg-emerald-600 text-white p-2 rounded-none flex items-center justify-center">
                                    <i className="fas fa-tags text-xs"></i>
                                </div>
                                <h6 className="font-bold text-gray-900 dark:text-white m-0 text-sm uppercase tracking-widest">Dynamic Pricing Model (₹)</h6>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                {[
                                    { id: 'basic', label: 'Tier 1: Basic Verification' },
                                    { id: 'complete', label: 'Tier 2: Comprehensive Check' },
                                    { id: 'premium', label: 'Tier 3: Elite Business Service' }
                                ].map((pkg) => (
                                    <div className="mb-5" key={pkg.id}>
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1.5">{pkg.label}</label>
                                        <div className="flex border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                            <span className="px-4 py-2 border-r border-gray-300 dark:border-gray-700 text-gray-500 flex items-center justify-center bg-gray-100 dark:bg-gray-800 font-bold">₹</span>
                                            <input
                                                type="number"
                                                className="w-full bg-transparent text-gray-900 dark:text-gray-100 rounded-none focus:outline-none p-2.5 text-sm font-mono"
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

                                <div className="mt-auto pt-6">
                                    <button type="submit" className="w-full bg-brand-dark hover:bg-black text-white px-6 py-3 font-bold transition-colors border border-brand-dark rounded-none flex items-center justify-center gap-2" disabled={saving}>
                                        {saving ? (
                                            <><i className="fas fa-spinner fa-spin"></i> Updating System...</>
                                        ) : (
                                            <><i className="fas fa-save"></i> Apply Changes Globally</>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SiteSettings;
