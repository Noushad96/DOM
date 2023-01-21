// get root node

const myrootNode = document.getRootNode();
console.log(myrootNode); //tell about rootNode
console.log(myrootNode.childNodes); // tell about the child of the myrootNode
console.log(myrootNode.childNodes[1]); // tell about the child of the myrootNode at index[1]

console.dir(myrootNode.childNodes[0]);
console.dir(myrootNode.childNodes[1]);

//  directly
console.log(myrootNode.childNodes[1].childNodes); //NodeList(3) [head, text, body]
console.log(myrootNode.childNodes[1].childNodes[1]); // Nodelist at index(1)= #text

// variable bana k child me jana
const htmlElementNode = myrootNode.childNodes[1];
console.log("htmlElementNode = ", htmlElementNode); // html
console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]
console.log(htmlElementNode.childNodes[0]); // NodeList at 0 index = head
console.log(htmlElementNode.childNodes[1]); // NodeList at 1 index = text(space)
console.log(htmlElementNode.childNodes[2]); // NodeList at 2 index = body

// ========= get the parent node =====
console.log("parentNode of htmlElementNode = ", htmlElementNode.parentNode);

const BodyElementNode = htmlElementNode.childNodes[2];
console.log("parentNode of BodyElementNode = ", BodyElementNode.parentNode); //html

// === sibling relation =======
const headElementNode = htmlElementNode.childNodes[0]; /// head
console.log("sibling relation = ", headElementNode.nextSibling); ///tex(space or next line space)
console.log("sibling relation = ", headElementNode.nextSibling.nextSibling); //body
console.log("sibling node relation = ", headElementNode.nextElementSibling); // textNode ko ignore krega bass element node ko lega

const tagNode = document.querySelector("h1");
const tagNode2 = document.querySelector("h2");
console.log("parentNode of h1tag node== ", tagNode.parentNode); // body
console.log("parentNode of h2tag node== ", tagNode2.parentNode); //div.container
console.log(
  "parentNode of parentNode of  h2tag node== ",
  tagNode2.parentNode.parentNode
); //output node => body
tagNode.style.color = "red";
tagNode.style.backgroundColor = "black";

tagNode2.style.color = "blue";
tagNode2.style.backgroundColor = "yellow";

const body = document.body;
console.log("body => ", body); /// output node => body
body.style.color = "green";
body.style.fontWeight = "bold";
body.style.fontSize = "25px";
body.style.backgroundColor = "yellow";
