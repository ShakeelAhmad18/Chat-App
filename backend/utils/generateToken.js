const jwt=require('jsonwebtoken')

const generateTokenandSetCookie=async (userId)=>{
  const token=jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn:'1d'
  })

 

}

module.exports=generateTokenandSetCookie;
