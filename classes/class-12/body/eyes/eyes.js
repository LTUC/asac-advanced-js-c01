'use strict';

const io = require('socket.io-client');

const host ='http://localhost:3000'; //Heroku-link

const brainConnection = io.connect(host);
// const 
brainConnection.on('brightness',payload=>{
    if(payload.brightness >=75) {
        console.log('Close your eyes');
    }
    brainConnection.emit('ssss');
})

// this wont be called
brainConnection.on('flu-warning',payload=>{
        console.log('eyes flu warning');
})