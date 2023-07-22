import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { collection, getDocs } from "@firebase/firestore";
import { arrowLeftIcon, arrowRightIcon } from "assets";
import {
  ProductRecord,
  Product,
  ProductHot,
  ProductSold,
} from "entities/Product";
import { firestore } from "shared/config";
import cls from "./ProductsSlider.module.scss";

const ProductsSlider = () => {
  const [products, setProducts] = useState<ProductRecord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.matchMedia("(max-width: 500px)").matches;
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartRef = useRef<number | null>(null);

  const getData = async () => {
    const productsCollection = collection(firestore, "produse");
    const productsDoc = await getDocs(productsCollection);
    const data = productsDoc.docs.map((doc) => {
      const productData = doc.data() as ProductRecord;
      return productData;
    });
    setProducts(data);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, [currentIndex]);

  const startAutoplay = () => {
    stopAutoplay();

    intervalRef.current = setInterval(() => {
      goToNextSlide();
    }, 4000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - (isMobile ? 1 : 2) ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const slidesPerView = isMobile ? 1 : 2;
    sliderRef.current!.style.transform = `translateX(-${
      currentIndex * (100 / slidesPerView)
    }%)`;
  }, [currentIndex, isMobile]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartRef.current = event.touches[0].clientX;
    stopAutoplay();
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (touchStartRef.current !== null) {
      const touchMoveX = event.touches[0].clientX;
      const touchDeltaX = touchMoveX - touchStartRef.current;

      const slidesPerView = isMobile ? 1 : 2;
      const slideWidth = 100 / slidesPerView;
      const slideOffset = currentIndex * slideWidth;

      sliderRef.current!.style.transform = `translateX(-${
        slideOffset +
        (touchDeltaX / sliderRef.current!.clientWidth) * slideWidth
      }%)`;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartRef.current !== null) {
      const touchMoveX = touchStartRef.current;
      const touchEndX = touchMoveX - sliderRef.current!.clientWidth / 4;
      if (touchMoveX > touchEndX) {
        goToNextSlide();
      } else if (touchMoveX < touchEndX) {
        goToPrevSlide();
      }
      touchStartRef.current = null;
      startAutoplay();
    }
  };

  return (
    <div
      className={cls.productsSliderWrapper}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={cls.headerWrapper}>
        <div className={cls.title}>Produsele noastre</div>
        <Link className={cls.linkAction} to="/produse">
          Vezi toate
        </Link>
      </div>
      <div className={cls.sliderContainer}>
        <div
          className={clsx(cls.arrowWrapper, cls.leftArrow)}
          onClick={goToPrevSlide}
        >
          <img src={arrowLeftIcon} alt="" />
        </div>
        <div
          className={clsx(cls.arrowWrapper, cls.rightArrow)}
          onClick={goToNextSlide}
        >
          <img src={arrowRightIcon} alt="" />
        </div>
        <div className={cls.swiper} ref={sliderRef}>
          {products.map((item, index) => (
            <div key={index} className={cls.slideItem}>
              {item.isAvailable && item.isHot ? (
                <ProductHot product={item} />
              ) : item.isAvailable ? (
                <Product product={item} />
              ) : (
                <ProductSold product={item} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
