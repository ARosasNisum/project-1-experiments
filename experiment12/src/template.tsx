import React from 'react';
import {Outlet} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div id="page"> 
      <header id="header">
        <h1>
          <a href="/home">CustomLoginPage with React</a> {/* Updated link text */}
        </h1>
      </header>
      <main id="container">
        <div id="content">
         <Outlet/>
        </div>
      </main>
      <footer id="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default App;