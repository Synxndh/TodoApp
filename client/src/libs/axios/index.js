import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api/reducer-global/job/';

const http = axios.create({
    baseURL: BASE_URL,
});

http.interceptors.request.use(
    (config) => {
        // Add your custom headers here
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    },
);

http.interceptors.response.use(
    (response) => response,
    async (error) => {
        // Do something with response error
        return Promise.reject(error);
    },
);

export default http;
