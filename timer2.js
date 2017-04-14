var count =new Array(10000000)
var a=[];


var begin2=new Date();

for(var j=0;j<count.length;j++){
a.push(i);
}
var end2=new Date();
var time2=end2-begin2;
console.log("time2 is="+time2);


var begin=new Date();

for(var i=count.length-1;i>=0;i--){
a.push(i)

}
var end=new Date();
var time=end-begin;
console.log("time1 is="+time);



