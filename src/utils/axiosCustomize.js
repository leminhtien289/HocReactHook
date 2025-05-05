import axios from 'axios';
import NProgress from 'nprogress';
import { store } from '../redux/store'; // Import the store

NProgress.configure({
    showSpinner: false, // Disable the spinner
    trickleSpeed: 100, // Speed of the trickle effect
});

const instance = axios.create({
    baseURL: 'http://localhost:8081/',
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    const accessToken = store?.getState()?.user?.account?.access_token; // Get the access token from the Redux store
    config.headers['Authorization'] = `Bearer ${accessToken}`; // Set the Authorization header
    NProgress.start(); // Start the progress bar
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    NProgress.done(); // Complete the progress bar
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
});

export default instance;