var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	
	// 查看文件信息  stat
	
// 	fs.readdir("./static",(err,data)=>{
// 		if(err){
// 			throw err
// 		}
// 		
// 		for (let i = 0; i < data.length; i++) {
// 			
// 			fs.stat("./static/"+data[i],(err,stats)=>{
// 				if(err){
// 					throw err
// 				}
// 				
// 				if(stats.isDirectory()){
// 					console.log(data[i])
// 				}
// 				res.end("")
// 			})
// 		}
// 		
// 	})

	fs.readdir("./static",(err,data)=>{
		function test(index){
			if(index<0){
				res.end("成功")
				return;
			}
			var newData=fs.statSync("./static/"+data[index]);
			if(newData.isDirectory()){
				console.log(data[index])
			}
			test(--index)
		}
		test(data.length-1)
	})

	
	
	
}).listen(3000)