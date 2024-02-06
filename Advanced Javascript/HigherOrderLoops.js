//  for of 

// ["","",""]
// [{},{},{}]


const arr = [1,2,3,4,5]

// for (const i of arr) {
//     console.log(i);
// }

// const greetings = "Hello World"

// for (const greet of greetings) {
//     console.log(greet);
// }

// for of loop in maps

const map = new Map()

map.set('In',"India")
map.set('USA',"United Stated of America")
map.set('Fr',"France")

// console.log(map);

// for(const key of map){
//     console.log(key);
// }

for(const [key,value] of map){
    console.log(key,':-',value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
};


// gives ann error that myObject is not iteratable 
// error: 
//  myObject is not iterable
for(const [key,value] of myObject){
    console.log(key,':-',value);
}