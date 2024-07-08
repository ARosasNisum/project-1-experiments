import React from 'react';
import {Outlet} from "react-router-dom";

const Template: React.FC = () => {
  return (
    <div id="page">
      <header id="header">
        <h1><a href="/home">CustomLoginPage with React</a></h1> 
      </header>
      <main id="container">
        <Outlet/>
      </main>
      <footer id="footer">
        {/* Footer content can go here */}
      </footer>
    </div>
  );
};

export default Template;