// this : this refer to the current contest or (this use for excess current contest)
// current contest present in inside the object ka {}


const user = {
    username: "ashish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // when print this it refer to empty current contest ({}) in Node environment
                   //  because global object not present 


// when i use console.log(this); in browser console it give window 

// beacuse in browser global object present in the form of window object


// function chai(){
//     let username = "ashish"
//     console.log(this);  // inside this many value are available it can through func
//     console.log(this.username); // this not use in function
    
// }

// const chai = function(){
//     let username = "ashish"
//     console.log(this.username);
// }


// arrow function

const chai = () => {
    let username = "ashish"
    console.log(this); // give empty ({})
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2 // it called implicit return

// const addTwo = (num1,num2) => ( num1 + num2 )

const addTwo = (num1,num2) => ( {username: "ashish"} ) // present inside perenthesis is object

// in arrow func when use curley bracket write return and use parenthesis not need


console.log(addTwo(2,4));

