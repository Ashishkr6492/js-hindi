function sayMyName(){
    console.log("a");
    console.log("ssc");
}

// sayMyName();

// function addTwoNumbers(number1, number2){ //number1, number2 it is parameter
//     console.log(number1+number2); 
// }

function addTwoNumbers(number1, number2){ //number1, number2 it is parameter
    return number1+number2;
}

// console.log(addTwoNumbers()); // nan
const result = addTwoNumbers(90,6) //3,6 it is argument

// console.log(result);

function loginUSerMessage(username){
    // if(username == undefined){
    if(!username){    
        console.log("please enter username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUSerMessage()); // undefined

function calculateCartPrice(val1, val2, ...num1){ //... rest operator
    return num1;
}

// console.log(calculateCartPrice(200, 300, 400, 2000));

const user = {
    username: "ashu",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "ashish",
    price: 399
})

const myNewArray = [200,300,100,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,300,100,500]));
