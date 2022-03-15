const Stack = require('./stack.js');

const newStack = new Stack();

newStack.pushItem(1);
newStack.pushItem(2);
newStack.pushItem(3);

console.log(newStack.peek()); // 3

newStack.popItem();

console.log(newStack.peek()); // 2