
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Task from './page/Task'
import Signup from './page/Signup'

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/task" element={<Task />} />
    </Routes>
    </>
  )
}

export default App
