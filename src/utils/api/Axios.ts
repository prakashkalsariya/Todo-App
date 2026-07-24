import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4800/api", // For Vite
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
