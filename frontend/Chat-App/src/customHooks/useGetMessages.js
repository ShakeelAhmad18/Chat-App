import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"
import axios from "axios"

const useGetMessages = () => {
   const [isLoading,setIsLoading]=useState(false)
   const {messages,setMessages,selectedConversation}=useConversation()
   
   useEffect(()=>{
    
         const getMessages=async ()=>{
            setIsLoading(true)

            try{
            const res=await axios.get(`http://localhost:5000/api/messages/${selectedConversation._id}`)
            const data=res.data;
            setMessages(data)

         }catch (error) {
            toast.error(error.message)
          }finally{
            setIsLoading(false)
          }
      } 
       if(selectedConversation?._id) getMessages()

   },[selectedConversation,setMessages])
   
   return {messages,isLoading}
}

export default useGetMessages
