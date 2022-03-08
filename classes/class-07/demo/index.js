'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const Users = require('./models/user.model');
const basicAuth = require('./middlewares/basicAuth')
const bearerAuth = require('./middlewares/bearerAuth')

const { Sequelize, DataTypes } = require('sequelize');

const app = express();

app.use(express.json());

const DATABASE_URL = `postgresql://razanatallah:12345@localhost:5432/class6demo`;

const sequelize = new Sequelize(DATABASE_URL, {});

const UserModel = Users(sequelize, DataTypes);


app.post('/signup', signupFunc);
app.post('/signin', basicAuth(UserModel), signinHandler);
app.get('/user', bearerAuth(UserModel), userHandler)

// localhost:3000/signup >> body{username:'razan',password:'test123'}
async function signupFunc(req, res) {
    let { username, password } = req.body;
    console.log(`${username} and ${password}`);
    try {
        let hashedPassword = await bcrypt.hash(password, 5);
        console.log('after hashing >>> ', hashedPassword)
        const newUser = await Users.create({
            username: username,
            password: hashedPassword
        })
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error)
    }
}

// localhost:3000/sigin >> Authorization >> 'Basic encoded(username:password)'
function signinHandler(req, res) {
    res.status(200).json(req.user);
}

function userHandler(req, res) {
    // send the user information to the client & create new repo
    res.status(200).json(req.user);

}

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log(`server is ready and listening`)
    })
})

