'use strict';

const Customer = (sequelize, DataTypes) => sequelize.define('customer', {
    customerName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Customer;