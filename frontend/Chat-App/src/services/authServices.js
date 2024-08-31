import axios from "axios";
import toast from "react-hot-toast";


export const loginUser=async (formData)=>{
    try {
      const res=await axios.post('http://localhost:5000/api/guest/login',formData)

      if(res.statusText === 'OK'){
         toast.success('Login Sucessfully')
      }
      
     return res.data;
 
    } catch (error) {
 
     const message=(error.response && error.response.data && 
         error.response.data.message) || error.message || error.toString();
 
         toast.error(message)
    }
 }
 