//   查询字符串   路径url   路径序列化

var queryString=require("querystring");
// var query=queryString.stringify({"a":"bb","h":"pp"})
// parse   把字符串转化为键值对
var query=queryString.parse("a=bb&h=pp")
console.log(queryString)