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

// Ask for second task title and description
let task2Title = prompt("Enter your second task title:");
while (!task2Title || task2Title.trim() === "") {
    task2Title = prompt("Please enter a title for your second task:");
}
task2Title = task2Title.trim();

let task2Descr = prompt("Enter your second task description:");
while (!task2Descr || task2Descr.trim() === "") {
    task2Descr = prompt("Please enter a description for your second task:");
}
task2Descr = task2Descr.trim();

// Get Task 2 status with validation
let task2Status;
do {
    task2Status = prompt("Enter Task 2 status (todo/doing/done):");
    if (task2Status) {
        task2Status = task2Status.toLowerCase();
    }
    if (task2Status !== "todo" && task2Status !== "doing" && task2Status !== "done") {
        alert("INVALID STATUS! Please enter only: todo, doing, or done");
    }
} while (task2Status !== "todo" && task2Status !== "doing" && task2Status !== "done");

// Show tasks in console
console.log("Your tasks:");
console.log("1. Task 1: " + task1Title + " - Status: " + task1Status);
console.log("2. Task 2: " + task2Title + " - Status: " + task2Status);

// Check if any tasks are done
if (task1Status === "done" || task2Status === "done") {
    console.log("Completed tasks:");
    if (task1Status === "done") console.log("- " + task1Title);
    if (task2Status === "done") console.log("- " + task2Title);
} else {
    console.log("No tasks completed, let's get to work!");
}

alert("Tasks saved! Check the console for details (Press F12 and go to Console tab)");