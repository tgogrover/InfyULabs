const express= require('express');
const router=express.Router();
const {ticker}=require('../controlllers/tickerAPI')

router.post('/api/ticker',ticker)

module.exports=router;