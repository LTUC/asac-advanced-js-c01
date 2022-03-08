'use strict';

const bcrypt = require('bcrypt');


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
        }
    })

    Users.authenticateBasic = async function (username,password) {
        try {
            const user = await this.findOne({where:{username:username}});
            const valid = await bcrypt.compare(password,user.password);
            if(valid) {
                // generate a new token
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

    return Users;
}


module.exports = UsersModel;