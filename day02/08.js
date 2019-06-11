var fs=require("fs")
function showIndex(req,res){
	fs.readFile("./public/index.html",(err,data)=>{
		res.end(data)
	})
}

function showIndexcss(req,res){
	fs.readFile("./public/index.css",(err,data)=>{
		res.end(data)
	})
}

function showImg(req,res){
	fs.readFile("./public/250.png",(err,data)=>{
		res.end(data)
	})
}



module.exports={
	showImg,
	showIndex,
	showIndexcss
}