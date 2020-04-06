import axios from 'axios';

const api = axios.create({
   baseURL: 'https://realtimechat22.herokuapp.com',
});

export default api;