'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');

const { Sequelize, DataTypes } = require('sequelize');

const app = express();

app.use(express.json());

const DATABASE_URL = `postgresql://razanatallah:12345@localhost:5432/class6demo`;

const sequelize = new Sequelize(DATABASE_URL, {});

const Users = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
        // unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


app.post('/signup', signupFunc);
app.post('/signin',signinFunc);

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
async function signinFunc(req,res) {
    if(req.headers['authorization']) {
        let basicHeaderParts= req.headers.authorization.split(' ');
        console.log('basicHeaderParts >>> ',basicHeaderParts);
        let encodedPart = basicHeaderParts.pop(); //encoded(username:password)
        console.log('encodedPart >>> ',encodedPart);
        let decoded = base64.decode(encodedPart); //username:password
        console.log('decoded >>> ',decoded);
        let [username,password]= decoded.split(':'); //[username: password]
        // console.log('username');
        try {
            const user = await Users.findOne({where:{username:username}});
            const valid = await bcrypt.compare(password,user.password);
            if(valid) {
                res.status(200).json({username:username})
            } else {
                res.send('user is not valid')
            }
        } catch(error) {
            res.send(error)
        }
    }
}

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log(`server is ready and listening`)
    })
})

