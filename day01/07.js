var http=require("http");
var server=http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
	res.write("23333")
	res.write("<h1>jjj</h1>")
	res.end("")
})

server.listen(3000)