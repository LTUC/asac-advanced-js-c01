'use strict';

const express = require('express');
// const {Customer} = require('../models/index');
const router = express.Router();

const {customerCollection} = require('../models/index.js');
const {Order} = require('../models/index.js');



// Routes
router.get('/customer',getCustomer);
// router.get('/customer/:id',getOneCustomer);
router.post('/customer',createCustomer);
router.get('/customerOrder',getCustomerOrder);

// localhost:3000/customer
async function getCustomer(req,res) {
    let customer = await customerCollection.readRecord();
    res.status(200).json(customer);
}

// localhost:3000/customer (body:{customerName:'razan'})
async function createCustomer(req,res) {
    let newCustomer = req.body;
    let customer = await customerCollection.createRecord(newCustomer);
    res.status(201).json(customer);
}

async function getCustomerOrder(req,res) {
    let customerOrder = await customerCollection.readWithOrders(Order);
    res.status(200).json(customerOrder);
}



module.exports = router;