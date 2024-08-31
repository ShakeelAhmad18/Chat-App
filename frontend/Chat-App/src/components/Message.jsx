import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import useConversation from "../zustand/useConversation"

const Message = ({message}) => {

  const {authUser}=useContext(AuthContext)
  const {selectedConversation}=useConversation();
  const fromMe=message?.senderId === authUser.data.id
  const profilePic=fromMe ? authUser.data.profilePic : selectedConversation?.profilePic
  const bubbleColor=fromMe ? 'bg-blue-500' : ''


  return (
    <div className={`chat ${fromMe ? 'chat-end' : 'chat-start'}`}>
      <div className="chat-image avatar">
         <div className="w-10 rounded-full">
         <img
           alt="Tailwind CSS chat bubble component"
           src={profilePic} />
         </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 ${bubbleColor}`}>{message?.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{new Date(message.createdAt).toLocaleTimeString()}</div>
    </div>
  )
}

export default Message
