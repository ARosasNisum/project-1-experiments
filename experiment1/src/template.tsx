import React from 'react';
import {Outlet} from "react-router-dom";

const Template: React.FC<{ children?: React.ReactNode }> = () => {
  return (
    <div id="page">
      <div id="header">
        <h1>
          <a href="/home">CustomLoginPage with Spring-Security and React</a>
        </h1>
      </div>
      <div id="container">
        <div id="content"><Outlet/></div>
      </div>
      <div id="footer"></div>
    </div>
  );
};

export default Template;