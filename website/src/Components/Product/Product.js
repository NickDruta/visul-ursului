import React from 'react';
import { Link } from 'react-router-dom';

import './Product.scss';

export default function Product({ product }) {

  return (
    <Link className="product-component" to={`/produse/${product.id}`}>
      <div className="product-component-left">
        <div className="product-component-left-title">
          {product.name}
        </div>
        <div className="product-component-left-description">
          {product.description}
        </div>
        <div className="product-component-left-button">
          Cumpără
        </div>
      </div>
      <div className="product-component-right">
        <img className="image" src={product.image} alt=""/>
      </div>
    </Link>
  )
}