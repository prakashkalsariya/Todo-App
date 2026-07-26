import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "react-hot-toast";
import MainApp from "./components/MainApp.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    {/* <Header /> */}
    <BrowserRouter>
      <Provider store={store}>
        <Toaster />
        <MainApp />
      </Provider>
    </BrowserRouter>
  </>,
);
