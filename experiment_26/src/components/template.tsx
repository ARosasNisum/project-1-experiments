import React from 'react';
import { Outlet } from 'react-router-dom';

const Template: React.FC = () => {
  return (
    <div id="page">
      <header id="header">
        <h1><a href="/">CustomLoginPage with Spring-Security and JSF</a></h1>
      </header>
      <div id="container">
        <main id="content">
          <Outlet/>
        </main>
      </div>
      <footer id="footer"></footer>
    </div>
  );
};

export default Template;
