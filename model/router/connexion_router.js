const express = require("express");
 router = express.Router();
  

 router.get("/connexion" ,(req,res)=>{
     res.render("../views/connexion")
 })
 
 module.exports=router