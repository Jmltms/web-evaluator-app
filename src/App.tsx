import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Task from "./page/Task";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/task" element={<Task />} />
        <Route
          path="*"
          element={<p className="text-xl text-center mt-10">Page not found.</p>}
        />
      </Routes>
    </>
  );
}

export default App;
