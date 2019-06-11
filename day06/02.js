var express=require("express")
var app=express()
var re=/^\d{1,6}$/
app.get("/teacher/:id",(req,res)=>{
	if(!re.test(req.params.id)){
		res.send("错误")
	}else{
		res.send("该老师的工号为"+req.params.id)
	}
})
// app.get("/student/:id",(req,res)=>{
// 	res.send("该学生的工号为"+req.params.id)
// })
app.get("/",(req,res)=>{
	res.send("首页")
})
app.listen(3000)