const mongoose = require("mongoose");
const { type } = require("os");

const profileSchema = mongoose.Schema({

     gender:{
        type:String,
        enum:["Male","Female","Others"],
     },
     dateOfBirth:{
        type:Date,
     },
     about:{
        type:String,

     },
     phoneNumber:{
        type:String,
     }
    
})

module.exports= mongoose.model("Profile",profileSchema);