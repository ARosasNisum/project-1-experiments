import React from 'react';
import { Outlet } from 'react-router-dom';

const Template: React.FC = () => {
  return (
    <div>
      <header>
        <h1><a href="/">CustomLoginPage with Spring-Security and JSF</a></h1>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </div>
  );
};

export default Template;
