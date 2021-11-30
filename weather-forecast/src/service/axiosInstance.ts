import { AxiosRequestConfig } from "axios";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  config.params = config.params || {};
  config.params.appid = process.env.REACT_APP_API_KEY;
  return config;
});

export default instance;
