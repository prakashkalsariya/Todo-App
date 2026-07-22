import React, { useState } from "react";
import { Ellipsis, LoaderCircle, TriangleAlert } from "lucide-react";

const TaskDeleteModal = ({ isOpen, onClose, onConfirm }: any) => {
  if (!isOpen) return null;
  const [clickDelete, setClickDelete] = useState(false);

  const click = () => {
    setClickDelete(!clickDelete);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-red-100 p-3">
            <TriangleAlert className="h-10 w-10 text-red-600" />
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-center text-2xl font-bold text-gray-800">
          Delete Task
        </h2>

        {/* Message */}
        <p className="mt-2 text-center text-gray-600">
          Are you sure you want to delete this task?
          <br />
          This action cannot be undone.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-5 py-2 text-gray-700 transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={click}
            className="rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700 w-[100px] h-[40px] flex items-center justify-center"
          >
            {clickDelete ? (
              <>
                <LoaderCircle className="h-7 w-7 animate-spin" />
              </>
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDeleteModal;
