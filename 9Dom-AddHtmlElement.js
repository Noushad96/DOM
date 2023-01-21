// ========= Add HTML Element ============

// innerHTML to add html Element

const todoList = document.querySelector(".todo-list");

todoList.innerHTML = "<li> New Todo</li>";

todoList.innerHTML = todoList.innerHTML + "<li>New Todos</li>";
todoList.innerHTML += "<li>New Todos2</li>";
