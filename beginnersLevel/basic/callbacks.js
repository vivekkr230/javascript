function clickme(){
    let count=0;
    document.getElementById("cilckme").addEventListener("click",function xyz(){
        console.log("click count",++count)
    })
}
clickme();