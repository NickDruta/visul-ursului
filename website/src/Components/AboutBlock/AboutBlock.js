import React from 'react';
import { SVG } from './../SVG/SVG';
import { Images } from './../../Themes/Images';
import { Link } from 'react-router-dom';
import AboutBlockPng from './../../Images/about-block.png';

import './AboutBlock.scss';

export default function AboutBlock() {

  return (
    <div className="about-block-component">
      <div className="about-block-component-left">
        <div className="about-block-component-left-title">
          Despre <br /> Visul Ursului
        </div>
        <div className="about-block-component-left-text">
          Visul ursului - mai mult decât o pasiune pentru miere, o întreagă tradiție, care a evoluat pe parcursul multor ani. Am reușit să îmbinăm gustul rafinat și finețea definită într-un produs unic, colectat de pe meleagurile Orheiului Vechi.
        </div>
        <Link className="about-block-component-left-button" to='/despre'>
          Mai mult
        </Link>
      </div>
      <div className="about-block-component-right">
        <SVG Url={Images.rectangleBlock} className="about-block-component-right-rectangle" />
        <img src={AboutBlockPng} className="about-block-component-right-icon" alt="" />
      </div>
    </div>
  )
}