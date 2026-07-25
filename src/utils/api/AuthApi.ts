import axiosInstance from "./Axios";
import type { ILoginData, IRegisterData } from "../../@types/task.list";

export class AuthApi {
  static register = async (data: IRegisterData) => {
    try {
      const res = await axiosInstance({
        method: "post",
        url: `/register`,
        data,
      });
      return {
        data: res.data,
        status: res.status,
      };
    } catch (err: any) {
      return {
        data: err,
        error: "Internal server error please try again!",
      };
    }
  };


  static login = async (data: ILoginData) => {
    try {
      const res = await axiosInstance({
        method: "post",
        url: `/login`,
        data,
      });
      return {
        data: res.data,
        status: res.status,
      };
    } catch (err: any) {
      return {
        data: err,
        error: "Internal server error please try again!",
      };
    }
  };
}
