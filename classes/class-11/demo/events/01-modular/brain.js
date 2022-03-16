'use strict';

const eventEmitter = require('./events-pool');

require('./parts/arm');
require('./parts/mouth');

setInterval(() => {
  let percent = Math.ceil(Math.random() * 100);
  eventEmitter.emit('scream', {percent})
}, 1000);
