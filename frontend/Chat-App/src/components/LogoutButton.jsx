import { CiLogout } from "react-icons/ci";
import useLogout from "../customHooks/uselogout";
import Spinner from "./Spinner";

const LogoutButton = () => {

   const {logOut,isLoading}=useLogout()

   if(isLoading) return <Spinner/>

  return (
    <div className="mt-auto">
     {<CiLogout className="w-6 h-6 text-red-700 cursor-pointer hover:text-sky-700" onClick={logOut}/>}
    </div>
  )
}

export default LogoutButton
