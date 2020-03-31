//importing all the necessary files
const express=require('express');
const router=express.Router();

// Setting router path
router.use('/v1',require('./v1'));

// Exporting router
module.exports=router;