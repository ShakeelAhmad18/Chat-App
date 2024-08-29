import Messages from "./Messages"
import MessagesInput from "./MessagesInput"
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const NoChatSelected=false;
  return (
    <div className="md:min-w-[450px] flex flex-col overflow-auto">
    {NoChatSelected ?  (<NoChatSelector/>) :
       <>
       <div className="px-4 py-2 mb-2 bg-slate-500">
        <span className="label-text">To:</span>
        <span className="">Shakeel Ahmad</span>
       </div>
       <Messages/>
       <MessagesInput/>
       </> }
    </div>
  )
}

export default MessageContainer


const NoChatSelector=()=>{
    return(
        <div className="flex w-full h-full items-center justify-center">
            <div className="p-4 text-center sm:text-sm md:text-xl text-gray-500 flex flex-col font-semibold items-center gap-2">
               <p>👏 Welcome Shakeel Ahmad ❄</p>
               <p>Selcet Chat to start Messaging</p>
               <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
    )
}


