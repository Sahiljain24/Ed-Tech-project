const otpGenerator= require("otp-generator");
const OTP =require("../Models/Otp");





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

exports.signUp=(req,res)=>{
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
    }
    catch(err){
       res.status(404).json({
           success:false,
           
       })
    }
}