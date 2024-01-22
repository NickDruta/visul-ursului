import React from "react";
import { Link } from "react-router-dom";
import { hotIcon } from "assets";
import { ProductRecord } from "entities/Product";
import cls from "./ProductHot.module.scss";
import clsx from "clsx";

interface Props {
  product: ProductRecord;
  className?: string;
}

const ProductHot = ({ product, className }: Props) => {
  return (
    <Link className={clsx(cls.productHotWrapper, className)} to={`/produse/${product.id}`}>
      <img src={hotIcon} className={cls.iconWrapper} alt="" />
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

export default ProductHot;
