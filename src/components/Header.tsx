import { PlusCircle, LogOut } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between cursor-pointer">
        <Logo />

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/add-task"
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 transition "
          >
            <PlusCircle size={18} />
            Add Task
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
