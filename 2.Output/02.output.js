// JavaScript Display Possibilities
// 
// JavaScript can "display" data in different ways:
// 
// Writing into an HTML element, using innerHTML or innerText
// Writing into the HTML output using document.write()
// Writing into an alert box, using window.alert()
// Writing into the browser console, using console.log()



// Using innerHTML
// 
// To access an HTML element, you can use the document.getElementById(id) method.
// 
// Use the id attribute to identify the HTML element.
// 
// Then use the innerHTML property to change the HTML content of the HTML element:




// Using innerText
// To access an HTML element, use the document.getElementById(id) method.
// 
// Then use the innerText property to change the inner text of the HTML element:



// Note
// Use innerHTML when you want to change an HTML element.
// 
// Use innerText when you only want to change the plain text.



// Using document.write()
// 
// For testing purposes, it is convenient to use document.write():

// note: Using document.write() after an HTML document is loaded, will delete all existing HTML:



// Using window.alert()
// 
// You can use an alert box to display data:

// You can skip the window keyword.
// 
// // // In JavaScript, the window object is the global scope object. This means that variables, properties, and methods by default belong to the window object. This also means that specifying the window keyword is optional: