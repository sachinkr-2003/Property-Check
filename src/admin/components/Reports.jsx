import React from 'react';

const Reports = ({ exportToExcel, exportToPDF }) => {
    return (
        <div className="fade-in">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="font-bold text-gray-900 dark:text-white m-0 text-2xl flex items-center gap-3">
                        <i className="fas fa-chart-line text-brand-dark"></i> Reports & Analytics
                    </h2>
                    <p className="text-gray-500 m-0 mt-1">Export and view system performance metrics.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-none">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                        <h6 className="font-bold text-gray-900 dark:text-white m-0 text-sm uppercase tracking-widest">Monthly Performance</h6>
                    </div>
                    <div className="p-5 flex flex-col gap-4">
                        <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-gray-700 pb-2">
                            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">Revenue:</span>
                            <span className="font-bold text-emerald-600 dark:text-emerald-400 text-lg">₹4,50,000</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-gray-700 pb-2">
                            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">Inquiries:</span>
                            <span className="font-bold text-gray-900 dark:text-gray-100 text-lg">156</span>
                        </div>
                        <div className="flex justify-between items-center pb-2">
                            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">Conversion Rate:</span>
                            <span className="font-bold text-brand-dark dark:text-brand-accent text-lg">85%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-none">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                        <h6 className="font-bold text-gray-900 dark:text-white m-0 text-sm uppercase tracking-widest">Service Breakdown</h6>
                    </div>
                    <div className="p-5 flex flex-col gap-4">
                        <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-gray-700 pb-2">
                            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">Basic Verification:</span>
                            <span className="font-bold text-gray-900 dark:text-gray-100 text-lg">45%</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-gray-700 pb-2">
                            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">Complete Verification:</span>
                            <span className="font-bold text-gray-900 dark:text-gray-100 text-lg">40%</span>
                        </div>
                        <div className="flex justify-between items-center pb-2">
                            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">Premium Service:</span>
                            <span className="font-bold text-gray-900 dark:text-gray-100 text-lg">15%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm rounded-none">
                <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                    <h6 className="font-bold text-gray-900 dark:text-white m-0 text-sm uppercase tracking-widest">Export Options</h6>
                </div>
                <div className="p-6">
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 font-bold transition-colors shadow-sm border-none rounded-none flex items-center justify-center gap-2" onClick={exportToExcel}>
                            <i className="fas fa-file-excel"></i> Export to Excel
                        </button>
                        <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 font-bold transition-colors shadow-sm border-none rounded-none flex items-center justify-center gap-2" onClick={exportToPDF}>
                            <i className="fas fa-file-pdf"></i> Export to PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;
