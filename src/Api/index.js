import axios from "axios";
import { toast } from "@/Toast/toast";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    if (response.data.message && response.config.method !== 'get') {
      toast(response.data.message, 'success');
    }
    return response;
  },
  function (error) {
    const response = error.response;
    if (response) {
      if (response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedrole');
        window.location.href = '/login';
      }

      const message = response.data.message || 'An error occurred';
      toast(message, 'error');
    }
    return Promise.reject(error);
  }
);
