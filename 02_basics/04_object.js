// const tinderUser = new Object() // singleton

const tinderUser = {} // non-singleton

// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isloggedIn = false

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));



const regularUser = {
    email: "somw@gmail.com",
    fullname: {
        userName: {
            firstname: "ashu",
            secondname: "ashish"
        }
    }
}

// console.log(regularUser.fullname.userName.firstname);


const obj1 =  {1: "a", 2: "b"}
const obj2 =  {3: "a", 4: "b"}
const obj3 =  {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2,obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

// de-structure of object

const {courseInstructor: instructor} = course

// console.log(courseInstructor);

console.log(instructor);


