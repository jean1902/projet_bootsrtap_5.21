const express = require("express");
const router = express.Router();
const db =require('../Public/BD/database')
const bodyParser =require('body-parser');
let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: false });
const { body,validationResult}=require('express-validator'); 

 router.get("/inscription" ,(req,res)=>{
   console.log('hello')
     res.render("../views/inscription" ,{alert:{}})
 })


 router.post("/" ,urlencodedParser,(req,res )=>{
   
  let {nom,prenom,email,password,date_naissance} =req.body
    console.log("les donnees du formulaire ");
  

      // let sql ="INSERT INTO `etudiant_musique` (`Nom`, `Prenom`, `Email`, `Password`, `date_naissance`) VALUES (?,?,?,?,?)";
      // db.query(
      //   sql,
      //   [nom, prenom, email, password, date_naissance],
      //   (err, result) => {
      //     console.log("bonjour ");
      //     if (err) {
      //       console.log("ERREUR", err);
      //       // res.send('bonjour')
      //     } else {
      //       console.log("success", result);
      //       res.redirect("data");
      //     }
      //   }
      // );
  
  })

 
// router.post("/inscription",[

//   body('nom')
//   .not()
//   .isEmpty()
//   .trim()
//   .escape()
//   .bail()
//   .withMessage('Nom ne peut pas être vide')
//   .isLength({min:5 , max:20})
//   .withMessage('Minimun 5 caractères obligatoires')
//       ,
      
//   body('prenom')
//   .not()
//   .isEmpty()
//   .trim()
//   .escape()
//   .bail()
//   .withMessage('Nom ne peut pas être vide')
//   .isLength({min:5 , max:10})
//   .withMessage('Minimun 5 caractères obligatoires')
//   ,
//   body('email')
//   .isEmail()
//   .isEmpty()
//   .trim()
//   .escape()
//   .bail()
//   .withMessage('Nom ne peut pas être vide'),
//   body('date_naissance')
//   .not()
//   .isEmpty()
//   .trim()
//   .escape()
//   .bail()
//   .withMessage('Nom ne peut pas être vide')
//   .isLength({min:5 , max:10})
//   .withMessage('Minimun 5 caractères obligatoires')
//   ,
//   body('password')
//   .isEmail()
//   .isEmpty()
//   .trim()
//   .escape()
//   .bail()
//   .withMessage('password ne peut pas être vide'),
//   body('date_naissance')
//   .not()
//   .isEmpty()
//   .isDate()
//   .trim()
//   .escape()
//   .bail()
//   .withMessage(' le champ Date doit etre rempli')
//   .isLength({min:5 , max:10})
//   .withMessage('Minimun 5 caractères obligatoires')
// ]
// ,
//    (req, res) => {
//  const errors = validationResult(req);
//  if (!errors.isEmpty()) {
//    const boom =errors.mapped();
//    console.log(boom)
//    res.render('inscription',{alert:boom})

//  }
// }
// )

 
 module.exports=router;