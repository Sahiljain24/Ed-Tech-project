const mongoose = require("mongoose");
const { type } = require("os");
const { title } = require("process");

const subsectionSchema = mongoose.Schema({
     title:{
        type:String,
        require:true,
     },
     time_duration:{
        type:TimeRanges,
        require:true,
     },
     description:{
        type:String,
        require:true,
     },
     videoURL:{
        type:String,
        require:true,
     },
     
    
})

module.exports= mongoose.model("User",userSchema);