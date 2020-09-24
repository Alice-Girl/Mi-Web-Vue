import axios from "axios";
import { Message } from "element-ui";

const instance = axios.create({
  baseURL: "http://mi.futurefe.com/api/",
  withCredentials: false, // 是否配置https证书
  timeout: 1000,
});

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.status == 0) {
      return res.data;
    } else if (res.status == 10) {
      window.location.href = "/login";
    } else {
      Message({
        message: "错误处理...",
        type: "warning",
      });
    }
    return response;
  },
  (error) => {
    Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error);
  }
);

export default instance;
