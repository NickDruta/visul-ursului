import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductOverview from '../../Components/ProductOverview/ProductOverview';
import { collection, getDocs, addDoc } from '@firebase/firestore';
import { firestore } from '../../firebase';

import './ProductDetails.scss'

export default function ProductDetails() {
  let { id } = useParams()
  const [product, setProduct] = useState({})
  const [number, setNumber] = useState(1)
  const [orderFinished, setOrderFinished] = useState(false)
  const [phone, setPhone] = useState('')
  const [finished, setFinished] = useState(false)

  const getData = async () => {
    const productsCollection = collection(firestore, 'produse');
    const productsDoc = await getDocs(productsCollection);
    const data = productsDoc.docs.map(doc => doc.data());

    setProduct(data.find((item) => item.id == id))
  }

  const increaseCount = () => {
    setNumber(number + 1)
  }

  const decreaseCount = () => {
    if (number === 1) return
    setNumber(number - 1)
  }

  const finishOrder = () => {
    setOrderFinished(true)
  }

  const clear = () => {
    setOrderFinished(false)
    setPhone("")
  }

  const sendPhone = async () => {
    if (!phone.length) return
    try {
      const docRef = await addDoc(collection(firestore, "clienti"), {
        produs: product.id,
        mobile: phone,
        cantitate: number,
        anunta: !product.isAvailable,
      })
      console.log("ID: ", docRef.id);
    } catch (err) {
      console.log(err)
    }
    setPhone("")
    setOrderFinished(false)
    setFinished(true)
    
    setTimeout(() => {
      setFinished(false)
    }, 2000)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [window.location.pathname])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [window.location.pathname])

  return (
    <div className="product-details-component">
      <div className="product-details-component-container">
        <div className="product-details-component-container-left">
          <div className="product-details-component-container-left-title">
            {product.name}
          </div>
          <div className="product-details-component-container-left-text">
            {product.description}
          </div>
          {
            !orderFinished ? (
              <div className="product-details-component-container-left-actions">
                <div
                  className={`product-details-component-container-left-actions-decrease ${!product.isAvailable && "sold"} ${number === 1 && 'disabled'}`}
                  onClick={decreaseCount}
                >
                  -
                </div>
                <div className="product-details-component-container-left-actions-number">
                  {number}
                </div>
                <div
                  className={`product-details-component-container-left-actions-increase ${!product.isAvailable && "sold"}`}
                  onClick={increaseCount}
                >
                  +
                </div>
                <div
                  className={`product-details-component-container-left-actions-buy ${!product.isAvailable && "sold"} ${finished && "success"}`}
                  onClick={finishOrder}
                >
                  {finished ? "Plasata cu success" : product.isAvailable ? "Cumpără" : "Anunță-mă"}
                </div>
              </div>
            ) : (
              <div className="product-details-component-container-left-actions">
                <input
                  type="text"
                  className={`product-details-component-container-left-actions-input ${!product.isAvailable && "sold"}`}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div
                  className={`product-details-component-container-left-actions-buy ${!product.isAvailable && "sold"} ${!phone.length && "disabled"}`}
                  onClick={sendPhone}
                >
                  Trimite
                </div>
                <div
                  className="product-details-component-container-left-actions-cancel"
                  onClick={clear}
                >
                  x
                </div>
              </div>
            )
          }
        </div>
        <div className="product-details-component-container-right">
          <img src={product.image} alt="" />
        </div>
      </div>
      <ProductOverview />
    </div>
  )
}