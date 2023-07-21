import React from "react";
import { useLocation, Link } from "react-router-dom";
import clsx from "clsx";
import { facebookIcon, logoIcon, phoneIcon } from "assets";
import { defaultRoutes } from "shared/config";
import cls from "./Footer.module.scss";

const Footer = () => {
  const location = useLocation();

  return (
    <div className={cls.footerWrapper}>
      <div className={cls.leftContentWrapper}>
        <img src={logoIcon} className={cls.logoIcon} alt="" />
        <div className={cls.company}>VISUL URSULUI S.R.L.</div>
      </div>
      <div className={cls.centerContentWrapper}>
        {defaultRoutes.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.route}
              className={clsx(
                cls.centerContentItem,
                item.route === location.pathname && cls.activeRoute
              )}
            >
              {item.value}
            </Link>
          );
        })}
        <div className={cls.centerContentItem}></div>
      </div>
      <div className={cls.rightContentWrapper}>
        <a href="tel:069372401">
          <img src={phoneIcon} alt="" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100086489187059&mibextid=LQQJ4d">
          <img src={facebookIcon} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;