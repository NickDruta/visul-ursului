import React, { useEffect } from 'react'
import { SVG } from '../../Components/SVG/SVG'
import { Images } from '../../Themes/Images'

import './Contacts.scss'

export default function Contacts() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', 
    });
  }, [])

  return (
    <div className="contacts-component">
      <div className="contacts-component-left">
        <div className="contacts-component-left-logo">
          <SVG Url={Images.logo} />
        </div>
      </div>
      <div className="contacts-component-right">
        <div className="contacts-component-right-title">
          Contactele noastre
        </div>
        <div className="contacts-component-right-subtitle">
          Pentru mai multe detalii puteți suna la numerele de mai jos:
        </div>
        <div className="contacts-component-right-container">
          <div className="contacts-component-right-container-item">
            <div className="contacts-component-right-container-item-image">
              <SVG Url={Images.phone} fill={'#004CBD'}/>
            </div>
            <a className="contacts-component-right-container-item-link" href="tel:+37369372401">
              +373 (69) 372 401
            </a>
            <div className="contacts-component-right-container-item-text">
              Angela Druța
            </div>
          </div>
          <div className="contacts-component-right-container-item">
            <div className="contacts-component-right-container-item-image">
              <SVG Url={Images.phone} fill={'#004CBD'}/>
            </div>
            <a className="contacts-component-right-container-item-link" href="tel:+37369285334">
              +373 (69) 285 334
            </a>
            <div className="contacts-component-right-container-item-text">
              Veceaslav Druța
            </div>
          </div>
          <div className="contacts-component-right-container-item">
            <div className="contacts-component-right-container-item-image">
              <SVG Url={Images.facebook} fill={'#004CBD'}/>
            </div>
            <a className="contacts-component-right-container-item-link" target="_blank" rel="noreferrer" href="https://www.facebook.com/people/Visul-Ursului/100086489187059/">
              Vizualizează
            </a>
            <div className="contacts-component-right-container-item-text">
              Visul Ursului S.R.L.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
