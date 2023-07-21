import React from "react";
import { Link } from "react-router-dom";
import { rectangleIcon, contactsBlockImage } from "assets";
import cls from "./ContactsBlock.module.scss";

const ContactsBlock = () => {
  return (
    <div className={cls.contactsBlockWrapper}>
      <div className={cls.leftContentWrapper}>
        <img src={rectangleIcon} className={cls.rectangleIcon} alt="" />
        <img src={contactsBlockImage} className={cls.imageWrapper} alt="" />
      </div>
      <div className={cls.rightContentWrapper}>
        <div className={cls.title}>Contactele noastre</div>
        <div className={cls.description}>
          Pentru a afla mai multe detalii sau a face cunoștință cu calitatea
          noastră, puteți să ne apelați.
        </div>
        <div className={cls.actionButtonWrapper}>
          <Link
            className={cls.actionButton}
            to="/contacte"
          >
            Mai mult
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
