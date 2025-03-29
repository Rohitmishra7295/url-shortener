import axios from 'axios';

// Ensure this matches your Spring Boot backend URL
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080', // Default to localhost if VITE env is not set
});

export default api;
