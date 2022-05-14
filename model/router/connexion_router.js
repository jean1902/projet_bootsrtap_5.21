const express = require("express");
 router = express.Router();
 const bodyParser =require('body-parser')
 const data =require('../Public/BD/database')
 let jsonParser = bodyParser.json();
 let urlencodedParser = bodyParser.urlencoded({ extended: false });

 router.get("/connexion" ,(req,res)=>{
     res.render("../views/connexion")
 })

 

 router.post("/connexion" ,urlencodedParser,(req,res )=>{
    console.log('hello')
      
     console.log("req.body",req.body);
     let {email_user,password_user} = req.body
     console.log(req.body.email_user)
     console.log(req.body.password_user)
 
   let req_verif_exist_email = ' SELECT Email ,Password FROM etudiant_musique WHERE Email = ? AND SELECT Password FROM etudiant_musique WHERE Email = ? WHERE Password=?'
  //  let req_verif_password_user ='  SELECT Password FROM etudiant_musique WHERE Password = ? '
    
  
   data.query(  req_verif_exist_email ,[email_user,password_user],(err,result) =>{
   
       if(result == ""){

          console.log('un user connnecter')
       
         }else{
          
            console.log('mot de pass incorrect ou username incorrect ')
       }
     });
   
  })
 
 
 module.exports=router