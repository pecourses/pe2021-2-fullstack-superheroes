import axios from 'axios';

const http = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getPowers = () => http.get('/powers');

export const getHeroes = () => http.get('/heroes');

// data => req.body
export const createHero = data => http.post('/heroes', data);
