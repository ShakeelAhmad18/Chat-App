const express=require('express')
const router=express.Router()
const asyncHandler=require('express-async-handler');
const { signIn, signUp, logIn, logout, getUserForSidebar } = require('../controller/authController');
const protecter = require('../middleware/protectRoute');

router.post('/signUp',signUp)
router.post('/logIn',logIn)
router.get('/logout',logout)
router.get('/getUser',protecter,getUserForSidebar)

module.exports=router;