import { Link } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";
import { clientRoutes } from "../utils/routes";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-lg text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <SearchX className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="mt-8 text-7xl font-extrabold text-slate-900">404</h1>
        <h2 className="mt-3 text-3xl font-bold text-slate-800">
          Page Not Found
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Sorry, the page you are looking for doesn't exist or has been moved.
          Please check the URL or return to the dashboard.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to={clientRoutes?.taskList}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <Home size={18} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
