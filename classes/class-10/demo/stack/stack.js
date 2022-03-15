'use strict';

class Stack {
    constructor() {
        this.storage = new Array();
        this.top = null;
    }

    pushItem(item) {
        this.storage.push(item);
        this.top=item;
    }

    peek(){
        return this.top;
    }

    popItem() {
        let poppedItem = this.storage.pop();
        this.top = this.storage[this.storage.length-1];
        return poppedItem;
    }
}

module.exports = Stack;