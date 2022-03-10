'use strict';
const Users = require('../models/users.model');

function bearer(req, res, next) {

    console.log(req.headers.authorization);
    const bearerHeaderToken = req.headers.authorization.split(' ')[1]; // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRhbWltIiwiaWF0IjoxNjM2MzY2MDgwfQ.OhHLD4yRWs1LlTloBjIs0j-QYzi8LdoQDXUfPaO0BSg

    Users.authenticateBearer(bearerHeaderToken)
        .then(userData => {
            req.user = userData;
            next();
        }).catch(() => {
            next('Bearer token authentication error');
        });

}

module.exports = bearer;