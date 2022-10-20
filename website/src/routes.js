import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';

import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Products from './Pages/Products/Products';

export const useRoutes = () => {
  const publicRoutes = [
    {
      path: '/',
      component: Home,
      exact: true,
    },
    {
      path: '/despre',
      component: About,
      exact: true,
    },
    {
      path: '/produse',
      component: Products,
      exact: true,
    },
    {
      path: '/produse/:id',
      component: ProductDetails,
      exact: true,
    },
    {
      path: '/contacte',
      component: Contacts,
      exact: true,
    },
  ]

  return (
    <>
      <Switch>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </>
  )
}