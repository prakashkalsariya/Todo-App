import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <>
   {/* <Header /> */}
    <BrowserRouter>
    <Provider store={store}>

         <App />
    </Provider>
   
    </BrowserRouter>
  </>,
);
