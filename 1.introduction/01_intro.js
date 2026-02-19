// What Can JavaScript Do?
// JavaScript is the programming language of the web.

// It can calculate, manipulate and validate data.

// It can update and change both HTML and CSS.



// JavaScript Can Change HTML Content
// 
// One of many JavaScript HTML methods is getElementById().
// 
// // The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":


// <!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

</body>
</html>



// JavaScript Can Change HTML Attribute Values

// In this example JavaScript changes the value of the src (source) attribute of an <img> tag in exercise 1.2.html:
// document.getElementById('demo').innerHTML = 'Hello JavaScript';




// JavaScript Can Change HTML Styles (CSS)

// Changing the style of an HTML element, is a variant of changing an HTML attribute:
// 
// Example
// document.getElementById("demo").style.fontSize = "35px";
// 


// JavaScript Can Hide HTML Elements

// Hiding HTML elements can be done by changing the display style:

// Example
// document.getElementById("demo").style.display = "none";



// JavaScript Can Show HTML Elements
// 
// Showing hidden HTML elements can also be done by changing the display style:
// 
// Example
// document.getElementById("demo").style.display = "block";




// The <script> Tag
// 
// In HTML, JavaScript code is inserted between <script> and </script> tags.
// 
// Example
{/* <script> */}
{/* document.getElementById("demo").innerHTML = "My First JavaScript"; */}
{/* </script> */}



// JavaScript Functions and Events
// // A JavaScript function is a block of JavaScript code, that can be executed when "called" for.
// 
// // For example, a function can be called when an event occurs, like when the user clicks a button.



// JavaScript in <head> or <body>
// You can place any number of scripts in an HTML document.
// 
// // Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.
// 




// JavaScript in <body>
// 
// In this example, a JavaScript function is placed in the <body> section of an HTML page.
// 
// The function is invoked (called) when a button is clicked:



// External JavaScript
// Scripts can also be placed in external files:
// 
// External file: myScript.js
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Paragraph changed.";
// }
// External scripts are practical when the same code is used in many different web pages.
// 
// JavaScript files have the file extension .js.
// 
// // To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:
// 
// Example
{/* <script src="myScript.js"></script> */}





// External JavaScript Advantages
// Placing scripts in external files has some advantages:
// 
// It separates HTML and code
// It makes HTML and JavaScript easier to read and maintain
// Cached JavaScript files can speed up page loads
// To add several script files to one page  - use several script tags:

{/* <script src="myScript1.js"></script> */}
{/* <script src="myScript2.js"></script> */}



// External References
// An external script can be referenced in 3 different ways:
// 
// With a full URL (a full web address)
// With a file path (like /js/)
// Without any path
// This example uses a full URL to link to myScript.js:
// 
// Example
{/* <script src="https://www.w3schools.com/js/myScript.js"></script> */}
// 
// This example uses a file path to link to myScript.js:
// 
// Example
{/* <script src="/js/myScript.js"></script> */}
// 
// This example uses no path to link to myScript.js:
// 
// Example
{/* <script src="myScript.js"></script */}