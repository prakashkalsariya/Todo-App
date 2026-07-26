const SidebarItem =({
  icon,
  label,
  isOpen,
  active = false,
}: {
  icon: any;
  label: any;
  isOpen: any;
  active: boolean | null;
})=> {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
        active
          ? "bg-blue-600 text-white shadow"
          : "text-slate-700 hover:bg-slate-100"
      }`}
    >
      {icon}
      {isOpen && <span className="font-medium text-nowrap">{label}</span>}
    </button>
  );
}

export default SidebarItem
