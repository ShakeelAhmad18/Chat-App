import { Link } from "react-router-dom"
import GenderCheckBox from "../components/GenderCheckBox"
import { useState } from "react"
import useSignUp from "../customHooks/useSignUp"
import Spinner from "../components/Spinner"

const SignUp = () => {

  const [input,setInput]=useState({
    fullName:'',
    userName:'',
    gender:'',
    password:'',
    confirmPassword:''
  })

 const {signup,isLoading}= useSignUp();

 if(isLoading) return <Spinner/>

  const handleCheckBoxChange=(gender)=>{
    setInput({...input,gender})
  }

  async function handleSubmit(e){
    e.preventDefault();
    await signup(input)
    setInput({})
  }
  

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto overflow-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-green-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-center text-xl text-black font-semibold ">Sign Up</h1>
        <span className="text-blue-400">Chat App</span>
        <form onSubmit={handleSubmit}>
            <label className="label p-2">
              <span className="label-text text-base">Full Name</span>
            </label>
            <input type="text" placeholder="Enter Fullname..." value={input.fullName} onChange={(e)=>setInput({...input,fullName:e.target.value})} className="w-full input input-bordered"/>
            <label className="label p-2">
              <span className="label-text text-base">User Name</span>
            </label>
            <input type="text" placeholder="Enter Username..." value={input.userName} onChange={(e)=>setInput({...input,userName:e.target.value})} className="w-full input input-bordered"/>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input type="password" placeholder="Enter Password..." value={input.password} onChange={(e)=>setInput({...input,password:e.target.value})} className="w-full input input-bordered"/>
            <label className="label p-2">
              <span className="label-text text-base">Confirm Password</span>
            </label>
            <input type="password" placeholder="Enter Password..." value={input.confirmPassword} onChange={(e)=>setInput({...input,confirmPassword:e.target.value})} className="w-full input input-bordered"/>
             <GenderCheckBox handleCheckBoxChange={handleCheckBoxChange} selectedGender={input.gender}/>
            <div>
                <button className="btn btn-sm btn-block mt-4">Sign Up</button>
            </div>
            <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account</Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp
