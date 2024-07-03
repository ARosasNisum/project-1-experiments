import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome Page</h1>
      <br />
      <p>
        Please navigate to the <Link to="/protected">custom login page</Link> to log in.
      </p>
      {/* Removed hardcoded credentials - NEVER store credentials in the codebase */}
    </div>
  );
};

export default HomePage;