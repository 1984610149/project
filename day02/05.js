var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	
	// 修改文件名称  rename
	fs.rename("./static/02.txt","./static/01.txt",(err)=>{
		if(err){
			throw err
		}
		
		console.log("改名成功")
		res.end("")
	})
	
}).listen(3000)