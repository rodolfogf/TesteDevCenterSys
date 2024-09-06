import axios from 'axios';

// Configurando a base URL para as requisições
const api = axios.create({
  baseURL: 'https://localhost:7158', // Troque pela sua URL base
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

  // Método POST: Para criar novos dados
  post: async (url, data) => {
    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Erro no POST', error);
      throw error;
    }
  },

  // Método PUT: Para substituir dados existentes
  put: async (url, data) => {
    try {
      const response = await api.put(url, data);
      return response.data;
    } catch (error) {
      console.error('Erro no PUT', error);
      throw error;
    }
  },

  // Método PATCH: Para atualizar parcialmente os dados
  patch: async (url, data) => {
    try {
      const response = await api.patch(url, data);
      return response.data;
    } catch (error) {
      console.error('Erro no PATCH', error);
      throw error;
    }
  },

  // Método DELETE: Para excluir dados
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
