// Event Delegation

// event delegation
// grandparent.addEventListener("click", (e) => {
//   console.log("target Delegation =>", e.target);
//   console.log("Event Delegation");
// });

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

console.log("todoinput => ", todoInput);

todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); // refresh krne se rok diya

  console.log("todoInput Value => ", todoInput.value); // todoInput ki value

  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = ""; // enter ya click krne k baad Inputform clear ho jaye
});

todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});
