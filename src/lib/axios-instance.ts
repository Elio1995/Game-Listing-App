import axios from 'axios';

export const setupAxiosInstance = () => {
  axios.defaults.headers.common['X-API-Key'] =
    '01964fa8-f0e5-40fc-a13b-9f5c3a5415f3';
};

export default axios;
