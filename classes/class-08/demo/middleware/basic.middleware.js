'use strict';

const Users = require('../models/users.model');
const base64 = require('base-64');

function basic(req, res, next) {

    console.log('ssssss',req.headers.authorization);
    const encodedHeaders = req.headers.authorization.split(' ')[1]; // "Basic dGFtaW06cGl6emE="
    console.log({encodedHeaders});
    const [username, password] = base64.decode(encodedHeaders).split(':'); // spread operator
    // console.log('basic username pwd>>',username,password);

    Users.authenticateBasic(username, password)
        .then(validUser => {
            req.user = validUser;
            next();
        }).catch(err => { next('Invalid Login') })

}

module.exports = basic;