import React, { useEffect } from 'react';
import { useRoutes } from './routes';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';


function App() {
  const routes = useRoutes()

  useEffect(() => {
    // window.location.reload();
  }, [window.location.pathname])

  return (
    <div className="App">
      <NavBar />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
