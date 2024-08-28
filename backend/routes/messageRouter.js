const express=require('express');
const { sendMessage, getMessages } = require('../controller/messageController');
const protector = require('../middleware/protectRoute');

const router=express.Router()

router.post('/send/:id',protector,sendMessage)
router.get('/:id',protector,getMessages)



module.exports=router;