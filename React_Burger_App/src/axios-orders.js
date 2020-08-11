import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-react-tutorial.firebaseio.com/'
})

export default instance;