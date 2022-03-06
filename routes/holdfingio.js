const express= require('express');
const router=express.Router();
const {test}=require('../controlllers/holdfingo')

router.get('/api/holdfingo',test)

module.exports=router;