//importing all the necessary files
const express=require('express');
const router=express.Router();

console.log('Router loaded');

// Setting router path
router.use('/api',require('./api'));

//exporting the router
module.exports=router;
