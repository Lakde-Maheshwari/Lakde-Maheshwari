// let score = 33;
// console.log(typeof(score));
let score = "33abc";
console.log(typeof(score));
// conversion from string to number
let valueInNumber = Number(score);

console.log(typeof(valueInNumber));
console.log(valueInNumber); //NaN

// "" => false
// "lakde" => true

//1 => true
//0 => false

// ******** opertions ********

let value = 3;
let negvalue = -value;
console.log(negvalue);

//operations on string 

let str1 = "33"
let str2 = "45"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) //12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32


let n1 = 100;
n1++;
console.log(n1);


// ***** Relational Operators ******
// while applying relational operators take a look that 
// their datatypes should be same 
// Avoid these type of conversions
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
// here null will be considered as 0
console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

