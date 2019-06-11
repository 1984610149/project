var http=require("http");
var server=http.createServer((req,res)=>{
	res.end(1+2+3)
})

server.listen(3000,()=>{
	console.log("端口已经挂载")
})