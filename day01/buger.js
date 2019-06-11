var http=require("http");
var fs=require("fs");
var url=require("url");

GetUrl(url,data=>{
	fs.writeFile("",data);
})
function GetUrl(sUrl,suc){
	var urlObj=url.parse(sUrl)
	var http="";
	if(urlObj.protocol=="http:"){
		http=require("http");
	}else{
		http=require("https");
	}
	
	var req=http.request({
		"hostname":urlObj.hostname,
		"path":urlObj.path
	},res=>{
		var arr=[];
		var str="";
		res.on("data",buffer=>{
			arr.push(buffer)
		})
		res.on("end",()=>{
			var b=Buffer.concat(arr);
			suc&&suc(b)
		})
	});
	
	req.end();
	// req.on("error")
}


// var req=http.request({
// 	"hostname":"nodejs.cn",
// 	"path":"/download/"
// },res=>{
// 	var arr=[];
// 	var str="";
// 	res.on("data",buffer=>{
// 		arr.push(buffer)
// 		str+=buffer;
// 	})
// 	res.on("end",()=>{
// 		var b=Buffer.concat(arr);
// 		fs.writeFile("xhh.jpg",b,()=>{
// 			console.log("success")
// 		})
// 		console.log(str)
// 	})
// });
// 
// req.end();