var http=require("http");
var ejs=require("ejs");
http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
	// node渲染方式
// 	var data={
// 		list:["1","2","3"]
// 	}
// 	var result=JSON.stringify(data)
// 	
// 	res.end(result)


// 	people = ['geddy', 'neil', 'alex'],
// 	result = ejs.render('<%= people.join(", "); %>', {people: people});

	// ejs渲染方式    compile  编译   reader   渲染
	// 模板           <%=%>  输出

	var data=[num=80];
	var str="今年买了一个iphone<%=num%>";
	var result=ejs.render(str,data);
	res.end(result)
}).listen(3000)