import React from 'react';
import { SVG } from './../SVG/SVG';
import { Images } from '../../Themes/Images';
import { useLocation, Link } from 'react-router-dom';
import { websiteRoutes } from '../../Constants/Routes';

import './Footer.scss';

export default function Footer() {
  const location = useLocation();

  return (
    <div className="footer-component">
      <div className="footer-component-left">
        <SVG Url={Images.logo} className="footer-component-left-logo" />
        <div className="footer-component-left-text">
          VISUL URSULUI S.R.L.
        </div>
      </div>
      <div className="footer-component-center">
        {
          websiteRoutes.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.route}
                className={`footer-component-center-item ${item.route === location.pathname && 'active'}`}
              >
                {item.value}
              </Link>
            )
          })
        }
        <div className="footer-component-center-item">

        </div>
      </div>
      <div className="footer-component-right">
        <SVG Url={Images.phone} className="footer-component-right-item" />
        <SVG Url={Images.facebook} className="footer-component-right-item" />
      </div>
    </div>
  )
}