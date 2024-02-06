//singleton
// object literals


// most asked interview question about symbols
const mysym = Symbol("key1");


const Jsuser = {
    name: "lakde maheshwari",
    "Full_Name" : "Lakde Maheshwari Vaijyanath",
    year_of_study : 2,
    age: 21,
    [mysym] : "mykey1",
    email:"maheshwarilakde@gmail.com",
    lastLoginDays : ["Monday","Saturdays"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
// you have to access fullname like this only
console.log(Jsuser["Full_Name"]);
// no double quotes required
console.log(Jsuser[mysym]);

Jsuser.greeting = function(){
    console.log(`Helolo Js user,${this.name}`);
}
// use dot to access member in very Rare case their 
// if interviewer asks about the square bracket types
console.log(Jsuser.greeting());
// objects using constructor

const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = "False"
console.log(tinderuser);

// OBJECTS NESTING
const regularUser = {
    email : "somegmail.com",
    fullname : {
        userfullname : {
            firstname: "Maheshwari",
            lastname : "Lakde"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a" , 2:"b"}
const obj2 = {3: "a" , 4 : "b"}


const obj3 = Object.assign(obj1,obj2)
console.log(obj3);  
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//const obj3 = {obj1,obj2}


// object of arrays
const users = {
    id:1,
    email: "h@gmail.com"
}


// users[1].email
console.log(tinderuser)

console.log(Object.keys(tinderuser));//[ 'id', 'name', 'isLoggedIn' ]) 
console.log(Object.values(tinderuser)); //[ '123abc', 'sammy', 'False' ]
console.log(tinderuser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName :  "Js in hindi",
    price : "999",
    courseInstructor: "hitesh"
}

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// destructuring
// const navbar = (company) => {

// }

// navbar(company = "hitesh")




// json structure

// {
//     name : "hitesh"
//     coursename : "js in hindi"
//     price : "free"
// }

[
    {},
    {},
    {}
]


// random user.me api


  






