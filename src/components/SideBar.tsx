import { useEffect, useState } from "react";
import {
  Menu,
  X,
  CheckSquare,
  LogOut,
  User,
  PlusCircle,
  LayoutDashboard,
} from "lucide-react";
import { AuthHelpers } from "../utils/auth.helpers";
import { clientRoutes } from "../utils/routes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SidebarItem from "./SidebarItem";

export default function SideBar() {
  const navigate = useNavigate();
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
    console.log("pathname>>>", location?.pathname);
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
      <div className="border-b p-4">
        <div className="flex items-center gap-3">
          <div className="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-slate-200">
            <User className="text-slate-700" size={22} />
          </div>

          {state?.isOpen && (
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
        {/* <SidebarItem
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          state?.isOpen={state?.isOpen}
          active={true}
        /> */}

        {sidebarItems.map((item) => (
          <SidebarItem icon={item?.icon} label={item?.label} isOpen={state?.isOpen} nav_link={item?.nav_link} id={item?.id} active ={state?.active}/>
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
