import axios from "axios";
import qs from "qs";

const service = axios.create({
  baseURL: "",
  timeout: 1000,
  headers: {}
});

// 请求拦截器
service.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 请求拦截器
service.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default service;
