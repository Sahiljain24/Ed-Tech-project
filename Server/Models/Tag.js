const mongoose = require("mongoose");
const { type } = require("os");
const Subsection = require("./Subsection");

const tagsSchema = mongoose.Schema({

     name:{
        type:String,
         require:true,
     },
     description:{
        type:String,
        require:true,
     },
     course:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
     }
    
})

module.exports= mongoose.model("Tags",tagsSchema);