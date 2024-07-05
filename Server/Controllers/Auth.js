
exports.sendOtp = async(req,res)=>{
    try{
        const email =req.body;
        const isAlreadyPresent = app.findOne(email);
        if(!isAlreadyPresent){
            console.log("user already Present");
            res.json({

            })
        }
    }
    catch{

    }
}