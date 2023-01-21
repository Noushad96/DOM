// all about class manipulation

const sectionToDo = document.querySelector(".section-todo");
console.log(sectionToDo);
console.log(sectionToDo.classList);

// add class in html using js
sectionToDo.classList.add("bg-dark");
console.log(sectionToDo.classList);

//  remove a class from html using js
const ans = sectionToDo.classList.contains("container");
console.log("check [container] class hai ya nhi ==> ", ans);

sectionToDo.classList.remove("container");
const ans2 = sectionToDo.classList.contains("container");
console.log("check [container] class hai ya nhi ==> ", ans2);

// =========  toggle =========
// ager class me {bg-dark } hai to remove
// class me {bg-dark } nhi hai to add krega
sectionToDo.classList.toggle("bg-dark");
