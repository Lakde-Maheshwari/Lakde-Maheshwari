/*
primitive :

7 types :
string,number,boolean,null,undefined,Symbol,BigInt

Reference Types (Non - Primitive) : 
Array, Objects, functions

js is dynamically typed lang bcoz datatype is not defined

*/
const BigNumber = 3232154369874123565621n
// this is big int 

const heroes = ["shaktiman","Nagraj","choota Bheem"]
// object
let obj = {
    name: "Maheshwari",
    age: 22,
}

// function storing in a variable
const myfunction = function(){
    console.log("Hello World");
}
console.log(typeof(myfunction));

// *******  Stack and Heap

// stack(primitive) , Heap (Non-primitive)
let myYoutubeName = "maheshwarilakde.com"
let anotherName = myYoutubeName;
anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYoutubeName);


