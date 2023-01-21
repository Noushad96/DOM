// Event   ==> Bubbling (Propagation) |  Capturing   | Delegation

// bubbling is opposite to capturing
// Beginning from the target and moving towards the top is the bubbling i.e. starting from the child to its parent, it moves straight upwards

// Event Bubble ==> target se uper ki taraf jayega
// Event capturing ==> uper se target ki taraf ayega

// console.log("hello world");

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Capturing events
// parents se target ki taraf jayega
child.addEventListener(
  "click",
  () => {
    console.log("capture !!!! child");
  },
  true
);
parent.addEventListener(
  "click",
  () => {
    console.log("capture !!!! parent");
  },
  true
);
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! document.body");
//   },
//   true
// );

///// not capture
// bubble event
// target se parent ki taraf jayega
child.addEventListener("click", () => {
  console.log("bubble child");
});
parent.addEventListener("click", () => {
  console.log("bubble parent");
});
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });

// ======= event delegation ================
// grandparent.addEventListener("click", (e) => {
//   console.log(e.target);
// });
