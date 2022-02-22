'use strict';

module.exports = (req,res,next) =>{
    req.myName = 'Razan';
    req.reqType = req.method;
    next();
}