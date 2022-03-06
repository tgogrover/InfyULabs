const tickerModel=require('../models/tikersModel');

exports.ticker=(req,res)=>{
    console.log(req.body);
    
        tickerModel.insertMany(req.body).then((tikers)=>{
            console.log(tikers)
            res.status(201).json({
                tikers
            })

        }).catch((err)=>{
            console.log(err)
            res.status(400).json({
                err
            })

        })
};