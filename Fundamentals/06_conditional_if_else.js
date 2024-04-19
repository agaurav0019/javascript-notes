// if-else

/*
Syntax

    if(somethng is true){
        do this;
    }else{
        do this;
    }

*/

// Example

const age = 18;

if(age>=18){
    console.log("You're eligible to get a driving license")
}else {
    console.log("Dude you're not elegible, wait until you turns 18")
};


// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote,
and improve it:
1. Print a nice output to the console,
saying who has
the higher BMI. The message can be either "Mark's BMI is higher than Jin's!" or "John's BMI is higher than Mark's!"
2. Use a template
string to include the BMI values is
the outputs. Example:
"Mark's BMI (28.3) is higher
than John's (23.9) !"

*/

const markMass = 78;
const markHeignt = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const calculateBmi = (mass, height)=>{
    const bmi = mass / height ** 2;
    return bmi;
}

const markBmi = calculateBmi(markMass, markHeignt);
const johnBmi = calculateBmi(johnMass, johnHeight);

console.log(`Mark has BMI of ${markBmi} and John has BMI of ${johnBmi}`);

if(markBmi>johnBmi){
    console.log("Mark has higher BMI than John");
}else if(markBmi < johnBmi){
    console.log("John has higher BMI than that of Mark");
} else {
    console.log("Both have equal BMI")
}