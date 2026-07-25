import axios from "axios";
import { LocalStorageEnums } from "../../enums/localstorage.enums";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4800/api", // For Vite
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem(LocalStorageEnums?.user?.access_token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
