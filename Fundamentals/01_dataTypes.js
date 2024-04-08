// 7 primitive data types
// first 4 of them are used more often

//  Number - Floating point numbers / used for decimals and integers
let age = 23;

// String - Sequence of Characters / used for texts
let firstName = "Javascript";

// Boolean: Logical type that can only be true or false / Used for taking decisions
let isWorkDone = true;

// Undefined: Value taken by a variable that is not yet defined (empty value)
let children;

// Null: Also means 'empty value'
// Symbol (ES2015): Value that is unique and cannot be changed.
// BigInt (ES2020): Larger integers than the Number type can hold

/* Javascript is dynamically typed language which means you don't have to manually define the
data type of the value stored in the variable, Data types are determined automatically */


/**********************************************************************************************************
***********************************************************************************************************/


// typeof operator is used for type checking and return the data type of the operand passed to it

console. log (typeof true);                 // Will return boolean
console. log(typeof isWorkDone);            // will return boolean
console. log (typeof 517);                  // will return number  
console. log(typeof 'Javascript');          // will return string


/**********************************************************************************************************
***********************************************************************************************************/


// If you're using a variable which is not defined, you'll get reference error of not defined
// uncomment next line and you'll see reference error after running the code, since we haven't defined this variable anywhere
// console.log(doYoLoveJs)


/**********************************************************************************************************
***********************************************************************************************************/


// variable defined with let can be reassigned 

let isJSFun = true;
console.log("Learning javascript is fun ", isJSFun);
console.log("typeOf isJsFun before reassigning value ",typeof isJSFun);

// Reassigning the value of isJSFun variable without redeclaring it also dynamic typecasting will work
isJSFun = "I love Js";
console.log(isJSFun);
console.log("typeOf isJsFun after reassigning value ",typeof isJSFun);


/**********************************************************************************************************
***********************************************************************************************************/


// Whenever we decalre an empty variable the value as well as type of the variable will be undefined

let name;
console.log("value inside the variable name", name);
console.log("type of empty varible name ", typeof name);


/**********************************************************************************************************
***********************************************************************************************************/


// A bug in javascript

/* 
    null has value as well as data type as null but when you try to check the data type of null it will print "object" 
    and it hasn't been corrected for the legacy reason.
*/

console.log("Type of null variable ", typeof null);         // will return object