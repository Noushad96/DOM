// change text
// textContent and innerText

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent); // Manage your tasks Hello //hidden text bhi dikhega console me
console.log(mainHeading.innerText); // Manage your tasks
mainHeading.textContent = "This is using text content";
console.log(mainHeading.textContent); //This is using text content
