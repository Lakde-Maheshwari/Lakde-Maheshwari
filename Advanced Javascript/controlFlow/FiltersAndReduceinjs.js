// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item; // undefined
// })

// console.log(values);

// // Returns the elements of an array that meet the condition specified in a callback function.

// const myNums = [1,2,3,4,5,6,7,8,9,10];
// // const newNums = myNums.filter( (num) => num > 4)
// //  agar humne scope mein ye sb likha hai to hume compulsory return keyword likhna hi hoga


// //  This didnt work without return keyword as it is started with a scoope {}

// // console.log(newNums);  // [ 5, 6, 7, 8, 9, 10 ]

// // const newNums = myNums.filter( (num) => {
// //     return num > 4
// // })

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);  //[ 5, 6, 7, 8, 9, 10 ]

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumbers.map( (num) => num + 10)

// console.log(newNum); // [
// //     11, 12, 13, 14, 15,
// //     16, 17, 18, 19, 20
// //   ]

// const myNumers = [1,2,3,4,5,6,7,8,9,10]
// // const newNums = myNumers.map((num) => num)
// // const newNums = myNumers.map((num) => num + 1)


// // yyou can also write in this way 

// const newNums = myNumers
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)
//                 .filter((num) => num >= 40)
// console.log(newNums);   //[
// //     41, 51,  61, 71,
// //     81, 91, 101
// //   ]



// // ******  REDUCE KEYWORD ******

const nums = [1,2,3]
// const myTotal = nums.reduce(function (acc,currval) {
//     console.log(`acc : ${acc} and curr ${currval}`);
//     return acc + currval
// },0)

const myTotal = nums.reduce((acc,currval) => (acc+currval), 0)

console.log(myTotal);

const shoppingCart =  [
    {
        itemName: "js Course",
        price: 1000
    },
    {
        itemName: "python Course",
        price: 2000
    },
    {
        itemName: "cpp Course",
        price: 3000
    },
    {
        itemName: "java Course",
        price: 4000
    },
]

const PriceTotal = shoppingCart.reduce((acc,eachobject) => (acc + eachobject.price),0)
console.log(PriceTotal);