import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "features/NavBar";
import { Footer } from "features/Footer";
import { useRoutes } from "shared/hooks";
import cls from "./App.module.scss";

function App() {
  const routes = useRoutes();

  useEffect(() => {
    // window.location.reload();
  }, [window.location.pathname]);

  return (
    <BrowserRouter>
      <div className={cls.appWrapper}>
        <NavBar />
        <div className={cls.mainWrapper}>{routes}</div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
