'use strict';

const express = require('express');
const {People} = require('../models/index');
const router = express.Router();


// Routes
router.get('/people',getPeople);
router.post('/people',createPerson);
router.get('/people/:id',getOnePerson);

// localhost:3000/people
async function getPeople(req,res) {
    let people = await People.findAll();
    res.status(200).json(people);
}

// localhost:3000/people (body:{firstName:'razan',lastName:'quran'})
async function createPerson(req,res) {
    let newPerson = req.body;
    let person = await People.create(newPerson);
    res.status(201).json(person);
}

// localhost:3000/people/2 
async function getOnePerson(req,res) {
    let pid = parseInt(req.params.id);
    let person = await People.findOne({where:{id:pid}})
    res.json(person);
}

module.exports = router;