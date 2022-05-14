const express = require("express");
 router = express.Router();
  

 router.get("/jazz_course" ,(req,res)=>{
     res.render("../views/jazz_course")
 })
 
 module.exports=router