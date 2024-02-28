// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://magnifyserver-2.onrender.com', // Update the port if necessary
});

export default instance;
