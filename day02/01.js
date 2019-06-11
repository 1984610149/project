var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
	
	if(req.url=="/favicon.ico"){
		return
	}
	
	// readFile  读文件   异步   readFileSync  同步
	var newdata="";
	fs.readFile("./static/01.txt",(err,data)=>{
		// console.log(data.toString())
		
		// 写在代码执行最后
		newdata=data.toString()
		
// 		fs.writeFile("./static/02.txt",newdata,(err)=>{
// 			if(err){
// 				return
// 			}
// 			console.log("写入成功")
// 			// res.end()
// 		})
		// 同步
		fs.writeFileSync("./static/02.txt","啦啦啦啦啦",{"flag":"a"})
		

		res.end(data.toString())
	})
	
	// writeFile  写入
	
	// r  read  读
	// w  write  写
	// a  append  追加
	// flag
	
// 	fs.writeFile("./static/02.txt",newdata,(err)=>{
// 		if(err){
// 			return
// 		}
// 		console.log("写入成功")
// 		res.end()
// 	})
	
	
	
}).listen(3000)