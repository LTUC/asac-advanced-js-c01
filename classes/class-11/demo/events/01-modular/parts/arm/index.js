const eventEmitter = require('../../events-pool');

const armHandler = (payload) => {
  if(payload.percent >= 80) {
    console.log('Covering ears with arms');
  }
}

eventEmitter.on('scream', armHandler);