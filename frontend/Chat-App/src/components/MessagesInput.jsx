import { BsSend } from "react-icons/bs";

export default function MessagesInput() {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
         <input type="text" className="text-sm border rounded-lg block w-full p-2.5 border-gray-700 bg-gray-600 text-white" placeholder="Send a Message" />
         <button type='submit' className='absolute inset-y-0 end-0 items-center pe-3'><BsSend/></button>
      </div>
    </form>
  )
}
