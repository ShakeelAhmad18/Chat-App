import SignUp from "./pages/SignUp"

import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { Toaster } from "react-hot-toast"
import { useContext } from "react"
import { AuthContext } from "./context/authContext"
import axios from "axios"

  axios.defaults.withCredentials=true;

function App() {
  const {authUser}=useContext(AuthContext)
  return (
   <div className="p-4 flex h-screen text-center justify-center">
   
    <Routes>
      <Route path="/" element={authUser ? <Home/> : <Navigate to='/login' />}/>
      <Route path="/login" element={authUser ? <Navigate to='/' /> :  <Login/>}/>
      <Route path="/signup" element={authUser ? <Navigate to='/' /> : <SignUp/>}/>
    </Routes>
    <Toaster position="top-center" reverseOrder={false}/>
  
   </div>
  )
}

export default App
