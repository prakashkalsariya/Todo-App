import toast from "react-hot-toast";
import axiosInstance from "./Axios";

export class TaskApi {
  static getTasks = async () => {
    try {
      const res = await axiosInstance({
        method: "get",
        url: "/tasks",
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

  static deleteTask = async (_id: string) => {
    try {
      const res = await axiosInstance({
        method: "delete",
        url: `task/delete/${_id}`,
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

  // static getTasks = async (data: any) => {
  //   try {
  //     const res = await axiosInstance({
  //       method: "post",
  //       url: "/tasks",
  //       data: data,
  //     });
  //     return {
  //       data: res.data,
  //       status: res.status,
  //     };
  //   } catch (err: any) {
  //     return {
  //       data: err,
  //       error: "Something went wrong data!",
  //     };
  //   }
  // };
}
