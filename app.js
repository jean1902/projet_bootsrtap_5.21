const express = require("express");
const  app = express();
const express_validato =require('validator')
 let Port =5000;

 const router_index =require('./model/router/index_router')
 const router_connexion =require('./model/router/connexion_router')
 const router_inscription =require('./model/router/inscription_router')
 const router_profile1 =require('./model/router/router_Pr_sylvia')
 const router_profile2 =require('./model/router/router_P_cory')
 const router_profile3 =require('./model/router/router_P_glasper')
 const router_course1 =require('./model/router/router_course_jazz')

app.set("views" ,"./views");
app.set("view engine" ,"ejs")
app.use("/model" , express.static("model"))
app.use("/",router_index)
app.use("/",router_connexion)
app.use("/",router_inscription)
app.use("/",router_profile1)
app.use("/",router_profile2)
app.use("/",router_profile3)
app.use("/",router_course1)


 app.listen(Port ,()=>{
    console.log(`listening on port ${Port}`)
 })