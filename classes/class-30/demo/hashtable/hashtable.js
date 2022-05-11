'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
            return;
        } 
        let current = this.head;
        while(current.next) {
            current = current.next
        }
        current.next = node;
    }
}

class HashMap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    hash(key) {
        // Razan >> 82+97+545 >> 350 >> (350*599)%size
        // let asciiSum = key.split('').reduce((acc,char)=>{
        //     return acc + char.charCodeAt();
        // },0);
        // let hashedKey = (asciiSum*599)%this.size;
        // return hashedKey;

        return key.split('').reduce((acc,char)=>{
            return acc + char.charCodeAt();
        },0) * 599 % this.size;
    }

    set(key,value) {
        // I want to store Razan,instructor
        let hashIdx = this.hash(key); // 3
        console.log({hashIdx}); //  console.log("hashIdx",hashIdx);
        if(!this.map[hashIdx]) {
            this.map[hashIdx] = new LinkedList();
        }
        // {key:Razan,value:instuctor}
        // {Razan:instructor}
        let entryData = {[key]:value};
        this.map[hashIdx].append(entryData);
    }
}

const hashmap01 = new HashMap(3);
hashmap01.set('Razan','Instructor');
hashmap01.set('Batool','TA');
hashmap01.set('Mohammad','Learner');
hashmap01.set('Salam','Learner');

console.log(hashmap01);
console.log(hashmap01.map[2]);
console.log(hashmap01.map[0]);
console.log(hashmap01.map[0]);
console.log(hashmap01.map[1]);


// buc 0: 
// buc 1: 
// buc 2: 
// buc 3: LL >> {Razan:"instructor"}, {Moh: "learner"}
// buc 4: 