'use strict';

const Order = (sequelize, DataTypes) => sequelize.define('order', {
    orderName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Order;