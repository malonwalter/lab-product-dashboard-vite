import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, removeProduct }) => {

  // If no products exist
  if (products.length === 0) {
    return <h2>No products available</h2>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;