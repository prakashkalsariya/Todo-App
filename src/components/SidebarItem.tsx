import { Link } from "react-router-dom";

const SidebarItem = ({
  icon,
  label,
  isOpen,
  active,
  nav_link,
  id,
}: {
  icon: any;
  label: string;
  isOpen: boolean;
  active: string;
  nav_link: string;
  id: string;
}) => {
  return (
    <Link
      to={nav_link}
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
        active == nav_link
          ? "bg-blue-600 text-white shadow"
          : "text-slate-700 hover:bg-slate-100"
      }`}
      key={id}
    >
      {icon}
      {isOpen && <span className="font-medium text-nowrap">{label}</span>}
    </Link>
  );
};

export default SidebarItem;
