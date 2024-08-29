import axios from "axios"
import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { AuthContext } from "../context/authContext"

const useSignUp = () => {
     const [isLoading,setisLoading]=useState(false)
     const {setAuthUser}=useContext(AuthContext)

    const signup=async ({fullName,userName,password,confirmPassword,gender})=>{

            if(!fullName || !userName || !password || !confirmPassword || !gender){
                return toast.error('fill all the fields')
            }
    
            if(password !== confirmPassword){
               return toast.error('Confirm Passowrd does not Match')
            }
    
            if(password.length < 6){
              return  toast.error('Password Must be 6 character')
            }
          
          setisLoading(true)
           try {
            const data=await axios.post('http://localhost:5000/api/auth/signUp',{fullName,userName,password,confirmPassword,gender})
            localStorage.setItem('chat-user',JSON.stringify(data))
            setAuthUser(data)
          
           } catch (error) {
            console.log(error.message)
           }finally{
            setisLoading(false)
           }
        
        }

        return {signup,isLoading}

}

export default useSignUp
