//require pakages
const express=require('express');
const app=express();
const mongoose=require("mongoose");
const api_Holdfingo_Route=require('./routes/holdfingio');
const path=require('path')
const api_Ticker_Route=require('./routes/ticker');
// const api_ProductRoute=require('./API/product_API');


require('dotenv').config();



//mongoose connection
mongoose.connect('mongodb://localhost:27017/QuadB_Assignment',
{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on('error',(err)=>{
console.log(' error connecting with mongodb with'+ err)
});


mongoose.connection.on('connected',()=>{
console.log('mongodb is connected with server successfully')});

//middlewares
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static('Frontend'));
 app.use(express.static('public'));

 app.set('view engine','ejs');
 app.set('views',path.join(__dirname,'ejs'))

app.use(api_Holdfingo_Route);
app.use(api_Ticker_Route);
// app.use(api_ProductRoute);








app.listen(process.env.PORT,()=>{
    console.log(`server is successfully running on server ${process.env.Port}`)
})