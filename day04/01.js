var events=require("events");
// 实例事件
var eventEmitter=new events.EventEmitter;
// 绑定事件
eventEmitter.on("start",()=>{
	console.log("start event")
})
// 触发事件
// eventEmitter.emit("start")     //触发
// eventEmitter.emit("start") 


// 触发一次
// eventEmitter.once("start1",()=>{
// 	console.log("start")
// })
// 
// eventEmitter.emit("start1")
// eventEmitter.emit("start1")


// 添加错误事件
// eventEmitter.once("error",()=>{
// 	console.log("errors")
// })
// 
// eventEmitter.emit("error",new Error("focus error"))
// eventEmitter.emit("error",new Error("arguments must be a String"))

// 添加   addListener  添加到尾部

function ReaddEvent(){
	console.log("addEvent has been remove")
}
function AddaddEvent(){
	console.log("addEvent has been add")
}
// addEvent   自定义事件   ReaddEvent  函数执行体
eventEmitter.on("addEvent",ReaddEvent)
eventEmitter.on("addEvent",AddaddEvent)
eventEmitter.removeListener("addEvent",ReaddEvent)


// 自定义事件触发器
eventEmitter.emit("addEvent")
