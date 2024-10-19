import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // Base URL for API requests (uses Vite proxy)
});

// Optional: Set default headers
instance.defaults.headers.common['Content-Type'] = 'application/json';

export default instance;