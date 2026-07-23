import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Lock, Eye, EyeOff, LogIn, LoaderCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { clientRoutes } from "../utils/routes";
import { LocalStorageEnums } from "../enums/localstorage.enums";

const Login = () => {
  const [state, setState] = useState({
    isLoading: false,
    showPassword: false,
  });
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),

      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    }),

    onSubmit: (values) => {
      console.log(values);

      // Call Login API here
      alert("Login Successful!");
    },
  });

  const onLogin = () => {
    let loginData = {
      email: formik?.values?.email,
      isLogin:true
    };
    localStorage.setItem(
      LocalStorageEnums?.user?.login_data,
      JSON.stringify(loginData),
    );
    navigate(clientRoutes.taskList);
  };

  useEffect(() => {
    let isLoggedIn = localStorage.getItem(LocalStorageEnums?.user?.login_data);
    if (isLoggedIn) navigate(clientRoutes.taskList);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-center  border-b mb-6 pb-6 border-gray-300 ">
          <Logo />
        </div>
        <div className="mb-8 text-center">
          {/* <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <LogIn className="text-blue-600" size={30} />
          </div> */}

          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>

          <p className="mt-2 text-gray-500">
            Login to continue managing your tasks.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-5">
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
              <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
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
                type={state?.showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full rounded-lg border py-3 pl-10 pr-12 outline-none transition ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-300 focus:border-blue-500"
                }`}
              />

              <button
                type="button"
                onClick={() =>
                  setState({ ...state, showPassword: !state?.showPassword })
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {!state?.showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>

            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          {/* <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div> */}

          {/* Login Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 h-[50px]"
            onClick={onLogin}
          >
            {state?.isLoading ? (
              <LoaderCircle className="h-9 w-9 animate-spin" />
            ) : (
              <>
                <LogIn size={20} />
                Login
              </>
            )}
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
