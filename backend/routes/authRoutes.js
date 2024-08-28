const express=require('express')
const router=express.Router()
const asyncHandler=require('express-async-handler');
const { signIn, signUp, logIn, logout, getUserForSidebar } = require('../controller/authController');
const protector = require('../middleware/protectRoute');

router.post('/signUp',signUp)
router.post('/logIn',logIn)
router.get('/logout',logout)
router.get('/getUser',protector,getUserForSidebar)

module.exports=router;