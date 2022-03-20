'use strict';

const io = require('socket.io-client');

const host ='http://localhost:3000'; //Heroku-link

const brainConnection = io.connect(host);

brainConnection.on('brightness',payload=>{
    if(payload.brightness >=90) {
        console.log('Cover your eyes');
    }
})


