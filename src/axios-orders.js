import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-sha256.firebaseio.com'
});

export default instance;