import React from "react";
import { Link } from "react-router-dom";
import { aboutBlockImage, rectangleIcon } from "assets";
import cls from "./AboutBlock.module.scss";

const AboutBlock = () => {
  return (
    <div className={cls.aboutBlockWrapper}>
      <div className={cls.leftContentWrapper}>
        <div className={cls.title}>
          Despre <br /> Visul Ursului
        </div>
        <div className={cls.description}>
          Visul ursului - mai mult decât o pasiune pentru miere, o întreagă
          tradiție, care a evoluat pe parcursul multor ani. Am reușit să îmbinăm
          gustul rafinat și finețea definită într-un produs unic, colectat de pe
          meleagurile Orheiului Vechi.
        </div>
        <Link className={cls.actionButton} to="/despre">
          Mai mult
        </Link>
      </div>
      <div className={cls.rightContentWrapper}>
        <img src={rectangleIcon} className={cls.rectangleIcon} alt="" />
        <img src={aboutBlockImage} className={cls.imageWrapper} alt="" />
      </div>
    </div>
  );
}

export default AboutBlock;
