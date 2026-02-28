import React from 'react';

const Reports = ({ exportToExcel, exportToPDF }) => {
    return (
        <div>
            <h4 className="mb-4"><i className="fas fa-chart-line me-2"></i> Reports & Analytics</h4>
            <div className="row g-4 mb-4">
                <div className="col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white border-0 py-3">
                            <h6 className="mb-0 fw-bold">Monthly Performance</h6>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between mb-2">
                                <span>Revenue:</span>
                                <span className="fw-bold text-success">₹4,50,000</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Inquiries:</span>
                                <span className="fw-bold">156</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Conversion Rate:</span>
                                <span className="fw-bold text-primary">85%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white border-0 py-3">
                            <h6 className="mb-0 fw-bold">Service Breakdown</h6>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between mb-2">
                                <span>Basic Verification:</span>
                                <span>45%</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Complete Verification:</span>
                                <span>40%</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Premium Service:</span>
                                <span>15%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-0 py-3">
                    <h6 className="mb-0 fw-bold">Export Reports</h6>
                </div>
                <div className="card-body">
                    <div className="d-flex gap-3">
                        <button className="btn btn-success px-4" onClick={exportToExcel}>
                            <i className="fas fa-file-excel me-2"></i>Export to Excel
                        </button>
                        <button className="btn btn-danger px-4" onClick={exportToPDF}>
                            <i className="fas fa-file-pdf me-2"></i>Export to PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;
