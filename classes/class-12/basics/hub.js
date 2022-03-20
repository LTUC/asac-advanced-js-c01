'use strict';

const port = process.env.PORT || 3000;
const socket = require('socket.io');
// const socket = require('socket.io')(port);


// create a connection on port 3000
const io = socket(port);

// "connection" event 

// Global hub "/"
io.on('connection',(socket2)=>{
    console.log(`Welcome, your socket id is: `,socket2.id);

    socket2.on('hello',(payload)=>{
        console.log('The hub heard the hello event');
        console.log('hello ', payload);
        io.emit('hi');
    });

    socket2.on('bye',payload=>{
        console.log('the server said bye');
    })
});





