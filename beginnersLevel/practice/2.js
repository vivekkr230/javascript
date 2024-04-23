// let c=function xyz(){
//     //console.log(xyz()); maximum call size is exceeded
//     console.log("xys");
// }
// c();
// //xyz(); // reference error xyz is not defined


let a=function(param1){
    // console.log(param1)
    param1();
}
a(function(){
    console.log("hello");
})

// setTimeout(function ab(x,y){
//     console.log(x+y);
// },5000)

// ab(6,7); error: ab is not defined