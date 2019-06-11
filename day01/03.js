var http=require("http");
var url=require("url");
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	var path=url.parse(req.url).path   //取到端口后面的所有内容
	var search=url.parse(req.url).search  //取到包含？的所有内容
	var query=url.parse(req.url).query   //问号后面所有的内容  不包含问好
	// 	 parse 解析  对象  字符串
		 var newquery=url.parse(req.url,true).query
	var pathname=url.parse(req.url).pathname   //端口后面，？前面
// 	console.log("path:"+path)
// 	console.log("search:"+search)
	// console.log("query:"+query)
	
	console.log(newquery)
	// console.log("pathname:"+pathname)
	
	
	res.end("123")
}).listen(3000)