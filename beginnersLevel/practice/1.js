// let a=10;
// console.log(a);

// let a="vivek"; // syntax error
// console.log(a);



        // Syntax Error & Type Error
// const a=10;
// console.log(a)
// const a="kumar";
// console.log(a);

let b=547;
console.log(b);


        // this throws an error as it says c is not a function
// let c=setTimeout(function(a,b){
//     return a+b;
// },10000)
// const d=c(4,6)
// console.log(d);


        //whether it works absolutely fine it does not throw an error
let c=function(a,b){
    return a+b;
}
const d=c(4,6)
console.log(d);