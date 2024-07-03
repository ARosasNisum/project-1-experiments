// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router is used for navigation

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome Page</h1>
      <br />
      <p>
        Please navigate to the <Link to="/login">custom login page</Link> to log in.
      </p>
      <p>Use rod:koala as credentials.</p>
    </div>
  );
};

export default Home;