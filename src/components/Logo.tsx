import { CheckCircle2 } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-blue-600 p-2 rounded-xl">
        <CheckCircle2 className="w-7 h-7 text-white" />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-800">Todo App</h1>
        <p className="text-xs text-gray-500">Manage your daily tasks</p>
      </div>
    </div>
  );
};

export default Logo;
