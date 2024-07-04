import React from 'react';
import { Outlet } from 'react-router-dom';

const Template: React.FC = () => {
  return (
    <div className="page">
      <header className="header">
        <h1><a href="/">CustomLoginPage with Spring-Security and JSF</a></h1>
      </header>
      <main className="container">
        <div className="content">
          <Outlet/>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default Template;
