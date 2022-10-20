import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header';
import ProductOverview from '../../Components/ProductOverview/ProductOverview';
import AboutBlock from '../../Components/AboutBlock/AboutBlock';
import ContactsBlock from '../../Components/ContactsBlock/ContactsBlock';

import './Home.scss'

export default function Home() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', 
    });
  }, [])

  return (
    <div className="home-component">
      <Header/>
      <ProductOverview />
      <AboutBlock />
      <ContactsBlock />
    </div>
  )
}
