var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	if(req.url=="/"){
		fs.readFile("./public/index.html",(err,data)=>{
			res.end(data)
		})
	}else if(req.url=="/about"){
		fs.readFile("./public/about.html",(err,data)=>{
			res.end(data)
		})
	}else if(req.url=="/new"){
		fs.readFile("./public/new.html",(err,data)=>{
			res.end(data)
		})
	}else if(req.url=="/index.css"){
		fs.readFile("./public/index.css",(err,data)=>{
			res.end(data)
		})
	}else if(req.url=="/250.png"){
		
		fs.readFile("./public/250.png",(err,data)=>{
			res.end(data)
		})
	}else{
		fs.readFile("./public/404.html",(err,data)=>{
			res.end(data)
		})
	}
}).listen(3000)