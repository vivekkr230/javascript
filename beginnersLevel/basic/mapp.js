let arr=[3,6,4,5];
// const output=arr.map((x)=>x*2)
// console.log(output)

function double(x){
    return x*2
}
function triple(x){
    return x*3
}
function binary(x){
    return x.toString(2)
}
const output=arr.map(binary)
console.log(output)