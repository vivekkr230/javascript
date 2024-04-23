var values=function(init){
    function increment(){
        let count=init;
        return ++count;
    }
    function decrement(){
        let count=init
        return --count
    }
    function reset(){
        let count=init;
        return count;
    }
    return {increment,decrement,reset}
};
const value=values(5)
console.log(value.increment());
console.log(value.decrement());
console.log(value.reset());
