const express=require('express');
const { sendMessage, getMessages } = require('../controller/messageController');
const protecter = require('../middleware/protectRoute');

const router=express.Router()

router.post('/send/:id',protecter,sendMessage)
router.get('/:id',protecter,getMessages)



module.exports=router;