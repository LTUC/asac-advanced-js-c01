'use strict';

const port = process.env.PORT || 3000;

const io = require('socket.io')(port);

// namespace/ segment
const healthSystem = io.of('/health-system'); //localhost:3000/health-system

// Global '/'
io.on('connection', (socket) => {
    console.log('CONNECTED ', socket.id);

    socket.on('light', payload => {
        io.emit('brightness', { brightness: payload.level }); // this will emit the 'brightness' event to all connected clients
    })

    socket.on('ssss', payload => {
        console.log('ssss');
    })
});


// namespace / segment
healthSystem.on('connection', (socket) => {
    console.log('CONNECTED to the health system ', socket.id);
    socket.on('cold', payload => {
        healthSystem.emit('flu-warning', payload); //this will emit the 'flu-warning' event to all the clients who are connected to the health-system (healthConnection) : nose
    })
})



