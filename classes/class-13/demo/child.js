'use strict';
const client = require("socket.io-client");
const host = 'http://localhost:3000/family';
const socket = client.connect(host);

socket.emit('get_all');

socket.on('task', (task) => {
    console.log('child got this task and did it', task);
    socket.emit('received', task);
});