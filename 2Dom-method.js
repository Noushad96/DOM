// ========== DOM  method =========

// A [method] is an action you can do (like add or deleting an HTML element)

// A [property] is a value that you can get or set(like changing the content of an HTML element).

// ==============

// var x = (document.getElementById("demo").innerHTML = "Hello World from ID!");

// dono se print krega

document.getElementById("demo").innerHTML = "Hello World from ID!";

// getElementById is a method, while innerHTML is a property.

// [getElementById] method used id="demo" to find the element

// [innerHTML] property is useful for getting or replacing the content of HTML elements.


// ====================== DOM Document ================
//==================== Finding HTML Elements ===================
// Method	                                  Description
// document.getElementById(id)	              Find an element by element id
// document.getElementsByTagName(name)	      Find elements by tag name
// document.getElementsByClassName(name)	  Find elements by class name

// ================= Changing HTML Elements =============
// Property   	                              Description
// element.innerHTML =  new html content	  Change the inner HTML of an element
// element.attribute = new value        	  Change the attribute value of an HTML element
// element.style.property = new style         Change the style of an HTML element
// Method   	                              Description
// element.setAttribute(attribute, value)	  Change the attribute value of an HTML element

// ============== Adding and Deleting Elements ===============
// Method	                                  Description
// document.createElement(element)            Create an HTML element
// document.removeChild(element)              Remove an HTML element
// document.appendChild(element)              Add an HTML element
// document.replaceChild(new, old)            Replace an HTML element
// document.write(text)	                      Write into the HTML output stream

