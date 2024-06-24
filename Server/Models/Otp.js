const mongoose = require("mongoose");
 
const otpSchema = mongoose.Schema({

     email:{
        type:String,
         require:true,
         trim:true,
     },
     createdAt:{
        type:Date.now(),
        require:true,
     },
     otp:{
        
     }
     
    
})

module.exports= mongoose.model("Section",sectionSchema);