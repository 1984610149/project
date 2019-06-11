var http=require("http");
var {render,extension}=require("art-template");
var fs=require("fs")
http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	var result1={
		list:["首页","关于","新闻"]
	}
	fs.readFile("./static/First.art",(err,data)=>{
		var result=render(data.toString(),result1)
		res.end(result)
	})
}).listen(3000)

console.log(extension)