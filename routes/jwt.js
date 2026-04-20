
const r=require("express").Router();
const jwt=require("jsonwebtoken");

r.post("/login",(req,res)=>{
 const token=jwt.sign({user:"demo"},"secret",{expiresIn:"1h"});
 res.json({token});
});

module.exports=r;
