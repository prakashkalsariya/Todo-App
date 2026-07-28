import axios from "axios";
import { LocalStorageEnums } from "../../enums/localstorage.enums";

const endPoint = import.meta.env.VITE_API_URL_ENDPOINT;

const axiosInstance = axios.create({
  baseURL: endPoint,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem(LocalStorageEnums?.user?.access_token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
