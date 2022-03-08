'use strict';
const base64 = require('base-64');


module.exports = (UserModel) => (req,res,next)=>{
    if(req.headers['authorization']) {
        let basicHeaderParts= req.headers.authorization.split(' ');
        console.log('basicHeaderParts >>> ',basicHeaderParts);
        let encodedPart = basicHeaderParts.pop(); //encoded(username:password)
        console.log('encodedPart >>> ',encodedPart);
        let decoded = base64.decode(encodedPart); //username:password
        console.log('decoded >>> ',decoded);
        let [username,password]= decoded.split(':'); //[username: password]
        // console.log('username');
       
        // let validUser =  UserModel.authenticateBasic(username,password);
        // req.user = validUser;
        // next();

        UserModel.authenticateBasic(username,password).then(validUser=>{
            req.user = validUser;
            next();
        }).catch(error=>next(`invalid user ${error}`));
    }
}