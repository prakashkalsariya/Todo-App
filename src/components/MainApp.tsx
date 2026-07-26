import { useLocation } from "react-router-dom";
import App from "../App";
import Header from "./Header";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { clientRoutes } from "../utils/routes";

const MainApp = () => {
  const [sideBar, setSidebar] = useState(false);
  const location = useLocation();

  const checkPath = () => {
    switch (location.pathname) {
      case clientRoutes.login:
        setSidebar(false);
        break;
      case clientRoutes.register:
        setSidebar(false);
        break;
      default:
        setSidebar(true);
    }
  };

  useEffect(() => {
    checkPath();
  }, [location.pathname]);
  return (
    <>
      {sideBar && <Header />}
      <div className="flex bg-slate-100">
        {sideBar && <SideBar />}
        <main
          className={`flex-1 overflow-auto ${sideBar && "main_screen_height"}`}
        >
          <App />
        </main>
      </div>
    </>
  );
};

export default MainApp;
