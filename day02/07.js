//   module.exports   exports   暴露  抛出
var http=require("http");
var bar=require("./08.js")
// console.log(bar.a)
// console.log(module)
// console.log(exports)

http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return;
	}
	if(req.url=="/"){
		bar.showIndex(req,res);
	}else if(req.url=="/index.css"){
		bar.showIndexcss(req,res);
	}else if(req.url=="/250.png"){
		bar.showImg(req,res);
	}
}).listen(3000)
/*
1.exports=module.exports    exports引用module.exports的值
2.module.exports指向当前的一个模块
3.module.exports的默认值为一个实际对象，而exports的默认值为空对象
*/