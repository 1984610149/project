var http=require("http");
var url=require("url");

http.createServer((req,res)=>{
	
	var newurl=url.parse(req.url,true).query
	
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
	
	if(newurl.username=="admin"&&newurl.password=="123"){
		res.end("登陆成功")
	}else{
		res.end("登陆失败")
	}
	
}).listen(3000)