const mongoose = require("mongoose");
const { type } = require("os");
const Subsection = require("./Subsection");

const sectionSchema = mongoose.Schema({

     name:{
        type:String,
         require:true,
     },
     subsection:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
     },
     
    
})

module.exports= mongoose.model("Section",sectionSchema);