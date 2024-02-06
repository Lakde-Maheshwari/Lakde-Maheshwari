// const myObject = {
//     js: 'Javascript',
//     cpp : 'c++',
//     rb : 'ruby'
// };


// ${key} for key and ${myObject${key} for value}

// for (const key in myObject) { //js cpp rb
//     console.log(key);
//     console.log(myObject[key]);
//     // short hand for both key and value pair
//     console.log(`${key} shortcut is ${myObject[key]}`);
// }

// const programming = ["js","rb","py","java","cpp"]

// maps are not iteratable
// for arrays keys are its index values i.e  1 2 3 4 5 
// for (const key in programming) { 
//    console.log(key);
//    console.log(programming[key]);
// }

// for objects we will use for in loop 
// for arrays we will use for of loop


//  FOREACH LOOP 

// const coding = ["js","ruby","java","python","cpp"];
// // call back function dont have function name
// coding.forEach(  function (item) {
//     console.log(item);
// })

// // arrow functions

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// fuunction ko as a parameter pass krna hai

// coding.forEach(printMe);

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })


const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageFileName : "cpp"
    },
    {
        languageFileName : "java"
    },
]

// for each item is languageFileName will be printed
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})
