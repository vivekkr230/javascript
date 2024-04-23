const sum=calculateSum((n)=>{
    let summation=0;
    for(let i=0;i<=n;i++){
        summation=summation+i;
    }
    return summation
})
const result=sum(5)
console.log(result);