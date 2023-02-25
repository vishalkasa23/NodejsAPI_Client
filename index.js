const express = require("express");
const app = express();
//const crouse=require("./Crousal/Crouse.json")
const building=require("./WFO/Building.json")
// const Holiday=require("./Holiday/MultiHoliday.json")
// const city=require("./Holiday/city.json")
 const foodlist=require("./Cafeteria/foodlist.json")
 const cityfood=require("./Cafeteria/cityfood.json")
 const techStacks=require("./Upskill/techStacks.json")
 const techStackstype=require("./Upskill/techStackType.json")
 //const courses=require("./courses")
 let port = process.env.PORT || 3000;

app.get("/", (req,res)=>{
    res.send("Hello World")
});

// app.get("/crouse",(req,res)=>{
//     res.send(crouse)
// })
app.get("/building",(req,res)=>{
    res.send(building)
})
// app.get("/holiday",(req,res)=>{
//     res.send(Holiday)
// })
app.get("/city",(req,res)=>{
    res.send(city)
})
app.get("/cityfood",(req,res)=>{
    res.send(cityfood)
})
app.get("/foodlist",(req,res)=>{
    res.send(foodlist)
})
app.get("/user", function(req, res){
    var id = req.query.id 
    res.send(require(`./Profile/${id}.json`))
})
app.get("/techstack",(req,res)=>{
    res.send(techStacks)
})
app.get("/techstacktype",(req,res)=>{
    res.send(techStackstype)
})
 app.listen(port, ()=>{
    console.log(`Example app is listening on port http://localhost:${port}`)
 });
