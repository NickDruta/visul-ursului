import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { ProductsSlider } from "widgets/ProductsSlider";
import { ProductRecord } from "entities/Product";
import { firestore } from "shared/config";
import cls from "./ProductDetails.module.scss";
import clsx from "clsx";

const ProductDetails = () => {
  let { id } = useParams();
  const [product, setProduct] = useState<ProductRecord | null>(null);
  const [number, setNumber] = useState(1);
  const [orderFinished, setOrderFinished] = useState(false);
  const [phone, setPhone] = useState("");
  const [finished, setFinished] = useState(false);

  const getData = async () => {
    const productsCollection = collection(firestore, "produse");
    const productsDoc = await getDocs(productsCollection);
    const data: ProductRecord[] = productsDoc.docs.map(
      (doc) => doc.data() as ProductRecord
    );
    const filteredData = data.find((item) => String(item.id) === id);

    setProduct(filteredData ? filteredData : null);
  };

  const increaseCount = () => {
    setNumber(number + 1);
  };

  const decreaseCount = () => {
    if (number === 1) return;
    setNumber(number - 1);
  };

  const finishOrder = () => {
    setOrderFinished(true);
  };

  const clear = () => {
    setOrderFinished(false);
    setPhone("");
  };

  const sendPhone = async () => {
    if (!phone.length) return;
    try {
      const docRef = await addDoc(collection(firestore, "clienti"), {
        produs: product!.id,
        mobile: phone,
        cantitate: number,
        anunta: !product!.isAvailable,
        data: new Date(),
      });
      console.log("ID: ", docRef.id);
    } catch (err) {
      console.log(err);
    }
    setPhone("");
    setOrderFinished(false);
    setFinished(true);

    setTimeout(() => {
      setFinished(false);
    }, 2000);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [window.location.pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [window.location.pathname]);

  return (
    <div className={cls.pageWrapper}>
      <div className={cls.productDetailsWrapper}>
        <div className={cls.leftContent}>
          <div className={cls.title}>{product ? product.name : ""}</div>
          <div className={cls.description}>
            {product ? product.description : ""}
          </div>
          {!orderFinished ? (
            <div className={cls.actionButtons}>
              <div
                className={clsx(
                  cls.decrease,
                  product && !product.isAvailable && cls.soldStatus,
                  number === 1 && cls.disabledStatus
                )}
                onClick={decreaseCount}
              >
                -
              </div>
              <div className={cls.cantity}>{number}</div>
              <div
                className={clsx(
                  cls.increase,
                  product && !product.isAvailable && cls.soldStatus
                )}
                onClick={increaseCount}
              >
                +
              </div>
              <div
                className={clsx(
                  cls.buy,
                  product && !product.isAvailable && cls.buySoldStatus,
                  finished && cls.buySuccessStatus
                )}
                onClick={finishOrder}
              >
                {finished
                  ? "Plasata cu success"
                  : product && product.isAvailable
                  ? "Cumpără"
                  : "Anunță-mă"}
              </div>
            </div>
          ) : (
            <div className={cls.actionButtons}>
              <input
                type="text"
                className={clsx(
                  cls.input,
                  product && !product.isAvailable && cls.inputSoldStatus
                )}
                placeholder="Introdu numărul de telefon"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div
                className={clsx(
                  cls.buy,
                  product && !product.isAvailable && cls.buySoldStatus,
                  !phone.length && cls.disabledStatus
                )}
                onClick={sendPhone}
              >
                Trimite
              </div>
              <div className={cls.cancel} onClick={clear}>
                x
              </div>
            </div>
          )}
        </div>
        <div className={cls.rightContent}>
          <img src={product ? product.image : ""} alt="" />
        </div>
      </div>
      <ProductsSlider />
    </div>
  );
}

export default ProductDetails;