const express=require("express")
const Neetu=express()
Neetu.use(express.json());

Neetu.get('/',(req,res)=>{
    res.end("hello world")
    console.log(req.body);
})
Neetu.listen(4000,()=>{
    console.log("Welcome to terminal");
})
