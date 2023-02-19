import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'https://api.sixshop.com' });

export default axiosInstance;
