function fibbonacci(n){
    if(n<=1){
        return n
    }
    else{
        return n*fibbonacci(n-1)
    }
}
console.log(fibbonacci(4));