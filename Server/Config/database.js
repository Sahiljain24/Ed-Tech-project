const mongoose = require("mongoose");

require(dotenv);

exports.dbconnect=()=>{

    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
     }).then(()=>(console.log("Successfull connected to Database")))
     .catch((error)=>{
        console.error(error);
        console.log('DATABASE connection failed');
        process.exit(1);
     })

}

