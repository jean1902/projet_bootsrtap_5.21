const express = require("express");
 router = express.Router();
  

 router.get("/profile_sylvia" ,(req,res)=>{
     res.render("../views/profile_sylvia")
 })
 
 module.exports=router