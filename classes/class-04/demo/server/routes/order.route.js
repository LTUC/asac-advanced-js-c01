'use strict';

const express = require('express');
// const {Order} = require('../models/index');
const router = express.Router();

const {orderCollection} = require('../models/index.js')


// Routes
router.get('/order',getOrder);
// router.get('/order/:id',getOneOrder);
router.post('/order',createOrder);

// localhost:3000/order
async function getOrder(req,res) {
    let order = await orderCollection.readRecord();
    res.status(200).json(order);
}

// localhost:3000/order (body:{orderName:'razan'})
async function createOrder(req,res) {
    let newOrder = req.body;
    let order = await orderCollection.createRecord(newOrder);
    res.status(201).json(order);
}


module.exports = router;