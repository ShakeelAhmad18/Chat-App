import { useContext, useEffect } from "react"
import { SocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"

const useListenMessages = () => {
    const {socket}=useContext(SocketContext)
    const {messages,setMessages}=useConversation()
    
    useEffect(() => {
        const handleNewMessage = (newMessage) => {
            newMessage.shouldShake=true;
            setMessages([...messages, newMessage]);
        };

        socket?.on('newMessage', handleNewMessage);

        return () => {
            socket?.off('newMessage', handleNewMessage);
        };
    }, [socket, messages, setMessages]);
}

export default useListenMessages
