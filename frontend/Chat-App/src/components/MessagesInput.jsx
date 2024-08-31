import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessages from "../customHooks/useSendMessages";


export default function MessagesInput() {

  const [message,setMessage]=useState('');
  const {sendMessage,isLoading}=useSendMessages()

  const handleSubmit=async (e)=>{

    e.preventDefault()
    if(!message) return;
    await sendMessage(message)
    setMessage('')

  }

  return (
    <form className="absolute bottom-0 w-[100px] md:w-[450px] right-0 px-4 my-3 " onSubmit={handleSubmit}>
      <div className="w-full relative">
         <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white" placeholder="Send a Message" />
         <button type='submit' className='absolute inset-y-0 end-0 items-center pe-3'>
          { isLoading ? <div className="loading loading-spinner "/> : <BsSend/> }
          </button>
      </div>
    </form>
  )
}
