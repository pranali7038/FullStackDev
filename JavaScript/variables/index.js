//using var key word, It has function and global scope
var age=25;

function solve(){
    var age =50;
    console.log("Age is",age);
}
solve();
console.log("Age is",age);

//using let keyword it has block scope
{
let a=10;
}
console.log(a);  



//using const
const num=24;
console.log(a);


//Js is dynamically types language
let a="pranali";
console.log(a);
a=10;
console.log(a);