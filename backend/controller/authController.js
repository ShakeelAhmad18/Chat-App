const asyncHandler=require('express-async-handler');
const User = require('../model/userModel');
const bcrypt=require('bcryptjs');
const { sign } = require('jsonwebtoken');
const jwt=require('jsonwebtoken')

//signIn Controller

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1d" })
}

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

   const token=generateToken(newUser._id)

   res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });
    
  if(newUser){
    const {_id,fullName,userName,gender,password}=newUser;
    res.status(201).json({
      _id,
      fullName,
      userName,
      gender,
      password,
      token
    })
  }

})


//login user

const logIn = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  // Find the user by userName
  const user = await User.findOne({ userName });

  // Check if user exists and password is correct
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json('Invalid Credentials');
  }

  // Generate token
  const token = generateToken(user._id);

  // Set the cookie with the token
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  // Respond with user details and token
  res.status(200).json({
    id:user._id,
    fullName: user.fullName,
    userName: user.userName,
    profilePic: user.profilePic,
    token
  });
});



//logout the user

const logout=asyncHandler( async (req,res)=>{

    res.cookie('token','',{
      path:'/',
      httpOnly:true,
      expires:new Date(0),
      sameSite:"none",
      secure:true
    })

    res.status(200).json('Sucessfully Logout')
} )


//get user for sidebar
const getUserForSidebar = asyncHandler(async (req, res) => {
  try {
    const loginUserId = req.user._id;

    const filterUsers = await User.find({ _id: { $ne: loginUserId } }).select('-password');

    res.status(200).json(filterUsers);

  } catch (error) {
    console.error('Error in getUserForSidebar:', error); 
    res.status(500).json({ message: 'Error fetching users', error: error.message }); 
  }
});




module.exports={
    signUp,
    logIn,
    logout,
    getUserForSidebar
}
