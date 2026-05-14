import React, { useState } from 'react';
import ProductList from './components/ProductList';
import data from './db.json';

const App = () => {

  // Initial products
  const [products, setProducts] = useState(data.products);

  // Filter state
  const [filter, setFilter] = useState('all');

  // Filter Logic
  const filteredProducts = products.filter((product) => {

    if (filter === 'inStock') {
      return product.inStock;
    }

    if (filter === 'outOfStock') {
      return !product.inStock;
    }

    return true;
  });

  // Remove Product Function
  const removeProduct = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);
  };

  return (
    <div>
      {/* Dashboard Title */}
      <h1>Product Dashboard</h1>

      {/* Filter Buttons */}
      <button onClick={() => setFilter('all')}>
        All
      </button>

      <button onClick={() => setFilter('inStock')}>
        In Stock
      </button>

      <button onClick={() => setFilter('outOfStock')}>
        Out of Stock
      </button>

      {/* Product List */}
      <ProductList
        products={filteredProducts}
        removeProduct={removeProduct}
      />
    </div>
  );
};

export default App;