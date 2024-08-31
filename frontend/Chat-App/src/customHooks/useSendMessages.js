import axios from "axios";
import useConversation from "../zustand/useConversation"
import { useState } from "react";
import toast from "react-hot-toast";

const useSendMessages = () => {

    const {selectedConversation,messages,setMessages}=useConversation();
    const [isLoading,setIsLoading]=useState(false)
    
    const sendMessage=async (message)=>{
        setIsLoading(true)
        try {
        
          const res=await axios.post(`http://localhost:5000/api/messages/send/${selectedConversation._id}`,{message})
          const data=res.data;

          setMessages([...messages,data])
           
        } catch (error) {
            toast.error(error.message)
        }finally{
         setIsLoading(false)
        }

    }

    return {sendMessage,isLoading}
}

export default useSendMessages
