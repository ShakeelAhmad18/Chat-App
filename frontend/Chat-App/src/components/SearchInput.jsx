import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useConversation from "../zustand/useConversation";
import useGetConversations from "../customHooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
 const {setSelectedConversation}= useConversation()
const {data:conversations}= useGetConversations()

  const [search,setSearch]=useState('')
   
   const handleSubmit= (e)=>{
    e.preventDefault();

    if(!search) return;

    if(search.length < 3){
      return toast.error('Write at least three charaters')
    }

    const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch('')
    }else return toast.error('User not Found')
   
   }


   
  return (
    <form className="flex items-center gap-2 p-2" onSubmit={handleSubmit}>
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search..." className="input file-input-bordered rounded-full"/>
      <button type="submit" className="btn btn-circle bg-sky-500 text-white"><IoIosSearch className="w-6 h-6 outline-none" /></button>
    </form>
  )
}

export default SearchInput
