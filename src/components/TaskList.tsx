import { useEffect, useState } from "react";

import Header from "./Header";
import Loading from "./Loading";
import TaskCard from "./TaskCard";
import TaskDeleteModal from "./TaskDeleteModal.tsx";
import ViewTaskModal from "./ViewTaskModal.tsx";
import toast from "react-hot-toast";
import { TaskApi } from "../utils/api/TaskApi.ts";
import type { ITaskListState } from "../@types/task.list.tsx";
import { ProcessData } from "../common/comman.data.process.ts";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store.ts";

const TaskList = () => {
  const [state, setState] = useState<ITaskListState>({
    isLoading: false,
    taskData: [],
  });
  const reset = useSelector((state:RootState)=>state?.taskList?.listReset)

  const getApi = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const res: any = await TaskApi.getTasks();

    if (res?.data?.success) {
      setState({
        ...state,
        isLoading: false,
        taskData: res?.data?.data,
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
    getApi();
  }, [reset]);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <TaskDeleteModal />
      <ViewTaskModal />

      {state?.isLoading ? (
        <Loading />
      ) : (
        <main className="flex items-center flex-wrap gap-5 m-5">
          {state?.taskData.map((task) => (
            <TaskCard
              title={task?.title}
              description={task?.description}
              date={ProcessData.formatDate(task?.date)}
              time={ProcessData.formatTime(task?.time)}
              id={task?._id}
            />
          ))}
        </main>
      )}
    </div>
  );
};

export default TaskList;
