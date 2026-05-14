import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, removeProduct }) => {
  return (
    <div
      
        className={
    product.inStock
      ? "card"
      : "card outOfStockClass"
      }
    >
      {/* Product Name */}
      <h3>{product.name}</h3>

      {/* Product Price */}
      <p>Price: {product.price}</p>

      {/* Product Availability */}
      <p>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      {/* Remove Button */}
      <button
        className={styles.button}
        onClick={() => removeProduct(product.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default ProductCard;