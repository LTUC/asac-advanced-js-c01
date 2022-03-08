'use strict';

require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;


const UsersModel = (sequelize,DataTypes) =>{

    const Users = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
            // unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type:DataTypes.VIRTUAL
        }
    })

    Users.authenticateBasic = async function (username,password) {
        try {
            const user = await this.findOne({where:{username:username}});
            const valid = await bcrypt.compare(password,user.password);
            if(valid) {
                // generate a new token
                let newToken = jwt.sign({username:user.username},SECRET);
                user.token = newToken;
                return user;
            } else {
                console.log('user is not valid');
                // return;
                throw new Error('Invalid password');
            }
        } catch(error) {
           console.log('error ',error);
        }
    }

    Users.validateToken = async function(token) {
        const parsedToken = jwt.verify(token,SECRET);
        console.log('llllllll',parsedToken);
        const user = await this.findOne({where:{username:parsedToken.username}});
        if(user) {
            return user
        }
        throw new Error('invalid token')
    }

    return Users;
}


module.exports = UsersModel;