const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// API utility function
const apiCall = async (endpoint, options = {}) => {
  const token = localStorage.getItem('adminToken');

  const isFormData = options.body instanceof FormData;

  const config = {
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    },
    ...options
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API Error');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Auth API
export const authAPI = {
  login: (credentials) => apiCall('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  }),

  getMe: () => apiCall('/auth/me'),

  logout: () => apiCall('/auth/logout', { method: 'POST' })
};

// Property API
export const propertyAPI = {
  getAll: () => apiCall('/properties'),

  create: (propertyData) => {
    // Use FormData so multer can parse it (even without files)
    const formData = new FormData();
    Object.entries(propertyData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) formData.append(key, value);
    });
    return apiCall('/properties', {
      method: 'POST',
      body: formData,
      headers: {} // Let browser set Content-Type with boundary
    });
  },

  createContact: (contactData) => apiCall('/contact', {
    method: 'POST',
    body: JSON.stringify(contactData)
  }),

  getById: (id) => apiCall(`/properties/${id}`),

  update: (id, data) => apiCall(`/properties/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),

  delete: (id) => apiCall(`/properties/${id}`, {
    method: 'DELETE'
  })
};

// User API
export const userAPI = {
  getAll: () => apiCall('/users'),

  create: (userData) => apiCall('/users', {
    method: 'POST',
    body: JSON.stringify(userData)
  }),

  update: (id, data) => apiCall(`/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),

  delete: (id) => apiCall(`/users/${id}`, {
    method: 'DELETE'
  })
};

// Admin API
export const adminAPI = {
  getDashboardStats: () => apiCall('/admin/dashboard/stats'),

  getReports: (params) => apiCall(`/admin/reports?${new URLSearchParams(params)}`),

  getAllAdmins: () => apiCall('/admin/admins'),

  createAdmin: (adminData) => apiCall('/admin/admins', {
    method: 'POST',
    body: JSON.stringify(adminData)
  }),
  updateAdmin: (id, adminData) => apiCall(`/admin/admins/${id}`, {
    method: 'PUT',
    body: JSON.stringify(adminData)
  })
};

// Payment API
export const paymentAPI = {
  createOrder: (requestId) => apiCall('/payments/create-order', {
    method: 'POST',
    body: JSON.stringify({ requestId })
  }),

  verifyPayment: (paymentData) => apiCall('/payments/verify', {
    method: 'POST',
    body: JSON.stringify(paymentData)
  })
};

// Settings API
export const settingsAPI = {
  get: () => apiCall('/settings'),
  update: (data) => apiCall('/settings', {
    method: 'PUT',
    body: JSON.stringify(data)
  })
};

// Service API
export const serviceAPI = {
  getAll: () => apiCall('/services'),
  create: (data) => apiCall('/services', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  update: (id, data) => apiCall(`/services/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  delete: (id) => apiCall(`/services/${id}`, {
    method: 'DELETE'
  })
};

// Testimonial API
export const testimonialAPI = {
  getAll: () => apiCall('/testimonials'),
  adminGetAll: () => apiCall('/testimonials/admin'),
  create: (data) => apiCall('/testimonials', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  update: (id, data) => apiCall(`/testimonials/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  delete: (id) => apiCall(`/testimonials/${id}`, {
    method: 'DELETE'
  })
};