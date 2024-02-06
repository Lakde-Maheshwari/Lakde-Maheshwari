// Immediately Invoked Function Expression

function chai(){
    console.log(`DB connected`);
}

// chai()

// immediately invoking a function


// this is to prevent from the pollution of global scope

// Named IFFE
(function chai () {
    console.log(`DB connected`);
})();

// This doesn't work because this fuunction dont know where to stop so keep semicolon after the function
// problem was in the semicolon and not in the function keyword or arrow function
(() => {
    console.log(`Db connected 2`);
})();

// (function chai2() => {
//     console.log(`Db connected 2`);
// })();


// This also doesn't work

(function chaiaurcode(){
    console.log(`DB connected`);
})();


// new syntax

((name) => {
    console.log(`DB connected two ${name}`);
})('hitesh') //DB connected two hitesh