import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { AxiosCanceler } from "./AxiosCanceler";
import { CheckStatus } from "./AxiosStatus";

export const axiosCancler = new AxiosCanceler();

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
  // 跨域时允许携带凭证
  withCredentials: true,
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log("请求拦截器");
  axiosCancler.addPending(config);
  return config;
}, (error: AxiosError) => {
  if (error && error.config) {
    axiosCancler.removePending(error.config);
  }
  return Promise.reject(error);
});

service.interceptors.response.use((response: AxiosResponse) => {
  console.log("响应拦截器");
  const { data, config } = response
  axiosCancler.removePending(config);
  if (data.code && data.code !== 200) {
    // message.error(data.msg)
    return Promise.reject(data);
  }
  return response;
}, (error: AxiosError) => {
  const { response, config } = error
  if (config) {
    axiosCancler.removePending(config);
  }
  if (response && response.status === 401) {
    // store.dispatch(setToken('')) // 清除token
    // store.dispatch(setUserInfo({})) // 清除用户信息
    window.location.href = '/login'
    return Promise.reject(error);
  }
  if (error.message.includes('timeout')) {
    console.log('请求超时');
    error.message = '请求超时';
    return Promise.reject(error);
  }

  if (response) {
    console.log('处理返回状态', response.status);
    CheckStatus(response.status)
    return Promise.reject(error);
  }
  return Promise.reject(error);
});

export default service;