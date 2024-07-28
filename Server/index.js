// const express = require("express");
// const app = express();
// require("dotenv");

//  app.get("/",homePage);

 let str = "this is a sunday";

 const newSTR= str.split(" ").map(element => 
    (element.charAt(0).toUpperCase()+element.slice(1))).join(" ")
 ;

 console.log(newSTR);