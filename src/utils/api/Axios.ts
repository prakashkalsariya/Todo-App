import axios from "axios";
import { LocalStorageEnums } from "../../enums/localstorage.enums";

axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: "http://localhost:4800/api",
});

axiosInstance.interceptors.request.use((config: any) => {
  const accessToken = localStorage?.getItem(
    LocalStorageEnums.user.access_token,
  );
  if (accessToken)
    config.headers["Authorization"] = `Bearer ${accessToken || ""}`;

  return config;
});

export default axiosInstance;
