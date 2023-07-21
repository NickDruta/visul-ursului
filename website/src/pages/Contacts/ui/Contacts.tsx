import React, { useEffect } from "react";
import { facebookIcon, logoIcon, phoneIcon } from "assets";
import cls from "./Contacts.module.scss";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={cls.contactsPageWrapper}>
      <div className={cls.leftContent}>
        <div className={cls.logoIcon}>
          <img src={logoIcon} />
        </div>
      </div>
      <div className={cls.rightContent}>
        <div className={cls.title}>Contactele noastre</div>
        <div className={cls.subtitle}>
          Pentru mai multe detalii puteți suna la numerele de mai jos:
        </div>
        <div className={cls.itemsWrapper}>
          <div className={cls.item}>
            <div className={cls.image}>
              <img src={phoneIcon} alt="" />
            </div>
            <a className={cls.link} href="tel:+37369372401">
              +373 (69) 372 401
            </a>
            <div>Angela Druța</div>
          </div>
          <div className={cls.item}>
            <div className={cls.image}>
              <img src={phoneIcon} alt="" />
            </div>
            <a className={cls.link} href="tel:+37369285334">
              +373 (69) 285 334
            </a>
            <div>Veceaslav Druța</div>
          </div>
          <div className={cls.item}>
            <div className={cls.image}>
              <img src={facebookIcon} alt="" />
            </div>
            <a
              className={cls.link}
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/people/Visul-Ursului/100086489187059/"
            >
              Vizualizează
            </a>
            <div>Visul Ursului S.R.L.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;