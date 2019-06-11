var express=require("express");
var app=express();
//engine

/*
1.目录要求   views
2.项目中的配置

*/

//告诉服务端需要什么引擎
// use  set
//设置项目的模板引擎
app.set("view engine","ejs")

app.get("/",(req,res)=>{
	res.render("index",{
		list:[
			{"username":"tom"},
			{"username":"jack"},
			{"username":"rose"}
		]
	})
})
app.listen(3000)