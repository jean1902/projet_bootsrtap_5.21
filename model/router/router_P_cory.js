const express = require("express");
 router = express.Router();
  

 router.get("/profile_cory" ,(req,res)=>{
     res.render("../views/profile_cory")
 })
 
 module.exports=router