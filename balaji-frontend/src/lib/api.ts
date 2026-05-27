import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Lead API
export const leadAPI = {
  create: async (data: {
    name: string;
    phone: string;
    email?: string;
    city?: string;
    requirement?: string;
    source?: string;
  }) => {
    const response = await api.post('/api/leads', data);
    return response.data;
  },

  getAll: async () => {
    const response = await api.get('/api/leads');
    return response.data;
  },

  updateStatus: async (id: string, status: string) => {
    const response = await api.put(`/api/leads/${id}`, { status });
    return response.data;
  },
};

// Future APIs can be added here
export const servicesAPI = {
  getAll: async () => {
    // TODO: Implement when backend endpoint is ready
    return [];
  },
};

export const projectsAPI = {
  getAll: async () => {
    // TODO: Implement when backend endpoint is ready
    return [];
  },
};

export const blogAPI = {
  getAll: async () => {
    // TODO: Implement when backend endpoint is ready
    return [];
  },
};
