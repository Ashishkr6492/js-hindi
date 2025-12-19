// immediately invoked function  expression

// iife : those func which execute immediately or 
// global scope ke pollution se problem hoti h ki brr
// wo jo global scope ke variable hh uske pollution ko hatane ke liye iska use krte hh

// mtlb : global scope main jo variable hote h wo child main kbhi kbhi use ho jate h 
//        isliye uska use hatane ke liye iife ka use krte hh

// ()(); syntex of iife 
// frist () use for function , second () use for execution and ; use end for invoked func

// named iife
( function chai(){
    console.log("DB CONNECTED"); 
} )();


// unnamed iife
(  (name) => {  // arrow func
    console.log(`DB CONNECTED TWO ${name}`);
} )("ashish")