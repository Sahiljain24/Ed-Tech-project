const mongoose = require("mongoose");
 

const ratingAndReviewSchema = mongoose.Schema({

     user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
         
     },
     rating:{
        type:String,

     },
     review:{
        type:String,

     },
     
    
})

module.exports= mongoose.model("RatingAndReview",ratingAndReviewSchema);