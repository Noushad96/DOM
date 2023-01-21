// ClassName

// const navitem = document.getElementsByClassName("nav-item"); // html collection dega
// console.log(navitem);
// console.log(navitem[1]); // 1 index ka li dega
// console.log(typeof navitem); // type batayega ==> object
// console.log(Array.isArray(navitem)); // array hai ya nhi batayega

// we cannot use forEach method to iterate
// for loop
// for in loop
// for of loop
// forEach to iterate

const navitemQ = document.querySelectorAll(".nav-item");
// console.log(navitemQ); /// give nodeList
// console.log(navitemQ[1]); // 1 index ka li dega
// console.log(typeof navitemQ); // type batayega ==> object
// console.log(Array.isArray(navitemQ)); // array hai ya nhi batayega

// ========= for loop ==============
// for (let i = 0; i < navitemQ.length; i++) {
//   console.log(navitemQ[i]);
//   const navitem = navitemQ[i];
//   // navitem.style.background = "#fff";
//   navitem.style.color = "#e00f0f";
//   navitem.style.fontWeight = "bold";
// }

// =============== for of loop ==============
// for (let navitem of navitemQ) {
//   navitem.style.backgroundColor = "red";
// }

// ============ forEach =========

navitemQ.forEach((navitem) => {
  navitem.style.backgroundColor = "green";
});

console.log(navitemQ);
