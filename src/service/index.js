import axios from 'axios';
// import env from './env';
// import Qs from 'qs';

const instance = axios.create({
  timeout: 5000
});

export default instance
