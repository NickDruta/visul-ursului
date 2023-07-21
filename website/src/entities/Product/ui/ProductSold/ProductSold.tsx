import React from "react";
import { Link } from "react-router-dom";
import { soldIcon } from "assets";
import { ProductRecord } from "entities/Product";
import cls from "./ProductSold.module.scss";

interface Props {
  product: ProductRecord;
}

const ProductSold = ({ product }: Props) => {
  return (
    <Link className={cls.productSoldWrapper} to={`/produse/${product.id}`}>
      <img src={soldIcon} alt="" className={cls.iconWrapper} />
      <div className={cls.leftContentWrapper}>
        <div className={cls.title}>{product.name}</div>
        <div className={cls.description}>{product.description}</div>
        <div className={cls.actionButton}>Anunță-mă</div>
      </div>
      <div className={cls.rightContentWrapper}>
        <img className={cls.imageWrapper} src={product.image} alt="" />
      </div>
    </Link>
  );
}

export default ProductSold;