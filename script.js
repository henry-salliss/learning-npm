// import  from './node_modules/lodash-es/_cloneBuffer.js';

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash';

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

const state = {
  cart: [
    { product: 'cereal', quantity: 2 },
    { product: 'cookies', quantity: 8 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);
console.log('hello');

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const henry = new Person('Henry');
Promise.resolve('Test').then(x => console.log(x));

// Just importing polyfilled find method
import 'core-js/stable/array/find';

if (module.hot) {
  module.hot.accept();
}

// Polyfilling async functions
import 'regenerator-runtime/runtime';
