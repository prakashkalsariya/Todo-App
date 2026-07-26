import { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  CheckSquare,
  Calendar,
  Settings,
  LogOut,
  User,
  CheckCircle2,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`relative flex flex-col bg-white border-r shadow-sm transition-all duration-300 z-100 ${
        isOpen ? "w-72" : "w-20"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-6 rounded-full border bg-white p-1 shadow"
      >
        {isOpen ? <X size={16} /> : <Menu size={16} />}
      </button>

      {/* Logo */}

      <div className="flex items-center gap-3 border-b p-5">
        <div className="flex min-h-11 min-w-11 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
          <CheckCircle2 className="w-7 h-7 text-white" />
        </div>
        {isOpen && (
          <div>
            <h1 className="text-lg font-bold text-slate-800 text-nowrap">
              Todo App
            </h1>
            <p className="text-xs text-slate-500 text-nowrap">
              Manage your daily tasks
            </p>
          </div>
        )}
      </div>

      {/* Profile */}
      <div className="border-b p-4">
        <div className="flex items-center gap-3">
          <div className="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-slate-200">
            <User className="text-slate-700" size={22} />
          </div>

          {isOpen && (
            <div>
              <h3 className="font-semibold text-slate-800 text-nowrap">
                John Doe
              </h3>
              <p className="text-sm text-slate-500 text-nowrap">
                john@example.com
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-3">
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          isOpen={isOpen}
          active={true}
        />
        <SidebarItem
          icon={<CheckSquare size={20} />}
          label="My Tasks"
          isOpen={isOpen}
          active={false}
        />
        <SidebarItem
          icon={<Calendar size={20} />}
          label="Calendar"
          isOpen={isOpen}
          active={false}
        />
        <SidebarItem
          icon={<Settings size={20} />}
          label="Settings"
          isOpen={isOpen}
          active={false}
        />
      </nav>

      {/* Logout */}
      <div className="border-t p-3">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 transition hover:bg-red-50">
          <LogOut size={20} />
          {isOpen && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
