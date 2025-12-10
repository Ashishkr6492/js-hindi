// primitive

// 7 types :String, number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(typeof id); // symbol

const bigNumber = 3147632741754387n
console.log(typeof bigNumber);

// Reference (Non primitive)

//Array, objects, Fuctions (data type of all this are object except function => object function)

const heros = ["ashu", "doga"];
let myObj = {
    name:"ashu",
    age :20,
}

const myFunction = function(){
    console.log("hello world");
}
