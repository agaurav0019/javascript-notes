// Strings

const name = "Abhishek"
const job = "Sofware Developer"
const joiningYear = 2022;
const currentYear = 2024;

// Concatenating strings using + operator
const aboutMe = "I'm " + name + " a " + job + ", having an experince of " + (currentYear-joiningYear) + " years.";
console.log(aboutMe);


// Using Template literals
const aboutMeNew = `I'm ${name} a ${job}, having an experience of ${currentYear-joiningYear} years`;
console.log("Using template litereals for es6: ",aboutMeNew);


// Writing multiline strings with template literals
const multilineString = `Writing
multiple 
line 
with 
temp
literals`

console.log(multilineString)