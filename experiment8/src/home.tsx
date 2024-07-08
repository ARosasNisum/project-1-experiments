import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome Page</h1>
      <br />
      <p>
        Please navigate to the <Link to="/protected">login page</Link> to log in.
      </p>
      {/* Removed hardcoded credentials for security reasons */} 
    </div>
  );
};

export default HomePage;