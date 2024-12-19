// Create an empty array to represent the stack
let groceryStack = [];

// Function to check if the stack is empty and return the value
function peek() {
    if (groceryStack.length === 0) {
        return "Stack is empty";
    }
    return groceryStack[groceryStack.length - 1];
}

// Function to push a new item onto the stack
function push(item) {
    groceryStack.push(item);  // Add the item to the end of the array (top of the stack)
    console.log("Stack after push: ", groceryStack);  // Print the stack
}

// Function to pop the last item from the stack
function pop() {
    if (groceryStack.length === 0) {
        console.log("Stack is empty, cannot pop.");
        return;
    }
    let poppedItem = groceryStack.pop();  // Remove the last item from the array (top of the stack)
    console.log("Popped item: " + poppedItem);  // Print the popped item
    console.log("Stack after pop: ", groceryStack);  // Print the updated stack
}

// Function to handle user input and add grocery items
function addGroceryItems() {
    for (let i = 0; i < 5; i++) {
        let item = prompt("Enter a grocery item:");  // Get input from user
        push(item);  // Add the item to the stack
    }
}

// Emulate the stack operations
addGroceryItems();  // Add 5 grocery items

// Demonstrating peek and pop operations
console.log("Peek the top item: " + peek());  // Check the item at the top of the stack
pop();  // Pop the top item
console.log("Peek after pop: " + peek());  // Check the new top item after pop
