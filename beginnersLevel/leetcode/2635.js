let arr=[1,2,3,4];
let arr2=[];
function increment(x,arr2){
    for(let i=0;i<x.length;i++){
        x[i]=x[i]+1;
        arr2.push(x[i])
    }
    return arr2
}
console.log(increment(arr,arr2));
