const jwt=require('jsonwebtoken')

const generateTokenandSetCookie=async (userId,res)=>{
  const token=jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn:'1d'
  })

  res.cookie('jwt',token,{
    maxAge:15 * 24 * 60 * 60,
    httpOnly:true,
    sameSite:'strict',
    secure:process.env.NODE_ENV !== 'development'
  })

}

module.exports=generateTokenandSetCookie;
