const mongoose = require("mongoose");
const { type } = require("os");

const courseSchema = mongoose.Schema({

     name:{
        type:String,
         require:true,
     },
     description:{
        type:Date,
        require:true,
     },
     instructor:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,

     },
     whatWillYouLearn:{
        type:String,
        require:true,
     },
     courseContent:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,

     },
     ratingAndReview:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
     },
     price:{
        tyoe:String,
        require:true,
     },
     thumbnail:{
        type:String,
        require:true,
     },
     tags:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
     },
     studentEnrolled:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
     }

    
})

module.exports= mongoose.model("Profile",profileSchema);