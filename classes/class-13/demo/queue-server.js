'use strict';
const io = require("socket.io")(3000);
const uuid = require("uuid").v4;

const msgQueue = {
    tasks: {
        // xyz: 'clean your room',
        // abc: 'eat your food',
        // qwa: 'make your bed',
    }
}
const family = io.of("/family");
family.on("connection", (socket) => {
    console.log("connected", socket.id);

    socket.on('new_task', (payload) => {
        const id = uuid();
        msgQueue.tasks[id] = payload;
        socket.emit('added', payload);//it will be sent to parent.js
        family.emit('task', { id: id, payload: msgQueue.tasks[id] });
        console.log('the queue before delete >>>>> ', msgQueue);
    });

    socket.on('get_all', () => {
        console.log('the child want to get all the tasks');
        Object.keys(msgQueue.tasks) // >>> ['xyz','abc','qwa']
            .forEach((key) => {
                socket.emit('task', { id: key, payload: msgQueue.tasks[key] })
            })
    });
    socket.on('received', (task) => {
        delete msgQueue.tasks[task.id];
        console.log('the queue after received >>>>> ', msgQueue);
    })
})