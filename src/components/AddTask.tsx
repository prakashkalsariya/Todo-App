import React from "react";
import { ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "./Logo";

const AddTask = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      message: "",
      date: "",
      time: "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Task title is required"),
      // .min(3, "Minimum 3 characters")
      message: Yup.string().required("Task description is required"),
      // .min(10, "Minimum 10 characters")
      date: Yup.string().required("Task date is required"),

      time: Yup.string().required("Task time is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      navigate("/");
    },
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow border-b">
        <div className=" flex items-center justify-between px-6 py-4">
          <Logo />

          <h1 className="text-2xl font-bold">Add Task</h1>

          <div className="min-w-55"></div>
        </div>
      </div>

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
              <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">Task Description</label>

            <textarea
              // rows="4"
              name="message"
              placeholder="Enter task description"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full border rounded-lg px-4 py-3 outline-none resize-none ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "border-gray-300 hover:border-blue-500"
              }`}
            />

            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.message}
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
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition cursor-pointer"
            >
              <Save size={18} />
              Save Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
