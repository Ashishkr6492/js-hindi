let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate); //object

// let myCreatedDate = new Date(2025, 11, 12)  // yaha pe month 0 se count 
// let myCreatedDate = new Date(2025, 11, 12, 12, 34)
// let myCreatedDate = new Date("2025-01-14") // yaha pe 1 se
let myCreatedDate = new Date("01-14-2025")

console.log(myCreatedDate.toLocaleString());

let myTime

