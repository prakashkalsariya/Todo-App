import { useFormik } from "formik";
import * as Yup from "yup";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),

      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);

      alert("Registration Successful!");

      resetForm();
    },
  });

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
          {/* Heading */}
          <Logo />
          <div className="mb-8 text-center">
            {/* <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <UserPlus className="text-blue-600" size={30} />
            </div> */}

            <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>

            <p className="mt-2 text-gray-500">Register to manage your tasks.</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full rounded-lg border py-3 pl-10 pr-4 outline-none transition ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />
              </div>

              {formik.touched.name && formik.errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full rounded-lg border py-3 pl-10 pr-4 outline-none transition ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />
              </div>

              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full rounded-lg border py-3 pl-10 pr-4 outline-none transition ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />
              </div>

              {formik.touched.password && formik.errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <UserPlus size={20} />
              Register
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
