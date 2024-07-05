import React from 'react';

const Protected: React.FC = () => {
  return (
    <div> 
      <h1>This is the protected page</h1>
      <br />
      <h2>You've logged in via the custom login page.</h2>
    </div>
  );
};

export default Protected;