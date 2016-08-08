/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
tasks[0].markDone();

tasks.push(new ToDoList.HobbyTask("Practice origami"));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

var today = new Date(); //get current date and store in variable
console.log(today);
var tomorrow = new Date(); //set the variable tomorrow equal to the current date, but then reset it to today's date plus 1.
tomorrow.setDate(today.getDate() + 1);
console.log(tomorrow);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
console.log(nextDay);
tasks.push(new ToDoList.WorkTask(today, "Update blog.", "high", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world", "medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "medium", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Cleaning ceiling.", "low", people.loki));

console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("here are Thor's tasks: ");
for(var task of thorTasks){
  console.log(task);
}
