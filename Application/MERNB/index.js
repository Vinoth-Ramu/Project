// Third Party Module
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

//Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); //Its a parcer like req.body


//Router
const infoRouter = require("./router");
app.use("/info",infoRouter);






// Its below 4 lines just working process
// app.use("/",(req,res) =>
// {
//     res.json("Hii its working");
// })



// Listen Port
app.listen(5000, () =>{
    console.log("Server Started On 5000");
})

//Db Connection
mongoose.connect("mongodb://localhost/project",(err) =>{
    if(!err)
    {
          console.log("DB Connected Successfully")
    }
})



