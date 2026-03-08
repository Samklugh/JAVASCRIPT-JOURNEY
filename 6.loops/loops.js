// 1. FOR LOOPS

// the syntax of a for loop is:
// for (initialization; condition; increment) {
    // code to be executed for each iteration
// }

for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// we can ommit the initiakization part if we have already initialized the variable before the loop:
let j = 0;
for (; j < 5; j++) {
  console.log(j); // 0, 1, 2, 3, 4
}

// we can omit the condition part if we want to create an infinite loop. In this case, we need to use a break statement to exit the loop:
let k = 0;
for (;;) {
    console.log(k); // 0, 1, 2, 3, 4
    k++;
    if (k >= 5) {
        break;
    }
}

// we can also omit the increment part if we want to control the increment inside the loop:
let l = 0;
for (; l < 5;) {
    console.log(l); // 0, 1, 2, 3, 4
    l++;
}



// declaring a variable with var and let inside a for loop:
for (var m = 0; m < 5; m++) {
    console.log(m); // 0, 1, 2, 3, 4
    }
console.log(m); // 5 (var is function-scoped)

for (let n = 0; n < 5; n++) {
    console.log(n); // 0, 1, 2, 3, 4
}
// console.log(n); // ReferenceError: n is not defined (let is block-scoped)


// 2. WHILE LOOPS

// the syntax of a while loop is:
// while (condition) {
    // code to be executed for each iteration
// }
let p = 0;
while (p < 5) {
    console.log(p); // 0, 1, 2, 3, 4
    p++;
}



// 3. DO...WHILE LOOPS

// the syntax of a do...while loop is:
// do {
// code to be executed for each iteration   
// } while (condition);
let q = 0;
do {
    console.log(q); // 0, 1, 2, 3, 4
    q++;
} while (q < 5);    

