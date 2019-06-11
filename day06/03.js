var express = require("express")
//中间件
var bodyypa= require("body-parser")
var app=express()
//处理json数据
app.use(bodyypa.json())
//处理字符串
app.use(bodyypa.urlencoded({extends:false}))
app.get("/login",(req,res)=>{
    console.log(req.query.usename)
    console.log(req.query.password)
   res.send()
})
app.post("/regist",(req,res)=>{
    console.log(req.body.usename)
    console.log(req.body.password)
   res.send()
})
app.listen(3000)