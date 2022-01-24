import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character/175'
});

export default api;