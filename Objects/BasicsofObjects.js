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

{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }
  






