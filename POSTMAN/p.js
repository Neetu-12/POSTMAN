const express=require("express")
const Neetu=express()
Neetu.use(express.json());

Neetu.get('/home',(req,res)=>{
    res.send("Hello this is home page")
})

Neetu.get('/',(req,res)=>{
    res.send("Hello this is main page ")
    console.log(req.body);
})

Neetu.get('/about',(req,res)=>{
    res.send("Hello this is about page")
    // console.log(req.body);
})

Neetu.get('/contact',(req,res)=>{
    res.send("Hello this is contact page")
})

Neetu.listen(3000,()=>{
    console.log("hiii");
})
