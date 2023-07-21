import React, { useEffect } from "react";
import { ProductsSlider } from "widgets/ProductsSlider";
import { HeaderBlock } from "entities/HeaderBlock";
import { AboutBlock } from "entities/AboutBlock";
import { ContactsBlock } from "entities/ContactsBlock";
import cls from "./Home.module.scss";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={cls.homeWrapper}>
      <HeaderBlock />
      <ProductsSlider />
      <AboutBlock />
      <ContactsBlock />
    </div>
  );
};

export default Home;
