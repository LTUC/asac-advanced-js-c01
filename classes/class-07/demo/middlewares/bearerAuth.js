'use strict';


module.exports = (UserModel) =>async (req,res,next)=>{
    if(req.headers['authorization']) {
        // 'Bearer token'
        let bearerHeaderParts= req.headers.authorization.split(' ');
        console.log('bearerHeaderParts >>> ',bearerHeaderParts); // ['Bearer','token']
        let token = bearerHeaderParts.pop(); //encoded(username:password)
        console.log('Token >>> ',token);
       
        UserModel.validateToken(token).then(user=>{
            req.user = user;
            next();
        }).catch(error=>next(`invalid user ${error}`));
    }
}