import axios from 'axios';

const getInstance = ({request}) => {
    const instance = axios.create({
        baseURL: 'http://jianjiyudao.com:8888/',
        headers: {
            cookie: request.header.cookie || '' 
        },
    })
    instance.interceptors.response.use(function (res) {
        // 对响应数据做点什么
        if(res.data.code === 'ok') {
            return Promise.resolve(res.data);
        }
        return Promise.reject(res.data);
      }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
      });
    return instance;
}

export default getInstance;