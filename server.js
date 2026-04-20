
require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const app=express();

app.use(express.json());

// logging middleware
app.use((req,res,next)=>{
 console.log(req.method, req.url);
 next();
});

// auth middleware
const auth=(req,res,next)=>{
 const token=req.headers.authorization;
 if(!token) return res.status(401).json({msg:"No token"});
 next();
};

mongoose.connect("mongodb://127.0.0.1:27017/exp6");

app.get("/",(req,res)=>res.send("EXP6 RUNNING"));

// protected route
app.get("/protected",auth,(req,res)=>res.json({msg:"Authorized"}));

app.listen(3000,()=>console.log("Server running"));
