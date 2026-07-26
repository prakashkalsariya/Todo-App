import { ClipboardX } from "lucide-react";

const TaskNotFound = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="w-full max-w-lg  p-10 text-center ">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <ClipboardX className="h-12 w-12 text-red-500" />
        </div>

        <h1 className="mt-8 text-3xl font-bold text-slate-900">
          Task Not Found
        </h1>

        <p className="mt-3 text-slate-600 leading-relaxed">
          The task you're looking for doesn't exist, Please add your task.
        </p>
      </div>
    </div>
  );
};

export default TaskNotFound;
