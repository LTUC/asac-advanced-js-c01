'use strict';

const { expect } = require('@jest/globals');
const LinkedList = require('../ll.js');

describe('testing Linked List', () => {
    it('test creating an LL instance', () => {
        const ll = new LinkedList();
        // expect(ll).toBeInstanceOf(LinkedList);
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull();    
    })
})

describe('insert to the beginning of the LL', () => {
    // we have two cases
    // 1. if the LL is empty
    it('add to an empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a'); // create a new node (value=a)
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();        

    })
    // 2. if the LL is NOT empty
    it('add to a non-empty LL',()=>{
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');
    })
})


describe('append to the end of the LL', () => {
    it('add to an empty LL', () => {
        const ll = new LinkedList();
        ll.append('a'); // create a new node (value=a)
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();        

    })
    // 2. if the LL is NOT empty
    it('add to a non-empty LL',()=>{
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('c');
        expect(ll.head.next.next.next).toBeNull();
    })
});
