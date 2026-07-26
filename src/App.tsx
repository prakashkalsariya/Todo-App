import "./App.css";
import { Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { clientRoutes } from "./utils/routes.ts";
import EditTask from "./components/EditTask.tsx";
import Register from "./components/Register.tsx";
import Login from "./components/Login.tsx";
import NotFound from "./components/NotFound.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={clientRoutes.taskList} element={<TaskList />} />
        <Route path={clientRoutes.addTask} element={<AddTask />} />
        <Route path={`${clientRoutes.editTask}/:id`} element={<EditTask />} />
        <Route path={clientRoutes.register} element={<Register />} />
        <Route path={clientRoutes.login} element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
