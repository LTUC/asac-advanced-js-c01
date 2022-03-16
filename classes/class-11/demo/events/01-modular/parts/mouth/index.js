const eventEmitter = require('../../events-pool');

const mouthHandler = (payload) => {
  if(payload.percent >= 50) {
    console.log('I sense a scream');
  }
}

eventEmitter.on('scream', mouthHandler);