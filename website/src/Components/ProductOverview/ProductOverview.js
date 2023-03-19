import React, { useEffect, useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { SVG } from '../SVG/SVG';
import { Images } from '../../Themes/Images';
import { Link } from 'react-router-dom';
import { collection, getDocs } from '@firebase/firestore';
import { firestore } from '../../firebase';

import Product from '../../Components/Product/Product';
import ProductHot from '../../Components/ProductHot/ProductHot';
import ProductSold from '../../Components/ProductSold/ProductSold';

import './ProductOverview.scss';
import 'swiper/css';

export default function ProductOverview() {
  const [products, setProducts] = useState([])
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

  const getData = async () => {
    const productsCollection = collection(firestore, 'produse');
    const productsDoc = await getDocs(productsCollection);
    const data = productsDoc.docs.map(doc => doc.data());

    setProducts([...data]);
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])


  return (
    <div className="product-overview-component">
      <div className="product-overview-component-header">
        <div className="product-overview-component-header-title">
          Produsele noastre
        </div>
        <Link className="product-overview-component-header-link" to='/produse'>
          Vezi toate
        </Link>
      </div>
      <div className="swiper-container">
        <div className="arrow-container left" ref={prevRef}>
          <SVG Url={Images.arrowLeft} fill='transparent' className="arrow-left" />
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          className="swiper"
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={isMobile ? 1 : 2}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            products.map((item, index) => {
              if (item.isAvailable && item.isHot) {
                return (
                  <SwiperSlide key={index}>
                    <ProductHot product={item} />
                  </SwiperSlide>
                )
              } else if (item.isAvailable) {
                return (
                  <SwiperSlide key={index}>
                    <Product product={item} />
                  </SwiperSlide>
                )
              } else return (
                <SwiperSlide key={index}>
                  <ProductSold product={item} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <div className="arrow-container right" ref={nextRef}>
          <SVG Url={Images.arrowRight} fill='transparent' className="arrow-right" />
        </div>
      </div>
    </div>
  )
}
