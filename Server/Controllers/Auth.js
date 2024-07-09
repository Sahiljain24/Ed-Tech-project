
exports.sendOtp = async(req,res)=>{
    try{
        const email =req.body;
   
        const checkUserPresent = await User.findOne({email});

        ///if user already exist , then return a response
        if(checkUserPresent) {
            return res.status(401).json({
                success:false,
                message:'User already registered',
                success:true;
            })
        }
        }
    }
    catch{
        console.log("Could not send OTP");
        error:
    }
    
}