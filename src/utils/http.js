import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8888/", // 基地址
  timeout: 5000, // 请求超时时间
});

// axios请求拦截器
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e)
);

// axios响应式拦截器
http.interceptors.response.use(
  (res) => res.data,
  (e) => {
    return Promise.reject(e);
  }
);

export default http;
