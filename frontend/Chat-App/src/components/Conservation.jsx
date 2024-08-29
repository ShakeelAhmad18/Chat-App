
const Conservation = () => {
  return (
    <>
       <div className="flex py-1 p-2 items-center hover:bg-sky-500 rounded cursor-pointer">
         <div className="avatar online">
             <div className="w-12 rounded-full">
             <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
             </div>
         </div>
         <div className="flex flex-col flex-1">
           <div className="flex ml-2 gap-3 justify-between">
             <p className="font-bold text-gray-600">Shakeel Ahmad</p>
             <span className="text-xl">😋</span>
           </div>
       </div>
       </div>
       <div className="divider my-0 py-0 h-1"/>
    </>
  )
}

export default Conservation
