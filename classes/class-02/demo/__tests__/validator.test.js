const { expect } = require('@jest/globals');
const validatorMiddleware = require('../middleware/validator.js');

describe('testing validator middleware',()=>{
    it('reject reqs without a name',()=>{
        let req = {query:{}};
        let res = {};
        let next = jest.fn();
        validatorMiddleware(req,res,next);
        expect(next).toHaveBeenCalledWith('Name is required!!')
    });

    it('allows reqs with a name',()=>{
        let req = {query:{name:'sherry'}};
        let res = {};
        let next = jest.fn();
        validatorMiddleware(req,res,next);
        expect(next).toHaveBeenCalledWith();
    });

})