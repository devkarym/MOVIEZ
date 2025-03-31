import axios from 'axios';

const token = localStorage.getItem('token'); // ou onde você guardar seu token
const auth = import.meta.env.VITE_AUTH;
const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  headers: {
    Authorization: `Bearer ${auth}`,
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
