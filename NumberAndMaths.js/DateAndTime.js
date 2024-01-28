let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // Object

let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);  //1706454475651 ms
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000); //in seconds but also in decimal format so use Math.floor
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`
newDate.toLocaleString('default',{
    weekday:"long",
    
})