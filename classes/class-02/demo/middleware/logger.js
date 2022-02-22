'use strict';

const logger = (req,res,next) =>{
    // req.reqDate = new Date().toLocaleDateString();
    console.log('Logged @ ',req.reqDate);
    next();
}

module.exports = logger;