import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { websiteRoutes } from '../../Constants/Routes';
import { Images } from '../../Themes/Images';
import { SVG } from '../SVG/SVG';

import './NavBar.scss'


export default function NavBar() {
  const location = useLocation();

  return (
    <div className='navbar-component'>
      <Link to="/" className='navbar-component-left'>
        <SVG
          Url={Images.logo}
          className="navbar-component-left-logo"
        />
      </Link>
      <div className='navbar-component-right'>
        {
          websiteRoutes.map((item, index) => {
            return (
              <Link 
                key={index} 
                to={item.route} 
                className={`navbar-component-right-item ${item.route === location.pathname && 'active'}`}
              >
                {item.value}
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
