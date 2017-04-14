var Timer={
  data:{},
  start:function(key){
    Timer.data[key]=new Date();
  },
  stop:function(key){
    var time=Timer.data[key];
    if(time)
    Timer.data[key]=new Date()-time;
  },
  getTime:function(key){
    return Timer.data[key];
  }
};
// test
var count=1000;
Timer.start("div");
for(var i=0;i<count;i++){
document.createElement("div");
}
Timer.stop("div");
console.log("the time is:"+Timer.getTime());
