const otpGenerator= require("otp-generator");
const OTP =require("../Models/Otp");
const User = require("../Models/User")
const bcrypt =require("bcrypt");



exports.sendOtp = async(req,res)=>{
    try{
        const email =req.body;
   
        const checkUserPresent = await User.findOne({email});

        ///if user already exist , then return a response
        if(checkUserPresent) {
            return res.status(401).json({
                success:false,
                message:'User already registered',
                success:true,
            })
        }
        var otp = otpGenerator.generate(6,{
            specialChars:false,
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
        });
        const isUnique=await OTP.findOne({otp:otp});
        while(!isUnique){
            otp=otpGenerator.generate(6,{
                specialChars:false,
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
            });
            isUnique=await OTP.findOne({otp:otp});
        }
        console.log("OTP is" + otp);
        const otpPayload = {
            email,otp
        };
        const otpBody = await OTP.create(otpPayload);
        console.log(otpBody);

        res.status(200).res({
            success:true,
            message:"OTP sent successfully",
            otp,
        })



        }
 
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }
    
}

exports.signUp=async (req,res)=>{
    try{
        const {
            firstName,
            lastName, 
            email,
            password,
            confirmPassword,
            accountType,
            contactNumber, 
            otp
        } = req.body;
        if(firstName || lastName || email || password || confirmPassword||accountType||contactNumber||otp){
              return res.status(500).json({
                success:false,
                message:"Passwords does not match",
            })
        }
        const alreadyRegistered =await User.findOne({email:email});
        if(alreadyRegistered){
            return res.status(500).json({
                success:false,
                message:"USER already registered",
            })
        }
        if(password!=confirmPassword){
            return res.status(500).json({
                success:false,
                message:"Passwords does not match",
            })
        }
        const confirmOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1);
        if(confirmOtp==0){
            return res.status(500).json({
                success:false,
                message:"can't find OTP at the server",
            })
        }
        if(confirmOtp!=otp){
            return res.status(500).json({
                success:false,
                message:"Incorrect OTP",
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const profileDetails = await Profile.create({
            gender:null,
            dateOfBirth: null,
            about:null,
            contactNumer:null,
        });

        const user = await User.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password:hashedPassword,
            accountType,
            additionalDetails:profileDetails._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstname} ${lastName}`,
        })
        return res.status(200).json({
            success:true,
            message:'User is registered Successfully',
            user,
        });
    }
    catch(err){
       res.status(404).json({
           success:false,

       })
    }
}


exports.login=async(req,res)=>{
    const {email,password} =req.body;
    const isUser = User.find({email},{password});
    if(!isUser){
        return res.status(404).json({
            success:true,
            message:"User not register, Try signing in",
        })
    }
    
}