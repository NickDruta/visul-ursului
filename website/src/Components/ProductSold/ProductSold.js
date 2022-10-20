import React from 'react';
import { SVG } from '../SVG/SVG';
import { Images } from '../../Themes/Images';
import { Link } from 'react-router-dom';

import './ProductSold.scss';

export default function ProductSold({ product }) {

  return (
    <Link className="product-sold-component" to={`/produse/${product.id}`}>
      <SVG Url={Images.sold} className="product-sold-component-icon" />
      <div className="product-sold-component-left">
        <div className="product-sold-component-left-title">
          {product.name}
        </div>
        <div className="product-sold-component-left-description">
          {product.description}
        </div>
        <div className="product-sold-component-left-button">
          Anunță-mă
        </div>
      </div>
      <div className="product-sold-component-right">
        <img className="image" src={product.image} alt="" />
      </div>
    </Link>
  )
}