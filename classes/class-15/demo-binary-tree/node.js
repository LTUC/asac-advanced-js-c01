'use strict';

class Node {
    constructor(value, left = null, right=null) { //right and left are null by default
        this.value = value;
        this.left= left;
        this.right = right;
    }
}

module.exports = Node;

