import axios from 'axios'
import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../context/authContext'


const useSignIn = () => {
   const [isLoading,setIsLoading]=useState(false)
   const {setAuthUser}= useContext(AuthContext)

   const signIn=async ({userName,password})=>{

        if(password.length < 6){
            toast.error('Password Must be 6 character')
        }

        setIsLoading(true)
        try {
            const data=await axios.post('http://localhost:5000/api/auth/logIn',{userName,password})

             localStorage.setItem('chat-user',JSON.stringify(data))
             setAuthUser(data)

             if(data.error){
                toast.error(data.error)
             }

             if(data.statusText === 'OK'){
                toast.success('Login Sucessfully')
             }


        } catch (error) {
            console.log(error.message)
        }finally{
            setIsLoading(false)
        }
   }

   return {signIn,isLoading}
}

export default useSignIn
