const express = require("express");
 app = express();
 let Port =5000;

 const router_index =require('./model/router/index_router')
 const router_connexion =require('./model/router/connexion_router')

app.set("views" ,"./views");
app.set("view engine" ,"ejs")
app.use("/model" , express.static("model"))
app.use("/",router_index)
app.use("/",router_connexion)

 app.listen(Port ,()=>{
    console.log(`listening on port ${Port}`)
 })