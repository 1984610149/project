var express = require("express")
//中间件
var bodyypa= require("body-parser")
var app=express()
//处理json数据
app.use(bodyypa.json())
//处理字符串
app.use(bodyypa.urlencoded({extends:false}))
app.post("/login",(req,res)=>{
	let user={
		username:"xhh",
		password:"123456"
	}
	if(req.body.usename==user.username&&req.body.password==user.password){
		res.send("成功")
	}else{
		res.send("失败")
	}
//     console.log(req.body.usename)
//     console.log(req.body.password)
// 	console.log(user.username)
// 	console.log(user.password)
   
})
app.listen(3000)