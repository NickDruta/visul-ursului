import React from 'react';
import { SVG } from './../SVG/SVG';
import { Images } from '../../Themes/Images';
import { Link } from 'react-router-dom';

import './ProductHot.scss';

export default function ProductHot({ product }) {

  return (
    <Link className="product-hot-component" to={`/produse/${product.id}`}>
      <SVG Url={Images.hot} className="product-hot-component-icon" />
      <div className="product-hot-component-left">
        <div className="product-hot-component-left-title">
          {product.name}
        </div>
        <div className="product-hot-component-left-description">
          {product.description}
        </div>
        <div className="product-hot-component-left-button">
          Cumpără
        </div>
      </div>
      <div className="product-hot-component-right">
        <img className="image" src={product.image} alt=""/>
      </div>
    </Link>
  )
}