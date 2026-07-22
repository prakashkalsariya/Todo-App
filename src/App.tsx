// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import List from "./components/TaskList";
import TaskList from "./components/TaskList";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<TaskList />} />
      </Routes>
    </>
  );
}

export default App;
