import axios from 'axios';
import { API_END_POINT } from '../config';

const axiosInstance = axios.create({
    baseURL: API_END_POINT,
    timeout: 3000
});

export default axiosInstance;