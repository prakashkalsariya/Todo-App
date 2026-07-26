import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "./Logo";
import { TaskApi } from "../utils/api/TaskApi";
import toast from "react-hot-toast";
import Loading from "./Loading";
import EditTaskForm from "./EditTaskForm";
import ProtectedComponent from "./ProtectedComponent";

const EditTask = () => {
  const { id }: any = useParams();
  const [state, setState] = useState({
    isLoading: false,
    taskData: {
      title: "",
      description: "",
      date: "",
      time: "",
    },
  });

  const getByIdApi = async () => {
    setState({
      ...state,
      isLoading: true,
    });
    const res: any = await TaskApi.getTaskById(id);
    if (res?.data?.success) {
      let resData = res.data.data;
      setState({
        ...state,
        isLoading: false,
        taskData: {
          title: resData?.title,
          description: resData?.description,
          date: resData?.date,
          time: resData?.time,
        },
      });
    } else {
      setState({
        ...state,
        isLoading: false,
      });
      toast.error(res?.error);
    }
  };

  useEffect(() => {
    getByIdApi();
  }, []);

  return (
    <ProtectedComponent>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        {/* <div className="bg-white shadow border-b">
          <div className=" flex items-center justify-between px-6 py-4 cursor-poniter">
            <Logo />
            <h1 className="text-2xl font-bold">Add Task</h1>
            <div className="min-w-55"></div>
          </div>
        </div> */}
        {/* Form */}
        {state?.isLoading ? (
          <Loading />
        ) : (
          <EditTaskForm taskData={state?.taskData} id={id} />
        )}
      </div>
    </ProtectedComponent>
  );
};

export default EditTask;
