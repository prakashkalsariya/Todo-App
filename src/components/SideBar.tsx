import { useEffect, useState } from "react";
import { Menu, X, CheckSquare, LogOut, PlusCircle } from "lucide-react";
import { AuthHelpers } from "../utils/auth.helpers";
import { clientRoutes } from "../utils/routes";
import { useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import Profile from "./Profile";

export default function SideBar() {
  const location = useLocation();
  const [state, setState] = useState({
    isOpen: false,
    active: "",
  });

  const sidebarItems = [
    {
      id: "1",
      label: "My Tasks",
      icon: <CheckSquare size={20} />,
      nav_link: clientRoutes.taskList,
    },

    {
      id: "1",
      label: "Add Task",
      icon: <PlusCircle size={20} />,
      nav_link: clientRoutes.addTask,
    },
  ];

  useEffect(() => {
    setState({
      ...state,
      active: location?.pathname,
    });
  }, [location?.pathname]);

  return (
    <aside
      className={`relative flex flex-col bg-white border-r shadow-sm transition-all duration-300 z-100 ${
        state?.isOpen ? "w-72" : "w-20"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() =>
          setState({
            ...state,
            isOpen: !state?.isOpen,
          })
        }
        className="absolute -right-3 top-6 rounded-full border bg-white p-1 shadow"
      >
        {state?.isOpen ? <X size={16} /> : <Menu size={16} />}
      </button>

      {/* Profile */}

      <Profile isOpen={state?.isOpen} />

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-3">
        {sidebarItems.map((item) => (
          <SidebarItem
            icon={item?.icon}
            label={item?.label}
            isOpen={state?.isOpen}
            nav_link={item?.nav_link}
            id={item?.id}
            active={state?.active}
          />
        ))}
      </nav>

      <div className="border-t p-3">
        <button
          className="w-full flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer "
          onClick={AuthHelpers.logOut}
        >
          <LogOut size={20} />
          {state?.isOpen && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
