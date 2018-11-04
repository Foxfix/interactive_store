import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-ff9a8.firebaseio.com/'
});

export default instance;
