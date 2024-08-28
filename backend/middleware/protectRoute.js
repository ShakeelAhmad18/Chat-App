const asyncHandler = require('express-async-handler')
const jwt=require('jsonwebtoken')
const User = require('../model/userModel')

const protector=asyncHandler( async (req,res,next)=>{
   const token=req.cookies.jwt

   if(!token){
     return res.status(401).json('Unathorized User')
   }
    
   const decoded=jwt.verify(token,process.env.JWT_SECRET)
   if(!decoded){
    return res.status(401).json('Unathorized User')
   }

  const user=await User.findById(decoded.userId).select('-password')
  if(!user){
    res.status(404).json('User not found')
  }
   
   req.user=user;
   next()
})


module.exports=protector;