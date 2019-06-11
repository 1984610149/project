var http=require("http");
var ejs=require("ejs");
var fs=require("fs")


http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	
	fs.readFile("./static/news.ejs",(err,data)=>{
		var tempalte=data.toString()
		// var list=["首页","关于","新闻"]
		path=__dirname+"/time.html"
		var result={
			list:["首页","关于","新闻"],
			filename:path
		}
		var newdata=ejs.render(tempalte,result)
		res.end(newdata)
	})
	
}).listen(3000)