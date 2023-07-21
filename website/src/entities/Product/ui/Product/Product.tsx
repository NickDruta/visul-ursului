import React from "react";
import { Link } from "react-router-dom";
import { ProductRecord } from "entities/Product";
import cls from "./Product.module.scss";

interface Props {
  product: ProductRecord;
}

const Product = ({ product }: Props) => {
  return (
    <Link className={cls.productWrapper} to={`/produse/${product.id}`}>
      <div className={cls.leftContentWrapper}>
        <div className={cls.title}>{product.name}</div>
        <div className={cls.description}>{product.description}</div>
        <div className={cls.actionButton}>Cumpără</div>
      </div>
      <div className={cls.rightContentWrapper}>
        <img className={cls.imageWrapper} src={product.image} alt="" />
      </div>
    </Link>
  );
};

export default Product;
