// Difference Between var, let and const includes:
// 1. Scope:
//    - var: Function-scoped. Variables declared with var are accessible within the function they are declared in.
//    - let and const: Block-scoped. Variables declared with let and const are accessible only within the block they are declared in (e.g., within a loop, if statement, or function).

// 2. Hoisting:
//    - var: Variables declared with var are hoisted to the top of their scope and initialized with undefined. This means you can use a var variable before it is declared, but it will have the value undefined.
//    - let and const: Variables declared with let and const are also hoisted, but they are not initialized. This means you cannot use a let or const variable before it is declared, and doing so will result in a ReferenceError.        

// 3. Reassignment:
//    - var and let: Variables declared with var and let can be reassigned to new values.
//    - const: Variables declared with const cannot be reassigned. Once a value is assigned to a const variable, it cannot be changed. However, if the value is an object or an array, the properties of the object or the elements of the array can still be modified.

// 4. Redeclaration:
//     - var: Variables declared with var can be redeclared within the same scope without causing an error.
//     - let and const: Variables declared with let and const cannot be redeclared within the same scope. Attempting to redeclare a let or const variable will result in a SyntaxError.

// 5. Global Object Property:
//    - var: When a variable is declared with var in the global scope, it becomes a property of the global object (window in browsers).
//    - let and const: Variables declared with let and const do not become properties of the global object when declared in the global scope.

// In summary, var is function-scoped and can be redeclared and reassigned, while let and const are block-scoped, cannot be redeclared, and const cannot be reassigned. It is generally recommended to use let and const for better code clarity and to avoid unintended side effects.


// JavaScript has 8 Datatypes
// A JavaScript variable can hold 8 types of data:

// // 1. String: Represents textual data, enclosed in single or double quotes. Example: "Hello, World!"
// // 2. Number: Represents numeric values, including integers and floating-point numbers. Example: 42, 3.14
// // 3. Boolean: Represents a logical entity that can have two values: true or false. Example: true, false
// // 4. Null: Represents the intentional absence of any object value. It is a primitive value that represents "no value" or "empty value". Example: null
// // // 5. Undefined: Represents a variable that has been declared but has not been assigned a value. It is a primitive value that indicates the absence of a value. Example: undefined
// // 6. Symbol: Represents a unique and immutable value that can be used as an identifier for object properties. Example: Symbol('description')
// // 7. BigInt: Represents integers with arbitrary precision, allowing for the representation of very large integers. Example: 9007199254740991n
// // // 8. Object: Represents a collection of properties and methods. It is a complex data type that can hold multiple values and functions. Example: { name: "John", age: 30 }
// 
// // // In addition to these primitive data types, JavaScript also has a special type called "object" which can be used to create complex data structures such as arrays, functions, and custom objects.


// typeof is used to determine the type of a variable or an expression in JavaScript. It returns a string indicating the type of the operand. For example:
// let myVariable = "Hello, World!";
// console.log(typeof myVariable);