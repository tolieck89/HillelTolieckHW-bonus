const MAX_AMOUNT = 10;
const PRICE_TO_GET_DISCOUNT = 20000;
const DISCOUNT = 1.5;

showCategories();
let selectedCategory = getCategoryName();
const products = categories[selectedCategory].products;
showProducts();
let productNumber = getValue(products.length, `Enter the product number you wanna buy (1-${products.length})`);
const selectedProduct = products[productNumber - 1];
const productAmount = getValue(MAX_AMOUNT, `Enter the product amount you wanna buy (1 - ${MAX_AMOUNT})`);
calculatePrice();
