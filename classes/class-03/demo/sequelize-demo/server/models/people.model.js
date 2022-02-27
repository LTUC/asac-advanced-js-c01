'use strict';

const People = (sequelize, DataTypes) => sequelize.define('people', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
    }
})

module.exports = People;