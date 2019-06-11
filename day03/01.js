var path=require("path");
var http=require("http");
var url=require("url");
http.createServer((req,res)=>{
	// path  处理文件路径
	
	
	// var newpath=path.resolve("./g/////h////f///..","l///g//")
	// 作用：解析成正确的路径   绝对路径   该函数将一个路径序列或路径片段组合成一个绝对路径
	
	
	// normalize   标准化路径   如果path是长度为0的字符串，将会返回'.' , 表示当前工作目录
	/*
	1.有多个/会替换成一个
	2.会保留最后一个/
	3.注意..和.
	*/
	// var newpath=path.normalize("./g/////h////f/..")
	
	
	// join  合并成一个标准化路径
	/*
	1.合并成一个标准化路径
	2.注意..和.
	3.参数必须是字符串
	*/
	// var newpath=path.join("/s/////f/.","j","/p","..")
	

	// dirname  返回一个路径的目录
	// var newpath=path.dirname("a/b/n")
	
	
	// basename  返回目录中最低级的目录名称
	// var newpath=path.basename("a/b/n.txt")
	
	
	// extname  扩展名  获取扩展名
	// var newpath=path.extname("a/b/n.txt")
	
	
	
	
	
	var obj={
		protocol:"http",
		path:"www.baidu.com",
		port:3000
	}
	console.log(newpath)

	res.end("")
}).listen(3000)