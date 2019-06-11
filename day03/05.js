var http=require("http");
var url=require("url");
var formidable=require("formidable");
var fs=require("fs")
var sd=require("silly-datetime")
var path=require("path")
// console.log(formidable)
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	if(req.url=="/dopost"&&req.method.toLowerCase()=="post"){
		
		// var form=new formidable()
		var form1=new formidable.IncomingForm()
		// console.log(form)
		// console.log(form1)
		form1.uploadDir="./load"
		
		// form1.keepExtensions=true;   保持扩展名
		form1.parse(req,(err,fields,files)=>{
			console.log(fields)  //文本域
			console.log(files)   //文件域
			
			
			// 获取后缀名
			var extname=path.extname(files.kkk.name)
			// 获取文件名
			var oldPath=files.kkk.path
			console.log(oldPath)
			var tt=sd.format(new Date(),"YYYYMMDDhhmmss")
			var newpath="./load/"+tt+extname;
			
			fs.rename(oldPath,newpath,(err)=>{
				if(err){
					throw err
				}
				console.log("改名成功")
				res.end("")
			})
			
		})
		
		
		
		
		
		
	}
	
}).listen(3000)