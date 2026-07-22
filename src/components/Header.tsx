import React from "react";
import { CheckCircle2, PlusCircle, LogOut } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl">
            <CheckCircle2 className="w-7 h-7 text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Todo App
            </h1>
            <p className="text-xs text-gray-500">
              Manage your daily tasks
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="/add-task"
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 transition"
          >
            <PlusCircle size={18} />
            Add Task
          </a>
        </nav>

        {/* Logout Button */}
        <button
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;