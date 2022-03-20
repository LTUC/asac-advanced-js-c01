'use strict';

// const { decodePayload } = require('engine.io-parser');
const io = require('socket.io-client');

const host = 'http://localhost:3000';

const socket = io.connect(host);

socket.emit('hello','Sherry');

socket.on('hi',(payload)=>{
    console.log('hub said hi');
    socket.emit('bye')
});

