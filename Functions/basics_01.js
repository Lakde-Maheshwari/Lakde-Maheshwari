// without function
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");

// with funciton call

function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// with functions

sayMyName()

function addTwonumbers(num1,num2){
    console.log(num1 + num2);
    return num1;
}

addTwonumbers(50,96) // 146ad
result = addTwonumbers(50,96)
console.log(result) // 50  returned value
addTwonumbers(50,"96") //5096

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter username");
    }
    return `${username} just logged in`
}

loginUserMessage("lakde maheshwari") // didnt give any output

ans1 = loginUserMessage("lakde")

console.log(ans1);


console.log(loginUserMessage()) // please enter usernmae


// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,100,500));


// if we are not aware of how much parameters are to be taken

function calculateCartPrice(val1,val2,...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,500,2000));

// values 200 is val1 400 is val2 and from 500 to 2000 is in the array num1

const user = {
    username: "hitesh",
    price: 199
}

function handleObjecct(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObjecct(user)


handleObjecct({
    username: "Maheshwari",
    price: 90000
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray;
}


console.log(returnSecondValue(myNewArray))

