function createHelloWorld(){
    return function(){
        return "Hello World"
    }
}
const v=createHelloWorld();
console.log(v());