var express=require("express");
var app=express();

app.engine('art', require('express-art-template'));
app.set("view engine","art")

app.get("/",(req,res)=>{
	res.render("xhh",{
		name:"hh",
		list:[
			{"username":"tom"},
			{"username":"jack"},
			{"username":"rose"}
		]
	})
})
app.listen(3000)