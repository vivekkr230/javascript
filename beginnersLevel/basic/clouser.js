function x(){
    let a=7;
    function y(){
        console.log("Vivek Kumar")
    }
    return y;
}
const z=x()
// console.log(z()); it prints the value and undefined
z()