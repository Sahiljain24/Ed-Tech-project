const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = mongoose.Schema({

    firstName:{
        type:String,
        require:true,
        trim:true,
    },
    lastName:{
        type:String,
        require:true,
        trim:true,

    },
    email:{
        type:String,
        require:true,
        trim:true,

    },
    password:{
        type:String,
        require:true,
    },
    confirmPassword:{
        type:String,
        require:true,
    },
    accountType:{
        type:String,
        Enum:["Student","Admin","Instructor"],
        require:true,
    },
    addtionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"Profile"
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"Course"
    },
    image:{
        type:String,
        require:true,
    },
    courseProgress:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"CourseProgress"
    }
})

module.exports= mongoose.model("User",userSchema);