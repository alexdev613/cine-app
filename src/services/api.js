import axios from 'axios';
// Base da URL: https://api.themoviedb.org/3/
// URL da APIO: /movie/now_playing?api_key=5da9e9ec1d460b54205a9798c1dab833&language=pt-BR

const api = axios.create({
  baseURL: 'http://api.themoviedb.org/3/'
});

export default api;