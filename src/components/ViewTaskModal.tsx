import { CalendarDays, Clock, X, ClipboardList } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { taskListAction } from "../redux/features/taskList";

const ViewTaskModal = () => {
  const dispatch = useDispatch();
  const viewData = useSelector(
    (state: RootState) => state?.taskList?.viewModal,
  );

  const onClose = () => {
    dispatch(
      taskListAction.setViewModal({
        isOpen: false,
        title: "",
        description: "",
        date: "",
        time: "",
        _id: "",
      }),
    );
  };
  return (
    <>
      {viewData?.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b p-5">
              <div className="flex items-center gap-2">
                <ClipboardList className="text-blue-600" size={24} />
                <h2 className="text-xl font-bold text-gray-800">
                  Task Details
                </h2>
              </div>

              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <X size={22} />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-6 p-6">
              {/* Title */}
              <div>
                <label className="text-sm font-semibold text-gray-500 ">
                  Task Title
                </label>

                <div className="mt-2 rounded-lg bg-gray-100 p-3 text-gray-800 ">
                  {viewData.title}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-semibold text-gray-500">
                  Description
                </label>

                <div className="mt-2 rounded-lg bg-gray-100 p-3 text-gray-700 whitespace-pre-wrap">
                  <div className="flex items-start gap-2 mh-[195px] overflow-y-auto scrollbar-thin">
                    <span>{viewData.description}</span>
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2 text-green-600">
                    <CalendarDays size={18} />
                    <span className="font-medium">Date</span>
                  </div>

                  <p className="mt-2 text-gray-700">{viewData.date}</p>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2 text-red-500">
                    <Clock size={18} />
                    <span className="font-medium">Time</span>
                  </div>

                  <p className="mt-2 text-gray-700">{viewData.time}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end border-t p-5">
              <button
                onClick={onClose}
                className="rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewTaskModal;
