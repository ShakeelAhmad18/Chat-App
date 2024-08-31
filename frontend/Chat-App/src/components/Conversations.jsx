import { useEffect, useState } from "react"
import useGetConversations from "../customHooks/useGetConversations"
import Conservation from "./Conservation"
import { generateFunEmoji } from "../utils/emoji"

const Conversations = () => {

  const [conversation,setConversation]=useState([])

  const {data}=useGetConversations()

  useEffect(()=>{
    if(data){
      setConversation(data)
    }
  },[data])

 
  return (
    <div className="flex py-2 flex-col overflow-auto">
      {conversation.map((conversation,index)=>(<Conservation conversation={conversation} key={index} lastidx={index == conversation.length - 1} emoji={generateFunEmoji}/>))}
    </div>
  )
}

export default Conversations
