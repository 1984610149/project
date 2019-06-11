var express=require("express");
var router=express.Router()
var app=express()
app.use(router)
router.get("/vericode",(req,res)=>{
	function randomNum(min,max){
		return Math.ceil(Math.random()*(max-min)+min)
	}
	var str="1234567890cksaoncncpnaspnvsauovasucasvnsaipnvuosavuonasoibci";
	var newStr="";
	for (var i = 0; i < 4; i++) {
		newStr+=str[randomNum(0,str.length-1)]
	}
	res.send({"success":"ok","data":newStr})
})
app.listen(3000)