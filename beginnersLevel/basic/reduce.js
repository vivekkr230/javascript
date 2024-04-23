let arr=[4,3,6,7];

function findsum(y){
    let sum=0;
    for(let i=0;i<y.length;i++){
        sum=sum + y[i];
        
    }return sum
}
console.log(findsum(arr));

const output=arr.reduce(function(acc,curr){
    acc=acc+curr
    return acc
},0)
console.log(output);
