const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()
const authRoute=require('./routes/authRoutes')
const messageRoute=require('./routes/messageRouter')
const cookieParser=require('cookie-parser')
const cors=require('cors')

const app=express();

const port=5000;

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin:['http://localhost:5173'],
  credentials:true
}))


mongoose.connect(process.env.MONGOURI).then(()=>{
    app.get('/',(req,res)=>{
      res.send('Home page')
    })
})


//middleWare;

app.use('/api/auth',authRoute)
app.use('/api/messages',messageRoute)


app.listen(port,(req,res)=>{
   console.log(`server is running on port ${port}`)
})
