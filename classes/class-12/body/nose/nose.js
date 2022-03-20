'use strict';

const io = require('socket.io-client');

const host ='http://localhost:3000/health-system'; //Heroku-link

const healthConnection = io.connect(host);

healthConnection.on('flu-warning',payload=>{
    console.log('running nose xD',payload);
})
