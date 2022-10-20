import React from 'react';
import { SVG } from '../SVG/SVG';
import { Images } from '../../Themes/Images';
import { Link } from 'react-router-dom';
import ContactsBlockPng from './../../Images/contacts-block.png'

import './ContactsBlock.scss';

export default function ContactsBlock() {

  return (
    <div className="contacts-block-component">
      <div className="contacts-block-component-left">
        <SVG Url={Images.rectangleBlock} className="contacts-block-component-left-rectangle" />
        <img src={ContactsBlockPng} className="contacts-block-component-left-icon" alt="" />
      </div>
      <div className="contacts-block-component-right">
        <div className="contacts-block-component-right-title">
          Contactele noastre
        </div>
        <div className="contacts-block-component-right-text">
          Pentru a afla mai multe detalii sau a face cunoștință cu calitatea noastră, puteți să ne apelați.
        </div>
        <Link className="contacts-block-component-right-button" to='/contacte'>
          Mai mult
        </Link>
      </div>
    </div>
  )
}