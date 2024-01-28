// Arrays
const myArray = [52,"Lakde",'u',]
console.log(myArray);
myArray.push(9)
myArray.pop()

myArray.unshift(15); // same as push
myArray.shift() //same as pop
console.log(myArray);
// includes,indexOf(array element)

//slice,splice

const myn1 = myArray.slice(0,2)
console.log(myn1);

const myn2 = myArray.splice(0,2)
console.log(myn1);
console.log(myn2);