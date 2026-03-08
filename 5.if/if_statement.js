// the syntax of an if statement is:

// if (condition) {
    // code to be executed if the condition is true
    
// }


let age = 18;
let text = "You can Not drive";

if (age >= 18) {
  text = "You can drive";
}

console.log(text); // You can drive



// NESTED IF STATEMENT

// the syntax of a nested if statement is:
// if (condition1) {
    // code to be executed if condition1 is true
    // if (condition2) {
        // code to be executed if condition2 is true
    // }
// }

let age1 = 16;
let country = "USA";
let text1 = "You can Not drive!";

if (country == "USA") {
  if (age1 >= 16) {
    text1 = "You can drive!";
  }
}

console.log(text1); // You can drive



// IF ELSE STATEMENT

// the syntax of an if else statement is:
// if (condition) {
    // code to be executed if the condition is true
// } else {
    // code to be executed if the condition is false
// }



let age2 = 15;
let text2 = "You can Not drive!";
if (age2 >= 18) {
  text2 = "You can drive!";
} else {
  text2 = "You can Not drive!";
}

console.log(text2); // You can Not drive!



// TENAARY OPERATOR

// the syntax of a ternary operator is:
// condition ? expressionIfTrue : expressionIfFalse;
let age3 = 20;
let text3 = age3 >= 18 ? "You can drive!" : "You can Not drive!";
console.log(text3); // You can drive!




// SWITCH STATEMENT

// the syntax of a switch statement is:
// switch (expression) {
    // case value1:
// code to be executed if expression === value1
    // break;
    // case value2:
// code to be executed if expression === value2
    // break;
    // ...
    // default:
// code to be executed if expression doesn't match any case
// }
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;  
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName); // Wednesday




// BOOLEAN LOGIC

// In JavaScript, a Boolean is a primitive data type that can only have one of two values:
//
// true or false
//
// // The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.
//
// the syntax of boolean logic is:
// condition1 && condition2 // AND operator
// condition1 || condition2 // OR operator
// !condition // NOT operator



// NOTE:

// Everything With a "Value" is True
// ---------------------------------------------------

// 100 is true
//
// 3.14 is true
//
// -15 is true
//
// true is true
//
// "Hello" is true
//
// "false" is true
//
// (7 + 1 + 3.14) is true

// Everything Without a "Value" is False
// ---------------------------------------------------
// 0 is false
//
// "" is false
//
// undefined is false
//
// null is false
//
// NaN is false
//
// false is false



// But booleans can also be defined as objects with the keyword new:

// let y = new Boolean(false);



// Warning
// Do not create Boolean objects.
// 
// The new keyword complicates the code and slows down execution speed.
// 
// Boolean objects can produce unexpected results: