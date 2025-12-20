// const  userEmail = "ashish@gmail.com"

const  userEmail = []

if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have user email");  
}

if(userEmail.length === 0){
    console.log("array is  empty");
}

// falsy valuee
// false, 0, -0, BigInt (0n), "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){ // Object.keys() it convert object keys in array 
    console.log("object is empty");
}

// in inspect console

// false == 0  //  give true

// false == '' // true

// 0 == ''    // true


// nullish coalesing operator (??): null undefined

let var1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// terniary  operator

// condition ? true : false

const TeaPrice = 100
TeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


