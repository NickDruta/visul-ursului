import React from "react";
import { useLocation, Link } from "react-router-dom";
import clsx from "clsx";
import { logoIcon } from "assets";
import { defaultRoutes } from "shared/config";
import cls from "./NavBar.module.scss";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className={cls.navBarWrapper}>
      <Link to="/" className={cls.leftContentWrapper}>
        <img src={logoIcon} alt="" className={cls.logoIcon} />
      </Link>
      <div className={cls.rightContentWrapper}>
        {defaultRoutes.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.route}
              className={clsx(
                cls.rightContentItem,
                item.route === location.pathname && cls.activeRightItem
              )}
            >
              {item.value}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
