import axios from 'axios';

// Creates an instance to use with Axios calls
const api = axios.create({
  baseURL: 'http://localhost:3100/astronauts',
  timeout: 5000,
  //   headers: {
  //     "Content-type": "application/json"
  //   }
});

export default api;
