import { useState } from "react";
import { LoaderCircle, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import type { ITaskData } from "../@types/task.list";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { TaskApi } from "../utils/api/TaskApi";
import { taskListAction } from "../redux/features/taskList";
import ProtectedComponent from "./ProtectedComponent";

const AddTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    isLoading: false,
  });

  const onSubmitHandler = async (values: ITaskData) => {
    setState({
      ...state,
      isLoading: true,
    });

    const res: any = await TaskApi.createTask({
      title: values?.title,
      description: values?.description,
      date: values?.date,
      time: values?.time,
    });

    if (res?.data?.success) {
      toast.success("Task created successfully.");
      dispatch(taskListAction.resetList());
      navigate("/");
    } else {
      toast.error(res?.error || "Internal server error!");
    }
    setState({
      ...state,
      isLoading: false,
    });
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
      time: "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Task title is required"),
      // .min(3, "Minimum 3 characters")
      description: Yup.string().required("Task description is required"),
      // .min(10, "Minimum 10 characters")
      date: Yup.string().required("Task date is required"),
      time: Yup.string().required("Task time is required"),
    }),

    onSubmit: onSubmitHandler,
  });

  return (
    <ProtectedComponent>
      <div className="min-h-screen bg-gray-100">
        {/* Form */}
        <div className="max-w-2xl mx-auto mt-8 bg-white p-8 rounded-xl shadow">
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {/* Title */}
            <div>
              <label className="block mb-2 font-medium">Task Title</label>

              <input
                type="text"
                name="title"
                placeholder="Enter task title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border rounded-lg px-4 py-3 outline-none ${
                  formik.touched.title && formik.errors.title
                    ? "border-red-500"
                    : "border-gray-300 hover:border-blue-500"
                }`}
              />

              {formik.touched.title && formik.errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.title}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block mb-2 font-medium">Task Description</label>

              <textarea
                // rows="4"
                name="description"
                placeholder="Enter task description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full h-50 border rounded-lg px-4 py-3 outline-none resize-none ${
                  formik.touched.description && formik.errors.description
                    ? "border-red-500"
                    : "border-gray-300 hover:border-blue-500"
                }`}
              />

              {formik.touched.description && formik.errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.description}
                </p>
              )}
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-medium">Task Date</label>

                <input
                  type="date"
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full border rounded-lg px-4 py-3 outline-none ${
                    formik.touched.date && formik.errors.date
                      ? "border-red-500"
                      : "border-gray-300 hover:border-blue-500"
                  }`}
                />

                {formik.touched.date && formik.errors.date && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.date}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 font-medium">Task Time</label>

                <input
                  type="time"
                  name="time"
                  value={formik.values.time}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full border rounded-lg px-4 py-3 outline-none ${
                    formik.touched.time && formik.errors.time
                      ? "border-red-500"
                      : "border-gray-300 hover:border-blue-500"
                  }`}
                />

                {formik.touched.time && formik.errors.time && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.time}
                  </p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-[120px] flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition cursor-pointer"
              >
                {state?.isLoading ? (
                  <LoaderCircle className="h-7 w-7 animate-spin" />
                ) : (
                  <>
                    <Save size={18} />
                    Save Task
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </ProtectedComponent>
  );
};

export default AddTask;
