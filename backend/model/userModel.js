const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const userSchema=mongoose.Schema(
    {
        fullName:{
            type:String,
            required:[true,'Add full Name']
        },
        userName:{
            type:String,
            required:[true,'Add Your name'],
            unique:true
        },
        password:{
            type:String,
            required:true,
            minLength:6
        },
        gender:{
          type:String,
          required:true,
          enum:['male','female']
        },
        profilePic:{
            type:String,
            default:'https://avatar.iran.liara.run/public/boy'
        }
    },
    {
        timestamps:true
    }
)

userSchema.pre("save",async function(next){
    if(!this.isModified('password')){
     next()
    }
 
     const salt=await bcrypt.genSalt(10)
     const hashedPassowrd=await bcrypt.hash(this.password,salt)
     this.password = hashedPassowrd;
     next()
 })
 


const User=mongoose.model('User',userSchema);

module.exports=User;