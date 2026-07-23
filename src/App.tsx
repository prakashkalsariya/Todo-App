// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { clientRoutes } from "./utils/routes.ts";
import EditTask from "./components/EditTask.tsx";
import Register from "./components/Register.tsx";
import Login from "./components/Login.tsx";
import ProtectedComponent from "./components/ProtectedComponent.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route
          path={clientRoutes.taskList}
          element={
            <>
              <ProtectedComponent>
                <TaskList />
              </ProtectedComponent>
            </>
          }
        />

        <Route
          path={clientRoutes.addTask}
          element={
            <>
              <ProtectedComponent>
                <AddTask />
              </ProtectedComponent>
            </>
          }
        />

        <Route
          path={`${clientRoutes.editTask}/:id`}
          element={
            <>
              <ProtectedComponent>
                <EditTask />
              </ProtectedComponent>
            </>
          }
        />

        <Route path={clientRoutes.register} element={<Register />} />
        <Route path={clientRoutes.login} element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
