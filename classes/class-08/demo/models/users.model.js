'use strict';
require('dotenv').config();
const { sequelize, DataTypes } = require('./index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const API_SECRET = process.env.API_SECRET || 'some secret word';
const Users = sequelize.define('users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'writer', 'editor', 'user'),
        defaultValue: 'user',
    },
    token: {
        type: DataTypes.VIRTUAL
    },
    actions: {
        type: DataTypes.VIRTUAL,
        get() {
            const acl = {
                user: ['read'],
                writer: ['read', 'create'],
                editor: ['read', 'create', 'update'],
                admin: ['read', 'create', 'update', 'delete'],
            }
            return acl[this.role];
        }
    }
});
Users.authenticateBasic = async function (username, password) {
    const user = await this.findOne({ where: { username } });
    console.log('authenticateBasic userrrrrr>>', user);
    const valid = await bcrypt.compare(password, user.password);
    // console.log('authenticateBasic valid>>', valid);
    if (valid) {
        let newToken = jwt.sign({ username: user.username }, API_SECRET);
        user.token = newToken;
        // console.log('');
        return user;
    } else {
        throw new Error('Invalid User');
    }
}

Users.authenticateBearer = async function (token) {
    const parsedToken = jwt.verify(token, API_SECRET);
    const user = await this.findOne({ where: { username: parsedToken.username } });
    if (user) {
        return user;
    } else {
        throw new Error('Invalid Token');
    }
}
module.exports = Users;