let todos = ["Buy Detergent", "Get Milk", "Do Laundry"];

console.log("\nHello! Welcome to the To Do App.\n");
console.log(listItems(todos));

let input = prompt("What would you like to do? Commands: new, list, quit;").toLowerCase();

function listItems(arrayOfTodos) {
	let todoItemsListed = '\n********************\n';

	arrayOfTodos.forEach(function(item, index) {
		todoItemsListed += `${index + 1}: ${item}\n`;
	});

	todoItemsListed += '********************\n';

	return todoItemsListed;
}

function addItem() {
	todos.push(prompt("Add a To Do item"));
	console.log(listItems(todos));
}

function deleteItem() {
	let itemToDelete = (prompt(`You have ${todos.length} items. \nWhich item do you want to delete?`) - 1);
	let deleteItem = todos[itemToDelete];
	console.log(todos.splice(itemToDelete, 1));
	console.log(`\'${deleteItem}\' has been deleted\n` + listItems(todos));
}

// We use setTimeout because the HTML does not render until we are done with JS
setTimeout(function() {
	while (input !== "quit") {
		if (input === "list") {
			console.log(listItems(todos));
		} else if (input === "add") {
			addItem();
		} else if (input === "delete") {
			deleteItem();
		} else {
			alert("That's an invalid command")
		}
		input = prompt("What else would you like to do? \nCommands: list, add, delete, quit;");
	}

	console.log("\nGoodbye! Thanks for using the To Do App.\n");
	console.log(listItems(todos));
}, 500);