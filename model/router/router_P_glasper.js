const express = require("express");
 router = express.Router();
  

 router.get("/profile_glasper" ,(req,res)=>{
     res.render("../views/profile_glasper")
 })
 
 module.exports=router