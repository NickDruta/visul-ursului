import React from "react";
import { Images } from "../../Themes/Images";
import { SVG } from "../SVG/SVG";
import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {

  return (
    <div className="header-component">
      <div className="header-component-left">
        <div className="header-component-left-texts">
          <div className="header-component-left-texts-item">
            Încearcă
          </div>
          <div className="header-component-left-texts-item">
            miere
          </div>
          <div className="header-component-left-texts-item">
            naturală!
          </div>
        </div>
        <div className="header-component-left-buttons">
          <Link className="header-component-left-buttons-item" to="/produse">
            Cumpară
          </Link>
          <Link className="header-component-left-buttons-item" to="/despre">
            Despre noi
          </Link>
        </div>
      </div>
      <div className="header-component-right">
        <SVG
          Url={Images.logo}
          className="header-component-right-logo"
        />
      </div>
    </div>
  )
}