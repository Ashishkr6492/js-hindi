const myArr = [0, 1, 2, 3, 4]
// console.log(myArr[0]);

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[3]);

// // array method
// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9) // add in first
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join() // it convert in string

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)


// slice splice

console.log("A ",myArr)

const mya1 = myArr.slice(1,3)
console.log(mya1);
console.log("B ",myArr)

const mya2 = myArr.splice(1,3)
console.log(mya2);
console.log("C ",myArr)

