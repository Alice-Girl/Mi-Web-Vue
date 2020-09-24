import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://mi.futurefe.com/api/',
  withCredentials: false,   // 是否配置https证书
  timeout: 1000
})

// 请求拦截
instance.interceptors.request.use(config => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(response => {
  const res = response.data
  if(res.status == 0) {
    return res.data
  }else if(res.status == 10) {
    window.location.href = '/login'
  }else {
    alert(res.msg)
  }
  return response
},error => {
  return Promise.reject(error)
})