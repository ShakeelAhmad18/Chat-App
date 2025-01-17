import { useContext, useEffect } from "react";
import useConversation from "../zustand/useConversation";
import Messages from "./Messages";
import MessagesInput from "./MessagesInput";
import { TiMessages } from "react-icons/ti";
import { AuthContext } from "../context/authContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { authUser } = useContext(AuthContext);

  useEffect(() => {
    // Cleanup function
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col h-full">
      {!selectedConversation ? (
        <NoChatSelector authUser={authUser} />
      ) : (
        <>
          <div className="px-4 py-2 bg-slate-500">
            <span className="label-text">To:</span>
            <span>{selectedConversation.fullName}</span>
          </div>
          <div className="flex-1 overflow-auto px-4">
            <Messages />
          </div>
          <div className=" px-4 py-2">
            <MessagesInput />
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelector = ({ authUser }) => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="p-4 text-center sm:text-sm md:text-xl text-gray-500 flex flex-col font-semibold items-center gap-2">
        <p>👏 Welcome {authUser.data.fullName} ❄</p>
        <p>Select Chat to start Messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
