const mongoose=require('mongoose');

//defining the schema
var TikerSchema=new mongoose.Schema({
   // name, last, buy, Sell, volume, base_unit of 
    name:{
        type:String,
        required:true,
      
    },
    last:{
        type:String,
       required:true,
       
    },
    buy:{
        type:String,
       required:true,
        
    }, 
    sell:{
        type:String,
       required:true,
       
    },
    volume:{
        type:String,
       required:true,
       
    },
    base_unit_of:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date
    }
});


//exporting Tiker model
module.exports=mongoose.model('tiker',TikerSchema)