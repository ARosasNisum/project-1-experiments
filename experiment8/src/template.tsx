import React from 'react';
import {Outlet} from "react-router-dom"; // Assuming you've moved your CSS to this file

const App: React.FC = () => {
  return (
    <div id="page">
      <header id="header">
        <h1>
          <a href="/home">CustomLoginPage with React and TypeScript</a> 
        </h1>
      </header>
      <main id="container">
        <div id="content">
          <Outlet/>
        </div>
      </main>
      <footer id="footer">
        {/* Footer content can go here */}
      </footer>
    </div>
  );
};

export default App;