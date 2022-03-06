'use strict';

// Encoding: it has nothing to do with security
// encode the username and password

const base64 = require('base-64');
const bcrypt = require('bcrypt');

// const username = 'neveen';
// const password = 'test123';

// const encoded = base64.encode(`${username}:${password}`);

// // console.log({encoded});
// console.log(`Basic ${encoded}`); //Basic bmV2ZWVuOnRlc3QxMjM=


// const decoded = base64.decode(encoded);
// console.log(`decoded ${decoded}`); // decoded neveen:test123


////////////////////
// Hashing Encryotion >> security
const password2 = 'test1234';
encrypt(password2);

async function encrypt(text) {
    console.log('before hashing >>> ', text);

    let hashed = await bcrypt.hash(text,5); // 5 : cost factot/complexity level

    console.log('after hashing >>> ',hashed);

    let valid = await bcrypt.compare(text,hashed);

    console.log('valid >>> ',valid);


    // let p1 = `$2b$05$Tt1nCTPeIc/kCjtybWBJN.kjOa820MAExL9rD5qllB4g6BVYDmt32`;
    // let valid1 = await bcrypt.compare(text,p1);
    // console.log('valid1 >>> ',valid1)


    // let p2 = `$2b$05$z4ea/46HMmLxonXriO5YUuBvzxH/Gkie6d814YaK/mVUiSGdoVR9y`;
    // let valid2 = await bcrypt.compare(text,p2);
    // console.log('valid2 >>> ',valid2)

    // let p3 = `$2b$05$i/8I.V8kkkxfR0sTu7AOw/SuukUVPx7C.q668c7EheDqBx1H5JYYaSSi`;
    // let valid3 = await bcrypt.compare(text,p3);
    // console.log('valid3 >>> ',valid3)

}





