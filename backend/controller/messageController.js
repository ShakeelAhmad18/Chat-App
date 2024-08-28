const asyncHandler=require('express-async-handler');
const Conservation = require('../model/conservationModel');
const Message = require('../model/messageModel');

const sendMessage=asyncHandler( async (req,res)=>{
     const {message}=req.body;
     const {id:recieverId}=req.params;
     const senderId=req.user._id;

     let conservation=await Conservation.findOne({
        participants:{$all:[senderId,recieverId]}
     })

     if(!conservation){
         conservation=await Conservation.create({
            participants:[senderId,recieverId]
        })
     }
   
     //create message
     const newMessage=await Message.create({
         senderId,
         recieverId,
         message
     })

     if(newMessage){
        conservation.messages.push(newMessage._id)
     }

     //socket io functionality will be done here
     
     await conservation.save()
     res.status(201).json(newMessage)

} )

//get all messages

const getMessages=asyncHandler( async (req,res)=>{
   const {id:userToChat}=req.params;
   const senderId=req.user._id;

   const conservation=await Conservation.findOne({
     participants:{$all:[senderId,userToChat]}
   }).populate('messages')

   if(!conservation){
    res.status(200).json([])
   }

  res.status(200).json(conservation.messages)

} )


module.exports={
    sendMessage,
    getMessages
}

