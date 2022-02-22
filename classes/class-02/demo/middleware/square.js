'use strict';

function square(n) {
    return (req, res, next) => {
        if (typeof n == 'number') {
            // let z = req.params.id
            req.myNumber = n * n;
            next();
        } else {
            next(`${n} is not a number`)
        }
    }
}
module.exports = square;