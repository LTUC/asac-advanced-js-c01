'use strict';

const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger.js')
const getAgent = require('./middleware/getAgent.js')
const square = require('./middleware/square.js');
const errorHandler = require('./handler/500.js')
const notFound = require('./handler/404.js')
const app = express();

// 1- Built-in Express middlewares - Application--level
app.use(express.json());
app.use(cors());

// 2- Application--level/Global custome middleware
app.use(logger);


// 3- Route-level Middleware
app.get('/test',getAgent,(req,res)=>{
    res.json({
        message:'test route',
        name: req.myName,
        type: req.reqType
    })
})

//  Route-level Configurable Middleware
app.get('/number',square(5),getAgent, (req,res)=>{
    res.status(200).send(`number route ${req.myNumber}`)
})

// app.get('/number/:id',square(6),getAgent, (req,res)=>{
//     res.status(200).send(`number route ${req.myNumber}`);
// })

app.get('/throwing-error',square('hi'),(req,res)=>{
    console.log('inside thrwoing-error handler');
    res.status(200).send(`number route ${req.myNumber}`)
})

app.get('/',(req,res)=>{
    res.send('home route')
})

app.get('/data',(req,res)=>{
    res.status(200).json({
        name: 'razan',
        email:'r.alquran@ltuc.com'
    })
})



app.use(errorHandler);
app.use('*',notFound);


function start(port) {
    app.listen(port,()=>{
        console.log(`running on port ${port}`)
    })
}

module.exports = {
    app: app,
    start: start
}

