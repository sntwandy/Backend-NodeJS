const util = require('util');

const helloPluto = util.deprecate( () => {
  console.log('Hello Pluto');
}, 'Pluto is deprecated, is not a planet anymore');

helloPluto();