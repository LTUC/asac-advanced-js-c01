'use strict';

const Node = require('../node.js');

describe('testing Node class', () => {
    it('test creating a Node instance with next and value',()=>{
        const value = 'anything';
        const node = new Node(value);
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    })
});
