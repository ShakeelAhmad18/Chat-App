import axios from "axios"
import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { AuthContext } from "../context/authContext"

const useLogout = () => {
    const [isLoading,setIsLoading]=useState(false)
    const {setAuthUser}=useContext(AuthContext)

    const logOut=async ()=>{

        setIsLoading(true)
         try {
           const response=await axios.get('http://localhost:5000/api/auth/logout')
           const message = response.data.message || "Logout successful!";
           toast.success(message)
           localStorage.removeItem('chat-user')
           setAuthUser(null);

         } catch (error) {
             toast.error(error.message)
         }finally{
             setIsLoading(false)
         }
       }
     
       return {logOut,isLoading}
}

export default useLogout


