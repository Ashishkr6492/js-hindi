// when object declared through constructor is called singleton
//object.create

//when object declared through literals is called non-singleton

// object literals

const mysym = Symbol("key1")
const jsUser = {
    name: "ashish", // key found in string ("name")
    "full Name": "ashish kr",
    [mysym]: "mykey1", // mysym found in symbol(key1)
    age: 18,
    location: "bihar",
    email: "ashish@google.com",
    isLogged: false
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);

// console.log(typeof jsUser[mysym]);


jsUser.email = "ashish@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "ashish@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
console.log(jsUser);

