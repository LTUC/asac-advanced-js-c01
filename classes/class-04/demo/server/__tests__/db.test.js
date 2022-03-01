'use strict';
const server = require('../server');
const supertest = require('supertest');
const request = supertest(server.app);
const { db } = require('../models/index.js');

beforeAll(async () => {
    await db.sync();
});
afterAll(async () => {
    await db.drop();
});

describe('testing db routesr', () => {

    it('can get list of records', async () => {
        const response = await request.get('/customer');
        expect(response.status).toBe(200);
        // expect(Array.isArray(response.body)).toBeTruthy();
        // expect(response.body.length).toEqual(1);
    });

});
