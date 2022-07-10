import axios from 'axios';

const http = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getPowers = () => http.get('/powers');

export const getHeroes = () => http.get('/heroes');

// if js-object => Content-Type: Application/json
//    data => req.body
// if FormData => Content-Type: miltipart/form-data
//    data (text) => (multer) => req.body
//    data (file) => (multer) => req.file
export const createHero = data => http.post('/heroes', data);
