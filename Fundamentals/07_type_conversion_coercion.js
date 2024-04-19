//  Type conversion is when we manually convert from one type to another
// Type coercion is when Javascript automatically convert types behind the scene

// Type Conversion

const inputYear = '1991'            // String
console.log(inputYear + 18 )        // return '199118'

// converting string into number by adding Number() before the variable

console.log(Number(inputYear) +18)              // returns 2009, first will conver string into number and then add

//  ** But it will not conver the original variable's type, it remains the same
console.log(inputYear + 10)                 // returns '199110', since input's variable's type remains string

// Convertin to number when it is not a number, will return NaN (Not a Number)
console.log(Number("Abhishek"))             // Nan
console.log(typeof NaN)                    // will return number (NaN is invalid number)

// number into string
console.log(String(23) + 11)                // Will return '2311'


// Type Coercion

console.log("I'm " + 2 + 3 + " years old.")         // The + operator triggers the coercion to a string, "I'm 23 years old."

// Also not all the operator do the type coercion to strings
console.log("23"-'10'-3)                            // will return 10 (23-10-3)
console.log("23"*"2")                               // will return 46