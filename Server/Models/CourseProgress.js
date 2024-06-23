const mongoose = require("mongoose");
 

const courseProgress = mongoose.Schema({

     courseID:{
        type:String,
     },
     completedVideos:{
        type:mongoose.Schema.Types.ObjectId,
     }
})

module.exports= mongoose.model("CourseProgress",courseProgress);