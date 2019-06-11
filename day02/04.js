var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	// watchFile  监听文件的改变   unwatchFile   监听文件的卸载
	fs.watchFile("./static/02.txt",(curr,prev)=>{
		console.log(curr)
		console.log(prev)
		res.end("")
	})
	
	fs.writeFile("./static/02.txt","changed",(err)=>{
		if(err){
			throw err
		}
	})
	
	
}).listen(3000)