function showCategories() {
  const categoriesKeys = Object.keys(categories); // ['phones', 'laptops']

  for (let key of categoriesKeys) {
    console.log(`
      Category: ${categories[key].title}\n
      key: ${key}
    `);
  }
}

function getCategoryName() {
  return prompt("Enter the category you want to buy in");
}

function showProducts() {
  for (let i = 0; i < products.length; i++) {
    console.log(`
      Id: #${i + 1}\n
      Name: ${products[i].name}\n
      Price: ${products[i].price} ${products[i].currency}
    `);
  }
}

function getValue(maxValue, message) {
  let value;
  do {
    value = parseInt(prompt(message));
  } while (value < 1 || value > maxValue ||isNaN(value));

  return value;
}

function calculatePrice() {
  let finalPrice = productAmount * selectedProduct.price;
  console.log(`The price is ${finalPrice} ${selectedProduct.currency}`);

  if (finalPrice > PRICE_TO_GET_DISCOUNT) {
    calculateDiscount(finalPrice);
  }
}

function calculateDiscount(finalPrice) {
  finalPrice *= (100 - DISCOUNT) / 100; // discount
  console.log(`And we give you the discount ${DISCOUNT}%\n
    So now, the final price is ${finalPrice} ${selectedProduct.currency}`);
}
