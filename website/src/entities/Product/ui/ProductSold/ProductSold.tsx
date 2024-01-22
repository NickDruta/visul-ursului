import React from "react";
import { Link } from "react-router-dom";
import { soldIcon } from "assets";
import { ProductRecord } from "entities/Product";
import cls from "./ProductSold.module.scss";
import clsx from "clsx";

interface Props {
  product: ProductRecord;
  className?: string;
}

const ProductSold = ({ product, className }: Props) => {
  return (
    <Link className={clsx(cls.productSoldWrapper, className)} to={`/produse/${product.id}`}>
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