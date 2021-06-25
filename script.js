// import  from './node_modules/lodash-es/_cloneBuffer.js';

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const nested = {
  test: [
    { product: 'bread', quantity: 3 },
    { product: 'bananas', quantity: 3 },
  ],
  user: { loggedIn: true },
};

const deepClone = cloneDeep(nested);
console.log(deepClone);
