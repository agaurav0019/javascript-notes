// let, const and var are used to declare variables
// let and const were introuced in ES6 while var is the old way of declaring variables.


/**********************************************************************************************************/

// let keyword is used to declare variables that can change later (Reassigning the value) {Block Scope}
// Ex-1:
let year;
console.log("value of year ", year)                     // will return undefined since no value is assigned

// Assigning the value without redeclaring (Note: dynamic typecasting will come in to picture)
year = 2024;
console.log("value of year ", year)                     // will return 2024

// Ex-2:
let name = "Abhishek";
console.log("My name is ", name);                       // My name is  Abhishek

// reassigning the vlaue of name
name = "Abhishek Gaurav";
console.log("My name is ", name);                       // My name is  Abhishek Gaurav


/**********************************************************************************************************/


// const keyword is used to declare the variable that are not supposed to change in future {Block Scope}
// For const we have to declare as well as initialize the value to the variable at the time of declaration

const birthYear = 2024;                         // Declaration as well as initialization with 2024
console.log("Birth year ", birthYear);

// Will throw error if not initialized... uncomment the next line to see error
// const job;                      // syntax error: missing initializer in const declaration


/**********************************************************************************************************/


// var is older way of declaring variable that can be changed later (Reassigning value) {functional scope}
var job = "programmer";
job = "teacher"