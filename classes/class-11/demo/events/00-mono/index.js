'use strict';

const Events = require('events');
const eventEmitter = new Events();

eventEmitter.on('scream', screamHandler);

function screamHandler(payload) {
  if(payload.percent >= 60) {
    console.log('I sense a scream');
  } else {
    console.log('less than 60')
  }
}


setInterval(() => {
  let percent = Math.ceil(Math.random() * 100);
  eventEmitter.emit('scream', {percent});
}, 1000);
