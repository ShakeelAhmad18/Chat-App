import useConversation from "../zustand/useConversation"

const Conservation = ({conversation,emoji,lastidx}) => {

  const {selectedConversation,setSelectedConversation}=useConversation()
  const isSelected=selectedConversation?._id === conversation._id

  return (
    <>
       <div className={`flex py-1 p-2 items-center hover:bg-sky-500 rounded cursor-pointer ${isSelected ? 'bg-sky-500' : ''}`} onClick={()=>setSelectedConversation(conversation)}>
         <div className="avatar online">
             <div className="w-12 rounded-full">
             <img src={conversation.profilePic} />
             </div>
         </div>
         <div className="flex flex-col flex-1">
           <div className="flex ml-2 gap-3 justify-between">
             <p className="font-bold text-gray-600">{conversation.fullName}</p>
             <span className="text-xl">{emoji}</span>
           </div>
       </div>
       </div>
      {!lastidx && <div className="divider my-0 py-0 h-1"/> }
    </>
  )
}

export default Conservation
