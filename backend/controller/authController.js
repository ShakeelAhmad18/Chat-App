const asyncHandler=require('express-async-handler');
const User = require('../model/userModel');
const generateTokenandSetCookie = require('../utils/generateToken');
const bcrypt=require('bcryptjs');
const { sign } = require('jsonwebtoken');

//signIn Controller

const signUp=asyncHandler(async (req,res)=>{
  const {fullName,userName,password,confirmPassword,gender}=req.body;

  //check password
   if(password !== confirmPassword){
    return res.status(400).json('Confirm Does not match')
   }


   //check userName exist or not
   const user=await User.findOne({userName})
   if(user){
    return res.status(400).json('User Already Exist')
   }

   //hashed password;

   boysPic=`https://avatar.iran.liara.run/public/boy?username=${userName}`
   girlPic=`https://avatar.iran.liara.run/public/girl?username=${userName}`


   const newUser=await User.create({
     fullName,
     userName,
     password,
     gender,
     profilePic:gender === 'male' ? boysPic : girlPic
   })

   generateTokenandSetCookie(newUser._id,res)

   res.status(201).json(newUser)

})


//login user

const logIn=asyncHandler( async (req,res)=>{
    const {userName,password}=req.body;

    const user=await User.findOne({userName})
    const passwordIsCorrect=await bcrypt.compare(password,user?.password || '')

    if(!user && !passwordIsCorrect){
       return res.status(401).json('Invlid Credientials')
    }

   generateTokenandSetCookie(user._id,res)
   res.status(200).json({
    fullName:user.fullName,
    userName:user.userName,
    profilePic:user.profilePic,
   })

} )


//logout the user

const logout=asyncHandler( async (req,res)=>{

    res.cookie('jwt',"",{maxAge:0})

    res.status(200).json('Sucessfully Logout')
} )


//get user for sidebar
const getUserForSidebar=asyncHandler( async (req,res)=>{

  const {loginUserId}=req.user._id;
  const filterUsers=await User.find({_id:{$ne:loginUserId}}).select('-password')
 
  res.status(200).json(filterUsers)
  

} )




module.exports={
    signUp,
    logIn,
    logout,
    getUserForSidebar
}
