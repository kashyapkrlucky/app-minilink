import axios from 'axios';

// Create an instance of Axios with custom configuration
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000, // Set a timeout limit for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json', // Set default headers
    Accept: 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before the request is sent, e.g., add authentication token
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors, e.g., redirect to login page
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
