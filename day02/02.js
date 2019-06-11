var http=require("http");
var fs=require("fs");

http.createServer((req,res)=>{
	
	if(req.url=="/favicon.ico"){
		return
	}
	// unlink  删除文件
	fs.unlink("./static/01.txt",(err)=>{
		if(err){
			throw err    //throw   抛出
		}
		console.log("删除成功")
		res.end("")
	})


// console.log(req.url)
// res.end("")
	
}).listen(3000)