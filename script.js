// Javascript script
console.log("Welcome to the Task System!");

// Prompt the user to enter the title and description
let task1Title = prompt("Enter your first task title:");
while (!task1Title || task1Title.trim() === "") {
    task1Title = prompt("Please enter a title for your first task:");
}
task1Title = task1Title.trim();

let task1Descr = prompt("Enter your first task description:");
while (!task1Descr || task1Descr.trim() === "") {
    task1Descr = prompt("Please enter a description for your first task:");
}
task1Descr = task1Descr.trim();