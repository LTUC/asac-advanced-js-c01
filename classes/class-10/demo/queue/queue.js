'use strict';

// Queue >> FIFO/LILO

class Queue {
    constructor() {
        this.storage = new Array();
    }

    enqueue(item) {
        this.storage.push(item);
    }

    dequeue() {
        // to remove the first element
        this.storage.shift();
    }

    peek() {
        return this.storage[0];
    }
}

module.exports = Queue;