import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useSignIn from "../customHooks/useSignIn"
import Spinner from '../components/Spinner'

const Login = () => {
   const navigate=useNavigate();
  const [input,setInput]=useState({
    userName:'',
    password:''
  })

  const {signIn,isLoading}=useSignIn()
  
  if(isLoading) return <Spinner/>


  async function handleSubmit(e){
    e.preventDefault()
    signIn(input)
    setInput({})
    navigate('/')
  }


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-green-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-center text-xl text-black font-semibold ">Login</h1>
        <span className="text-blue-400">Chat App</span>
        <form onSubmit={handleSubmit}>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input type="text" placeholder="Enter Username..." value={input.userName} onChange={(e)=>setInput({...input,userName:e.target.value})} className="w-full input input-bordered"/>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input type="password" value={input.password} onChange={(e)=>setInput({...input,password:e.target.value})} placeholder="Enter Password..." className="w-full input input-bordered"/>
            <div>
                <button className="btn btn-sm btn-block mt-4">Login</button>
            </div>
            <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Don&apos;t have an account</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
