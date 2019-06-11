var express=require("express");

var app=express()

app.get("/list/:id",(req,res)=>{
	res.send("id为"+req.params.id)
})

app.listen(3000)