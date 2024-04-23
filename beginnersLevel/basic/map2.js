const user=[
    {firstname:"Zayn",lastname:"malik","age":31},
    {firstname:"Zayn",lastname:"saifi","age":29},
    {firstname:"Mrunal",lastname:"Thakur","age":31},
    {firstname:"lara",lastname:"datta","age":45},
    {firstname:"Dhruv",lastname:"Kumar","age":20},
    {firstname:"Ranu",lastname:"Dhanotiya","age":18},
    {firstname:"Muskan",lastname:"Kumari","age":14},
    {firstname:"Mahesh",lastname:"Shekhawat","age":25},
];

const output=user.reduce((acc,curr)=>{
    if(curr.age<31){
        acc[curr.firstname]=curr.age
    }
    return acc
},{})
console.log(output);

// const output=user.filter((x)=>{
//    return x.age>31
// });

// console.log(output);
// function xyz(x){
//     for(let i=0;i<x.length;i++){

//     }
// }
// const output=xyz(user);
// console.log(output);