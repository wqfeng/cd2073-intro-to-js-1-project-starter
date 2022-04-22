/* Create 3 or more product objects using object literal notation 
   Each product should include four properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart (integer)
   - SKU: unique id for product (number)
   - image: picture of product (url string)
*/
const p1 = {
  name: "cherry",
  price: 10,
  quantity: 0,
  SKU: 1024,
  image: "../images/cherry.jpg",
};
const p2 = {
  name: "orange",
  price: 5,
  quantity: 0,
  SKU: 2048,
  image: "../images/orange.jpg",
};
const p3 = {
  name: "strawberry",
  price: 8,
  quantity: 0,
  SKU: 3333,
  image: "../images/strawberry.jpg",
};

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Create an array named productsArr and add all product object literals to array */
const productsArr = [p1, p2, p3];

/* Declare an empty array named cartArr to hold the items in the cart */
let cartArr = [];

// Helper function to get product
// Most recent product interacted with

// Gets the product from the SKU received from the frontend

/* Create a function named addToCart that takes in the product SKU as an argument
  - addToCart should get the correct product based on the SKU
  - addToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addToCart(sku) {
  const p = getProuct(sku);
  p.quantity += 1;
  if (!inCart(p, cartArr)) {
    cartArr.push(p);
  }
}

// help function
function getProuct(sku) {
  return productsArr.filter(({ SKU }) => sku === SKU)[0];
}
function inCart(product, cartArr) {
  return cartArr.filter(({ SKU }) => product.SKU === SKU).length > 0;
}

/* Create a function named increase that takes in the product SKU as an argument
  - increase should get the correct product based on the SKU
  - increase should then increase the product's quantity
*/
function increase(sku) {
  const p = getProuct(sku);
  p.quantity += 1;
}

/* Create a function named decrease that takes in the product SKU as an argument
  - decrease should get the correct product based on the SKU
  - decrease should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decrease(sku) {
  const p = getProuct(sku);
  if (p.quantity > 1) {
    p.quantity -= 1;
  } else {
    remove(sku);
  }
}

/* Create a function named remove that takes in the product SKU as an argument
  - remove should get the correct product based on the SKU
  - remove should update the product quantity to 0
  - remove should remove the product from the cart
*/
function remove(sku) {
  const p = getProuct(sku);
  p.quantity = 0;
  cartArr.splice(cartArr.indexOf(p), 1);
}

/* When paying, the user should be able to split their payment */
/* Create a global variable named totalPaid to store the current remaining balance */
let totalPaid = 0;

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  return cartArr.reduce(
    (pValue, cValue) => pValue + cValue.quantity * cValue.price,
    0
  );
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount) {
  return amount - cartTotal();
}

/* Place stand out suggestions here */

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/
module.exports = {
  productsArr,
  cartArr,
  addToCart,
  increase,
  decrease,
  remove,
  cartTotal,
  pay,
  // emptyCart,
  // currency,
};
