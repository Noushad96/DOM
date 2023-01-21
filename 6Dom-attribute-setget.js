// get and set attrubutes

// The [getAttribute()] method returns the value of an element's attribute.
// The [setAttribute()] method sets a new value to an attribute.

// Syntax
// element.getAttribute(name)

// get getAttribute
const mylink = document.querySelector("a");
console.log(mylink.getAttribute("href")); //#homelink
console.log(mylink.getAttribute("href").slice(1)); //homelink

// Syntax
// element.setAttribute(name, value)

// set setAttribute
// mylink.setAttribute("href", "https://codprog.com");
// console.log(mylink.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));
