import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000, // 10 second timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for performance optimization
instance.interceptors.request.use(
  (config) => {
    // Add timestamp for caching
    config.metadata = { startTime: new Date() };
    
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for performance monitoring and error handling
instance.interceptors.response.use(
  (response) => {
    // Log response time for performance monitoring
    const endTime = new Date();
    const startTime = response.config.metadata?.startTime;
    if (startTime) {
      const duration = endTime.getTime() - startTime.getTime();
      console.log(`API call to ${response.config.url} took ${duration}ms`);
    }
    
    return response;
  },
  async (error) => {
    // Retry logic for network errors
    if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
      console.log('Request timeout, retrying...');
      // You can implement retry logic here if needed
    }
    
    return Promise.reject(error);
  }
);

export default instance; 