import React from "react";
import { Link } from "react-router-dom";
import { logoIcon } from "assets";
import cls from "./HeaderBlock.module.scss";

const HeaderBlock = () => {
  return (
    <div className={cls.headerBlockWrapper}>
      <div className={cls.leftContentWrapper}>
        <div className={cls.description}>
          <div className={cls.descriptionPart}>Încearcă</div>
          <div className={cls.descriptionPart}>miere</div>
          <div className={cls.descriptionPart}>naturală!</div>
        </div>
        <div className={cls.actionButtonsWrapper}>
          <Link className={cls.actionButton} to="/produse">
            Cumpară
          </Link>
          <Link className={cls.actionButton} to="/despre">
            Despre noi
          </Link>
        </div>
      </div>
      <div className={cls.rightContentWrapper}>
        <img src={logoIcon} className={cls.logoIcon} alt="" />
      </div>
    </div>
  );
};

export default HeaderBlock;
