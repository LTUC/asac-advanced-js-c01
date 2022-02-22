'use strict';

const { expect } = require('@jest/globals');
const { afterEach } = require('jest-circus');
const logger = require('../middleware/logger.js');

describe('testing logger middleware',()=>{

    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();

    beforeEach(()=>{
        consoleSpy = jest.spyOn(console,'log').mockImplementation();
    })

    afterAll(()=>{
        consoleSpy.mockRestore();
    })

    it('test log',()=>{
        logger(req,res,next);
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('test next',()=>{
        logger(req,res,next);
        expect(next).toHaveBeenCalled();
    })
})