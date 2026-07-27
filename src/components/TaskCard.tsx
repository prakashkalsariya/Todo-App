import {
  CalendarDays,
  Clock,
  FileText,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import { clientRoutes } from "../utils/routes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { taskListAction } from "../redux/features/taskList";
import type { ITaskList } from "../@types/task.list";

const TaskCard = ({ title, description, date, time, id }: ITaskList) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onView = () => {
    dispatch(
      taskListAction.setViewModal({
        isOpen: true,
        title,
        description,
        date,
        time,
        _id: id,
      }),
    );
  };

  const onDelete = () => {
    dispatch(
      taskListAction.setDeleteModal({
        _id: id,
        isOpen: true,
        title,
      }),
    );
  };

  // console.log("testtest");

  return (
    <>
      <div
        className="w-[100%] lg:w-[48%] xl:w-[32%] bg-white rounded-2xl shadow-lg border border-gray-200 p-5 hover:shadow-xl transition duration-300"
        key={id}
      >
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-3 overflow_title">
          {title}
        </h2>

        {/* Message */}
        <div className="flex items-start gap-2 mb-4">
          <div>
            <FileText className="text-blue-500 mt-1" size={20} />
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mt-[2px] overflow_text">
            {description}
          </p>
        </div>

        {/* Date & Time */}
        <div className="flex items-center justify-between  border-b py-4 mb-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <CalendarDays className="w-4 h-4 text-green-500" />
            <span>{date}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock className="w-4 h-4 text-red-500" />
            <span>{time}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onView}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition cursor-pointer"
          >
            <Eye size={16} />
            {/* View */}
          </button>

          <button
            onClick={() => navigate(`${clientRoutes.editTask}/${id}`)}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition cursor-pointer"
          >
            <Pencil size={16} />
            {/* Edit */}
          </button>

          <button
            onClick={onDelete}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition cursor-pointer"
          >
            <Trash2 size={16} />
            {/* Delete */}
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
