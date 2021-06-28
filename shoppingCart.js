const totalPrice = 100;
const totalQuantity = 15;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} was added to the cart`);
};

export { totalPrice, totalQuantity, cart };
