const ticker=require('../models/tikersModel');





exports.test=async(req,res)=>{
    try{
       
        const tickers=await ticker.find({}).exec()
        if(tickers){
            res.render('holdfingo',{data:tickers})

        }

      
}catch(err){ 
    res.json({
        err
    })   
}
}