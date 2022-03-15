'use strict';

// Stack >> LIFO/FILO
const Stack = require('../stack.js');

describe('testing the stack', () => {
    it('test creaing a Stack',()=>{
        let newStack = new Stack();
        expect(newStack instanceof Stack).toBeTruthy();
        expect(newStack.peek()).toBeNull();
    });

    // it('test the peek',()=>{
    //     let newStack = new Stack();
    //     expect(newStack.peek()).toBeNull();
    // })

    it('testing push to the stack',()=>{
        let newStack = new Stack();
        newStack.pushItem(1);
        expect(newStack.top).toEqual(1)
        newStack.pushItem(2);
        expect(newStack.top).toEqual(2)
    })

    it('testing pop from the stack',()=>{
        let newStack = new Stack();
        newStack.pushItem(1);
        newStack.pushItem(2);
        newStack.pushItem(3);
        expect(newStack.popItem()).toEqual(3);
        expect(newStack.popItem()).toEqual(2);
        expect(newStack.popItem()).toEqual(1);
    })
});
