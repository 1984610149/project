var express=require("express");

var app=express()

app.get("/aa",(req,res)=>{
	// res.send("express我来了")
	res.send({"name":"hh","age":15})
})

// express路由不区分大小写
app.get("/Bb",(req,res)=>{
	res.send("hhhhhh")
})
app.listen(3000)