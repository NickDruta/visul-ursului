import React, { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import {
  ProductRecord,
  Product,
  ProductHot,
  ProductSold,
} from "entities/Product";
import { firestore } from "shared/config";
import { LoadingSpinner } from "shared/ui";
import cls from "./Products.module.scss";

const Products = () => {
  const [products, setProducts] = useState<ProductRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);

    const productsCollection = collection(firestore, "produse");
    const productsDoc = await getDocs(productsCollection);
    const data = productsDoc.docs.map((doc) => {
      const productData = doc.data() as ProductRecord;
      return productData;
    });
    setProducts(data.sort(function(x, y) {
      return (x.isHot === y.isHot)? 0 : x? -1 : 1;
    }));

    setIsLoading(false);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={cls.productsWrapper}>
      {
        isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className={cls.title}>
              {products.length} produs{products.length !== 1 && "e"} gasite
            </div>
            <div className={cls.container}>
              {products.map((item, index) => {
                if (item.isAvailable && item.isHot) {
                  return <ProductHot product={item}/>;
                } else if (item.isAvailable) {
                  return <Product product={item}/>;
                } else return <ProductSold product={item}/>;
              })}
            </div>
          </>
        )
      }
    </div>
  );
};

export default Products;
