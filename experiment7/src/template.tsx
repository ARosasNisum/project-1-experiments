import React from 'react';
import {Outlet} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div id="page">
      <header id="header">
        <h1>
          <a href="/home">CustomLoginPage with Spring-Security and React</a>
        </h1>
      </header>
      <main id="container">
        {/* Content will be dynamically loaded here */}
          <Outlet/>
      </main>
      <footer id="footer">
        {/* Footer content can be added here */}
      </footer>
    </div>
  );
};

export default App;