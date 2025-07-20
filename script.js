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

// Get Task 1 status with validation
let task1Status;
do {
    task1Status = prompt("Enter Task 1 status (todo/doing/done):");
    if (task1Status) {
        task1Status = task1Status.toLowerCase();
    }
    if (task1Status !== "todo" && task1Status !== "doing" && task1Status !== "done") {
        alert("INVALID STATUS! Please enter only: todo, doing, or done");
    }
} while (task1Status !== "todo" && task1Status !== "doing" && task1Status !== "done");