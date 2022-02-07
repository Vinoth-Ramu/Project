const express= require("express");
const router = express.Router();
const infoRouter = require("./infoSchema");


//Create
router.post("/",async(req,res) => {
    console.log(req.body);
    var data =new infoRouter({
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    });
    await data.save();
    res.json(data); 
})

//getAll
router.get("/",async (req,res) => {
    var findData = await infoRouter.find();
    res.json(findData);
})

//Update
router.put("/update",async(req,res) =>{
    var update = await infoRouter.update({_id:req.body._id},{$set:{
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    }});
    res.json(update);
})

//Delete
router.delete("/del/:id", async(req,res) =>{
    var delData = await infoRouter.findByIdAndRemove(req.params.id).then(e => {
        res.json({message:"Deleted Successfully"})
    })
})


router.get("/",(req,res) =>{
    res.json("Hi its router file");
})

module.exports = router;