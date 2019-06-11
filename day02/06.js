var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	
	// 查看文件信息  stat
	
	fs.stat("./static/01.txt",(err,stats)=>{
		if(err){
			throw err
		}
		console.log(stats.isFile())   //是否文件
		console.log(stats.isDirectory())    //是否目录
		res.end("")
	})
	
}).listen(3000)