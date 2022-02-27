'use strict';

const {Sequelize, DataTypes} = require('sequelize'); // npm i pg sequelize
const people = require('./people.model.js');

//prepare the connection
const POSTGRES_URL = process.env.DATABASE_URL;

let sequelizeOptions =  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }

let sequelize = new Sequelize(POSTGRES_URL,sequelizeOptions);


module.exports = {
    db: sequelize, //for real connection and will use it in index.js
    People: people(sequelize,DataTypes)// for creating the table and will use it in our routes
}