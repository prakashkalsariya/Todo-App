import { useState } from "react";

import Header from "./Header";
import Loading from "./Loading";
import TaskCard from "./TaskCard";
import { taskData } from "../jsonData/TaskData.ts";
import TaskDeleteModal from "./TaskDeleteModal.tsx";

const TaskList = () => {
  const [state, setState] = useState({
    isLoading: false,
    tasksData: [],
  });
  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":").map(Number);
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;

    return `${hour12}:${String(minute).padStart(2, "0")} ${period}`;
  };

  function formatDate(date: string) {
    const finalDate = new Date(date);
    return finalDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <TaskDeleteModal />

      {state?.isLoading ? (
        <Loading />
      ) : (
        <main className="flex items-center flex-wrap gap-5 m-5">
          {taskData.map((task) => (
            <TaskCard
              title={task?.title}
              description={task?.description}
              date={formatDate(task?.date)}
              time={formatTime(task?.time)}
              id={task?._id}
            />
          ))}
        </main>
      )}
    </div>
  );
};

export default TaskList;
