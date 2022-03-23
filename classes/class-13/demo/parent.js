'use strict';
const client = require("socket.io-client");
const host = "http://localhost:3000/family";
const socket = client.connect(host);

// socket.emit('new_task', 'clean your room');
// socket.emit('new_task', 'eat your food');
// socket.emit('new_task', 'make your bed');
// socket.emit('new_task', 'go to school');

// if we have more than one task
// const tasks = ['clean your room', 'eat your food', 'make your bed', 'go to school'];

// tasks.forEach((task) => {
//     socket.emit('new_task', task);
// })


// console.log('the process.argv >>>> ', process.argv);
// [
//     '/home/shihab/.nvm/versions/node/v12.18.3/bin/node',
//     '/home/shihab/ltuc/class13/demo/parent.js',
//     'clean your room'
// ]

// const value = process.argv.pop();//node parent.js 'eat your food'
// const value2 = process.argv.splice(2)[0];//node parent.js 'eat your food'

const value3 = process.argv.splice(2); //node parent.js 'eat your food' 'go to school'
// value3 >>> ['eat your food', 'go to school']
value3.forEach((task) => {
    socket.emit('new_task', task);
})

// console.log(value);

// socket.emit('new_task', value);

socket.on('added', (payload) => {
    console.log('thank you for adding ', payload);
    // socket.disconnect();// this is not a mandatory
})