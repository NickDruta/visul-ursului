import React, { useEffect, useState } from 'react'
import { useHttp } from '../../Hooks/request'

import Product from '../../Components/Product/Product'
import ProductHot from '../../Components/ProductHot/ProductHot'
import ProductSold from '../../Components/ProductSold/ProductSold'

import './Products.scss'

export default function Products() {
  const [products, setProducts] = useState([])
  const { request } = useHttp()

  const getData = async () => {
    const data = await request('/')

    setProducts(data)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', 
    });
    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="products-component">
      <div className="products-component-title">
        {products.length} produs{products.length !== 1 && 'e'} gasite
      </div>
      <div className="products-component-container">
        {
          products.map((item, index) => {
            if (item.isAvailable && item.isHot) {
              return (
                <ProductHot product={item} />
              )
            } else if (item.isAvailable) {
              return (
                <Product product={item} />
              )
            } else return (
              <ProductSold product={item} />
            )
          })
        }
      </div>
    </div>
  )
}
