import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const useGetConversations = () => {
   
       const {data}=useQuery({
           queryKey:['conversations'],
           queryFn:async ()=>{
               const res=await axios.get('http://localhost:5000/api/auth/getuser',{withCredentials:true})
               return res.data;
           }
       })

       return {data}
}

export default useGetConversations
