import { PlusCircle, LogOut } from "lucide-react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { clientRoutes } from "../utils/routes";

const Header = () => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    navigate(clientRoutes.login);
  };
  return (
    <header className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/add-task"
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 transition "
          >
            <PlusCircle size={18} />
            Add Task
          </Link>
        </nav>

        {/* Logout Button */}
        <button
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer "
          onClick={signOut}
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
