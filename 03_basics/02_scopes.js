
let a = 300
c = 100
if(true){
    let a = 10
    const b = 20
    c = 50
    // var c = 60
    // console.log("Inner:", a);
}

// console.log(a);
// console.log(b); // error
// console.log(c); // global scope code can excess in block scope but block doesnt excess in global(c and (var c) is exception)


// nested scope

function one(){
    const username = "ashish"

    function two(){
        const websites = "youtube"
        console.log(username); // child can excess parent variable
    }
    // console.log(websites); // parent doesnt excess child variable(give error)

    two()
    
}

// one()


if(true){
    const username = "ashish"
    if(username === "ashish"){
        const website = " youtube"

        // console.log(username + website);
        
    }

}

// ++++++++++++++ interesting +++++++++++++++++

// hoisting

console.log(addone(5)); // it use before declearation

function addone(num){
    return num + 1
}

// console.log(addone(5));


// console.log(addtwo(8)); // when execution write upper of function which decleared inside variable its give error
                           //  or it not use before declearation
const addtwo = function(num){
    return num + 2
}

console.log(addtwo(8));
