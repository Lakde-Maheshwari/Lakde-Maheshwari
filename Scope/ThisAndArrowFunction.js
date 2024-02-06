const user= {
    username :"lakde",
    price:99,
    
    welcomeMessage : function (){
        console.log(`${this.username} , welcome to website`);
    }
}

user.welcomeMessage()
user.username = "maheshwari"
user.welcomeMessage()
console.log(this)

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// arrow functions
const chai = () => {
    let username = "hitesh"
    console.log(this);
}
// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// if we are using this type of parenthesis while returning then no need to use
// return keyword
const addTwo = (num1,num2) => {num1 + num2}
console.log(addTwo(9,5));


