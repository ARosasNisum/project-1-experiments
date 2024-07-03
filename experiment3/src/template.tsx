import React from 'react';
import {Link, Outlet} from 'react-router-dom'; // Assuming you're using React Router for navigation

const Template: React.FC = () => {
  return (
    <div id="page">
      <header id="header">
        <h1>
          <Link to="/">Custom Login Page</Link> {/* Using Link component for navigation */}
        </h1>
      </header>
      <main id="content"><Outlet/></main> {/* Dynamic content will be rendered here */}
      <footer id="footer"></footer>
    </div>
  );
};

export default Template;