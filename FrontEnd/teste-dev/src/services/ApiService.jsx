import axios from 'axios';


const api = axios.create({
  baseURL: 'https://localhost:7158',
  headers: {
    'Content-Type': 'application/json',
  },
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
      const response = await api.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Erro no POST', error);
      throw error;
    }
  },

 put: async (url, data) => {
    try {
      const response = await api.put(url, data);
      return response.data;
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

delete: async (url) => {
    try {
      const response = await api.delete(url);
      return response.data;
    } catch (error) {
      console.error('Erro no DELETE', error);
      throw error;
    }
  },
};

export default ApiService;
