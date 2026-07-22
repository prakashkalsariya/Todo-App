import React from "react";
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
import TaskDeleteModal from "./TaskDeleteModal";

const TaskCard = ({
  title,
  message,
  date,
  time,
  onView,
  onEdit,
  onDelete,
}: any) => {
  const navigate = useNavigate();
  return (
    <>
    {/* <TaskDeleteModal/> */}

    <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>

      {/* Message */}
      <div className="flex items-start gap-2 mb-4">
        <FileText className="w-5 h-5 text-blue-500 mt-1" />
        <p className="text-gray-600 text-sm leading-relaxed">{message}</p>
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
          View
        </button>

        <button
          onClick={()=>navigate(clientRoutes.editTask)}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition cursor-pointer"
        >
          <Pencil size={16} />
          Edit
        </button>

        <button
          onClick={onDelete}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition cursor-pointer"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
        </>
  );
};

export default TaskCard;
