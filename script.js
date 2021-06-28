// import  from './node_modules/lodash-es/_cloneBuffer.js';

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const nested = {
  test: [
    { product: 'bread', quantity: 3 },
    { product: 'bananas', quantity: 3 },
  ],
  user: { loggedIn: true },
};

const deepClone = cloneDeep(nested);
console.log(deepClone);

import { totalPrice, totalQuantity, addToCart } from './shoppingCart.js';

addToCart('Bread', 2);

if (module.hot) {
  module.hot.accept();
}
