'use strict';
require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('./models/users.model');
const bearer = require('./middleware/bearer.middleware');
const basic = require('./middleware/basic.middleware');
const acl = require('./middleware/acl.middleware');
const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 5);
        const record = await Users.create(req.body);
        res.status(201).json(record);
    } catch (error) {
        res.status(403).send("Error occurred");
    }
});

app.get('/user', bearer, (req, res) => {
    res.json({
        'message': 'Correct Login',
        'user': req.user
    });
});


app.post('/signin', basic, (req, res) => {
    res.status(200).json(req.user);
});


app.get('/img', bearer, acl('read'), (req, res) => {
    res.send('you can read this image');
});
app.post('/img', bearer, acl('create'), (req, res) => {
    res.send('new image was created');
});
app.put('/img', bearer, acl('update'), (req, res) => {
    res.send('image updated');
});
app.delete('/img', bearer, acl('delete'), (req, res) => {
    res.send('image deleted');
});

module.exports = app;