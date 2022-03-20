'use strict';

const io = require('socket.io-client');

const host = 'http://localhost:3000';

const brainConnection = io.connect(host);
const healthConnection = io.connect(`${host}/health-system`);

// brainConnection.emit('light',{level:50});
// brainConnection.emit('light',{level:85});
brainConnection.emit('light',{level:95});

// healthConnection.emit('cold',{temp:5});
