import { products } from '../../backend-modules/inventoryData.js';

function checkStock(productId) {
  for (const item of products) {
    if (item.id === productId && item.stock > 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(checkStock(5));

function processSale(productId, quantity) {
  for (const item of products) {
    if (item.id === productId && quantity <= item.stock) {
      let newStock = item.stock - quantity;
      return `Item stock: ${item.stock}. Quantity: ${quantity}. Current stock: ${newStock}`;
    } else {
      return 'Error';
    }
  }
}

console.log(processSale(1, 2));

const itemsLeftInStock = products.filter((item) => item.stock > 0);

itemsLeftInStock.forEach((item) => {
  console.log(item.name);
});
