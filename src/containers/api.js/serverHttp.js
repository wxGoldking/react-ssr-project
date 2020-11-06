import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://jianjiyudao.com:8888/'
})

export default instance;