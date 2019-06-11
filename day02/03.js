var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	// mkdir 创建目录
// 	fs.mkdir("./public",(err)=>{
// 		if(err){
// 			throw err
// 		}
// 		console.log("创建成功")
// 		res.end("")
// 	})
	// rmdir 删除目录
	fs.rmdir("./public",(err)=>{
		if(err){
			throw err
		}
		console.log("删除成功")
		res.end("")
	})
	
	//  readdir 读取目录
// 	fs.readdir("./static",(err,data)=>{
// 		if(err){
// 			throw err
// 		}
// 		console.log(data[0])
// 		res.end("")
// 	})
	
}).listen(3000)