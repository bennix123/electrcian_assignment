const express=require("express")
const router=express.Router()
const electrician_managment=require('../controller/electrician_managment')
const electrician_managment_obj=new electrician_managment();

router.get("/",(req,res)=>{
    res.end("Hello World")
  })


  router.post("/add_electrician",(req,res)=>{
    electrician_managment_obj.add_electrician(req,res);
  })

  router.post("/add_site",(req,res)=>{
    electrician_managment_obj.add_electrician(req,res);
  })


  module.exports=router