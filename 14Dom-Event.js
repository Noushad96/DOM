// Event ==> kuch kaam hona

// HTML events are "things" that happen to HTML elements
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.

// intro to events

// click
// event add karne ke tarike hai

// Syntax
// <element event='some JavaScript'>

const btn = document.querySelector(".btn-headline");
// method --- addEventListener

function clickMe() {
  console.log("you clicked me !!!!!");
}
btn.addEventListener("click", clickMe);

btn.addEventListener("click", function () {
  console.log("you clicked me inside function !!!!");
});

btn.addEventListener("click", () => {
  console.log("arrow function !!!");
});
