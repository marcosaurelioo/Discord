import axios from 'axios';

const api = axios.create({
   baseURL: 'https://real-time-chat007.herokuapp.com/',
});

export default api;