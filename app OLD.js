const categories = {
  phones: {
    title: 'Phones',
    products: [
      {
        name: 'iPhone',
        description: 'this is an apple phone',
        price: 2000,
        currency: 'USD',
      },
      {
        name: 'Samsung Galaxy S25',
        description: 'this is another phone',
        price: 2500,
        currency: 'USD',
      },
    ],
  },
  laptops: {
    title: 'Laptops',
    products: [
      {
        name: 'Macbook',
        description: '.......',
        price: 3000,
        currency: 'USD',
      },
      {
        name: 'Dell XPS',
        description: '.....',
        price: 2500,
        currency: 'USD',
      },
    ],
  },
};

const MAX_AMOUNT = 10;
const PRICE_TO_GET_DISCOUNT = 20000;
const DISCOUNT = 1.5; // 3%

// show categories

const categoriesKeys = Object.keys(categories); // ['phones', 'laptops']

for (let key of categoriesKeys) {
  console.log(`
    Category: ${categories[key].title}\n
    key: ${key}
  `)
}

// Get category name
let selectedCategory = prompt('Enter the category you want to buy in');

// identify products by category
const products = categories[selectedCategory].products;

// show products
for (let i = 0; i < products.length; i++) {
  console.log(`
    Id: #${i+1}\n
    Name: ${products[i].name}\n
    Price: ${products[i].price} ${products[i].currency}
  `);  
}

// Get the product user want to buy
let productNumber;
do {
  productNumber = parseInt(prompt(`Enter the product number you wanna buy (1-${products.length})`));
} while(productNumber < 1 || productNumber > products.length || isNaN(productNumber));

const selectedProduct = products[productNumber - 1];

// Get the amount of products user want to buy
let productAmount;
do {
  productAmount = parseInt(prompt(`Enter the product amount you wanna buy (1 - ${MAX_AMOUNT})`));
} while(productAmount < 1 || productAmount > MAX_AMOUNT || isNaN(productAmount));

// Final price calculation
let finalPrice = productAmount * selectedProduct.price;

console.log(`The price is ${finalPrice} ${selectedProduct.currency}`)

// Discount check
if (finalPrice > PRICE_TO_GET_DISCOUNT) {
  finalPrice *= ((100 - DISCOUNT) / 100); // discount
  console.log(`And we give you the discount ${DISCOUNT}%\n
    So now, the final price is ${finalPrice} ${selectedProduct.currency}`);
}

const wannaMore = prompt('Do you want to buy more?');