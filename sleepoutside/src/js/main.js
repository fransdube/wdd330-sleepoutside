// main.js
import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

// Create an instance of ProductData
const dataSource = new ProductData('tents');

// Create an instance of ProductList
const listElement = document.querySelector('.product-list');
const productList = new ProductList('tents', dataSource, listElement);

// Initialize the product list
productList.init();