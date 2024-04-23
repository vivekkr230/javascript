console.log("Start");


setTimeout(function cb(){
    console.log("CallBack");
},5000)

console.log("End");

let startdate=new Date().getTime();
let enddate=startdate;

while(enddate < startdate+10000){
    enddate=new Date().getTime();
    // console.log("enddate");
}

console.log("10 second finished");