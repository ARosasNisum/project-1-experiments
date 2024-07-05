import React from 'react';
import {Outlet} from "react-router-dom"; // Assuming you'll place your CSS in App.css

const App: React.FC = () => {
  return (
    <div id="page">
      <header id="header">
        <h1><a href="/home">CustomLoginPage with React</a></h1> 
      </header>
      <main id="container">
        <div id="content">
            <Outlet/>
          {/* Dynamic content will be placed here */}
        </div>
      </main>
      <footer id="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default App;