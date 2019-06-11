var http=require("http");
var url=require("url");
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	// url.parse  两个参数  第一个参数为路径   第二个参数true/false  默认false  加上true会转化成对象
	var query=url.parse(req.url,true).query
	
	console.log(query.age)
	
	res.end("123")
}).listen(3000)