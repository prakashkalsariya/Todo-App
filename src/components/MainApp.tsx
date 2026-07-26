import App from "../App";
import SideBar from "./SideBar";

const MainApp = () => {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <SideBar />
      <main className="flex-1">
        <App />
      </main>
    </div>
  );
};

export default MainApp;
