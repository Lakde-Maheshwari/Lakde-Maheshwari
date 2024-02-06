// if(2==2){
//     console.log("Executed");
// }
// IMP dont use var in the if block because var have global scope but the 
// vaariables used in if block should not be accessed out of the block
// for checking we have more operaators
// like < ,>,<=,>=,==,!=,===
// === to check the type should also be saame
// like int or float or bool,etc


// short hand notation but dont use it 

// const balance = 1000;
// if(balance > 500) console.log("test"),
// console.log("Test2");

// practical appln

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false 

// if(userLoggedIn && debitCard && loggedInFromGoogle ){
//     console.log("Allow to buy Course");
// }

// switch statement ****

// switch(key) {
//     case value:
//         break;

//         default:
//             break;
// }


// falsy values while putting into the condition

// false,0,-0,BigInt 0n,"",null,undefined,NaN

// Truthy values

// "0" , 'false'," ",[],{},function(){}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// if(false == 0){} // true

// Nullish Coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = undefined ?? 15 //15
// val1 = null ?? 10 // 10

val1 = null ?? 10 ?? 20 // first value after null will be assigned
console.log(val1);


// syntax : condition ? true : false

const iceTeaPrie = 100;
iceTeaPrie <= 80 ? console.log("less than 80") : console.log("more than 80");