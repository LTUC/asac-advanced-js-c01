'use strict';

const { Sequelize, DataTypes } = require('sequelize'); // npm i pg sequelize
const customer = require('./customer.model.js');
const order = require('./order.model.js');

const Collection = require('./lib/collection.js');

//prepare the connection
// connect to our DB depending on the URI as an environmental variable
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL; // npm i sqlite3

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

let customerModel = customer(sequelize, DataTypes);
let orderModel = order(sequelize, DataTypes);

//relation
customerModel.hasMany(orderModel,{foreignKey:'customerId',sourceKey:'id'});
orderModel.belongsTo(customerModel,{foreignKey:'customerId',targetKey:'id'})

let customerCollect = new Collection(customerModel);
let orderCollect = new Collection(orderModel);

module.exports = {
  db: sequelize, //for real connection and will use it in index.js
  customerCollection: customerCollect, // for creating the table and will use it in our routes
  orderCollection: orderCollect, // for creating the table and will use it in our routes
  Order: orderModel
}