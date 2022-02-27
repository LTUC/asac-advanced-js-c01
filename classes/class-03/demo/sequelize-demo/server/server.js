'use strict';

// 1st level packages -> we did not install anything
// 3rd party packages
const express = require('express');
const cors = require('cors');
// local modules
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');
const logger = require('./middlewares/logger');
const peopleRoutes = require('./routes/people.route.js')

const app = express();

// Global Middlewares
app.use(express.json()); // access the body
app.use(cors()); //install the package
app.use(logger);
app.use(peopleRoutes);


function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}

app.use('/',(req,res)=>{
    res.send('server is alive')
})

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}