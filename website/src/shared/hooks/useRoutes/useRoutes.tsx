import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { About } from "pages/About";
import { Products } from "pages/Products";
import { ProductDetails } from "pages/ProductDetails";
import { Contacts } from "pages/Contacts";

export const useRoutes = () => {
  const publicRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/despre",
      element: <About />,
    },
    {
      path: "/produse",
      element: <Products />,
    },
    {
      path: "/produse/:id",
      element: <ProductDetails />,
    },
    {
      path: "/contacte",
      element: <Contacts />,
    },
  ];

  return (
    <>
      <Routes>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};
