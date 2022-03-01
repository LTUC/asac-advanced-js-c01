'use strict';
// const {Order} = require('../index.js');


// CRUD operations
class Collection {
    constructor(model) {
        this.model = model;
    }

    async createRecord(obj) {
        console.log('ssssssssssssssssssss', this.model)
        try {
            // let newRecord= await this.model.create(obj);
            // return newRecord;

            return await this.model.create(obj);
        } catch (e) {
            console.error('error in creating a new record for model: ', this.model.name);
        }
    }

    async readRecord(id) {
        try {
            if (id) {
                return await this.model.findOne({ where: { id: id } })
            } else {
                return await this.model.findAll();
            }
        } catch (e) {
            console.error('error in reading record(s) for model: ', this.model.name);
        }
    }

    async readWithOrders(Order) {
        // console.log('dddddd',Order)

        try {
            return await this.model.findAll({ include: [Order] })
        } catch (e) {
            console.error('error in reading record and orders for model: ', this.model.name);
        }
    }

}

module.exports = Collection;