import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessages from "../customHooks/useSendMessages";

export default function MessagesInput() {
  const [message, setMessage] = useState('');
  const { sendMessage, isLoading } = useSendMessages();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage('');
  };

  return (
    <form className="w-full px-4 py-3" onSubmit={handleSubmit}>
      <div className="relative flex items-center">
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          className="flex-1 border text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 text-white" 
          placeholder="Send a Message" 
        />
        <button type='submit' className='absolute right-2'>
          {isLoading ? <div className="loading loading-spinner" /> : <BsSend />}
        </button>
      </div>
    </form>
  );
}
