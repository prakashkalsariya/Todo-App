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
        error: "Something went wrong data!",
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
