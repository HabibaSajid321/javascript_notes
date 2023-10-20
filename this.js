// object destructuring in js 
// arrays and objsects both allows de structuring 
const course = {
    coursename :"html",
    instructor : "habiba",
    price: "500" 
}
// course.price
const {instructor} = course
// this is how we can de-structure an object.
// console.log(instructor);

// in a scope or object how can we log things?
// using this keyword

const user = {
    username: "hashim",
    class:"10",
    Ag:"6516",
    welcomeMessage: function(){
        console.log(`${this.username}, welcome here`);
        // The this keyword is used to access the properties of the current object.
        console.log(this);  // this will print all the values
         
    }
}
// user.welcomeMessage()
// user.username = "hifa"
// user.welcomeMessage()

// here we define nothing so here this keyword returns an empty object{}
// Example
// console.log(this);

// in browser the global object is window object: for interview.

// this keyword will not work inside a function

// function myfunc(){
    // let username = "khizra"
    // console.log(this); // this will print global and other values 
    // console.log(this.username); // now it will results undefined and prints nothing.
// }
// myfunc()
// 
// 
// 
// but in arrow function this keyword will work

const arrowfunc =() =>{
// here this keyword will work
let name = "khizra"
console.log(this); //this will return empty object.{} 

}
arrowfunc()

// implicit return in arrow func
const newfunc = (num1,num2) => num1+num2;  // we dont need to write return keyword or {} here
console.log(newfunc(7,8));