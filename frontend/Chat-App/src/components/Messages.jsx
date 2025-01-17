import useGetMessages from "../customHooks/useGetMessages"
import useListenMessages from "../customHooks/useListenMessages"
import Message from "./Message"
import Skeletons from "./Skeletons"

const Messages = () => {
  const {messages,isLoading}= useGetMessages()
  useListenMessages();

  return (
    <div className="px-4 flex flex-col overflow-auto">
      {isLoading && [...Array(3)].map((_,index)=><Skeletons key={index}/>)}
      {!isLoading && messages.length > 0 && messages.map((message)=><Message message={message} key={message._id}/>)}
      {!isLoading && messages.length === 0 && (<p className="text-center">Send the Message to start the conversation</p>)}
    </div>
  )
}

export default Messages
