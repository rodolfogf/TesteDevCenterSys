import axios from 'axios';


const api = axios.create({
  baseURL: 'https://localhost:7158',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const ApiService = {
  get: async (url, params = {}) => {
    try {
      const response = await api.get(url, { params });
      return response.data;
    } catch (error) {
      console.error('Erro no GET', error);
      throw error;
    }
  },
  getById: async (url, id) => {
    try {
      const response = await api.get(`${url}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro no GET', error);
      throw error;
    }
  },

  post: async (url, data) => {
    try {
      console.log(data)
      const response = await api.post(url, data);
      return response;
    } catch (error) {
      console.error('Erro no POST', error);
      throw error;
    }
  },

 put: async (url, id, data) => {
    try {
      const response = await api.put(`${url}/${id}`, data);
      return response;
    } catch (error) {
      console.error('Erro no PUT', error);
      throw error;
    }
  },

patch: async (url, data) => {
    try {
      const response = await api.patch(url, data);
      return response.data;
    } catch (error) {
      console.error('Erro no PATCH', error);
      throw error;
    }
  },

delete: async (url, id) => {
    try {
      const response = await api.delete(`${url}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro no DELETE', error);
      throw error;
    }
  },
};

export default ApiService;
