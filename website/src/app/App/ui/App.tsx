import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "features/NavBar";
import { Footer } from "features/Footer";
import { useRoutes } from "shared/hooks";

function App() {
  const routes = useRoutes();

  useEffect(() => {
    // window.location.reload();
  }, [window.location.pathname]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {routes}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
