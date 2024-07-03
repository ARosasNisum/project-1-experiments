// Template.tsx
import React from 'react';
import {Outlet} from "react-router-dom";

const Template: React.FC<React.PropsWithChildren> = () => {
  return (
    <div id={'page'}>
      <header id={'header'}>
        <h1>
          <a href="/">CustomLoginPage with Spring Security and React</a>
        </h1>
      </header>
      <main id={'container'}>
        <div><Outlet/></div>
      </main>
      <footer id={'footer'}></footer>
    </div>
  );
};

export default Template;