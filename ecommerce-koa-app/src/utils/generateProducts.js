const fs = require('fs');
const faker = require('faker');

const generateProducts = (numProducts = 1000) => {
  const products = [];

  for (let i = 1; i <= numProducts; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      description: faker.commerce.productDescription(),
      product: faker.commerce.productMaterial(),
      color: faker.commerce.color(),
      createdAt: new Date().toISOString(),
      image: faker.image.imageUrl(),
    });
  }

  fs.writeFileSync('src/products.json', JSON.stringify(products, null, 2));
};

generateProducts();