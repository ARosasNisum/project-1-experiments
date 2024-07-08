import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome Page</h1>
      <br />
      <p>
        Please navigate to the <Link to="/protected">custom login page</Link> to log in.
      </p>
      {/* Omitting the display of credentials for security reasons */} 
    </div>
  );
};

export default Home;