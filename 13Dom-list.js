// Static  vs  live  list

// ===== static list  ====
// querySelectorAll hume static list degi

const listItem = document.querySelector(".todo-list li");
const listItemAll = document.querySelectorAll(".todo-list li");
console.log(listItem);
console.log(listItemAll);

const thirdLi = document.createElement("li");
thirdLi.textContent = "item 3";
const ul1 = document.querySelector(".todo-list"); // jo add kiya wo display hoga
ul1.append(thirdLi);
console.log(listItemAll); //but nodelist me nhi dikhega(console me)

// ======== live-List=========
// getElementsBysomething hume live-List degi

const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems);
