import axios from 'axios';

const http = axios.create({ baseURL: 'http://localhost:5000/api' });

// http
//   .get('/heroes')
//   .then(response => console.log('response', response))
//   .catch(err => console.log('err', err));

// http
//   .post('/heroes',{nickname:'bla-bla', ...})
//   .then(response => console.log('response', response))
//   .catch(err => console.log('err', err));
